// pages/video-call.tsx
'use client'

import { useEffect, useRef, useState } from 'react'
import Peer from 'simple-peer'
import { io } from 'socket.io-client'

export default function VideoCall() {
  const [myId, setMyId] = useState('') // User's custom ID
  const [customIdInput, setCustomIdInput] = useState('') // Input for setting custom ID
  const [idRegistered, setIdRegistered] = useState(false) // Track if ID is registered
  const [stream, setStream] = useState<MediaStream | null>(null)
  const [receivingCall, setReceivingCall] = useState(false)
  const [caller, setCaller] = useState('')
  const [callerSignal, setCallerSignal] = useState<any>()
  const [callAccepted, setCallAccepted] = useState(false)
  const [idToCall, setIdToCall] = useState('') // ID to connect to
  const [callEnded, setCallEnded] = useState(false)
  const [isScreenSharing, setIsScreenSharing] = useState(false)
  const [screenStream, setScreenStream] = useState<MediaStream | null>(null)
  const [errorMsg, setErrorMsg] = useState('')

  const myVideo = useRef<HTMLVideoElement>(null)
  const userVideo = useRef<HTMLVideoElement>(null)
  const connectionRef = useRef<Peer.Instance | null>(null)
  const socketRef = useRef<any>(null)

  useEffect(() => {
    // Connect to signaling server
    socketRef.current = io('http://localhost:8000')

    // Get camera/mic permissions
    navigator.mediaDevices.getUserMedia({ video: true, audio: true })
      .then(stream => {
        setStream(stream)
        if (myVideo.current) {
          myVideo.current.srcObject = stream
        }
      })
      .catch(err => {
        console.error("Error accessing media devices:", err)
        setErrorMsg("Cannot access camera and microphone. Please check permissions.")
      })

    // Socket event handlers
    socketRef.current.on('idRegistered', (data: { success: boolean, message: string }) => {
      if (data.success) {
        setIdRegistered(true)
        setErrorMsg('')
      } else {
        setErrorMsg(data.message || 'Failed to register ID')
        setIdRegistered(false)
      }
    })

    socketRef.current.on('callUser', (data: any) => {
      setReceivingCall(true)
      setCaller(data.from)
      setCallerSignal(data.signal)
    })

    socketRef.current.on('userNotFound', (data: { userId: string }) => {
      setErrorMsg(`User ${data.userId} not found or offline`)
    })

    socketRef.current.on('callAccepted', (data: any) => {
      setCallAccepted(true)
      if (connectionRef.current) {
        connectionRef.current.signal(data.signal)
      }
    })

    return () => {
      // Clean up
      socketRef.current?.disconnect()
      stream?.getTracks().forEach(track => track.stop())
      screenStream?.getTracks().forEach(track => track.stop())
    }
  }, [])

  const registerMyId = () => {
    if (!customIdInput.trim()) {
      setErrorMsg('Please enter a valid ID')
      return
    }
    
    // Unregister previous ID if exists
    if (idRegistered && myId) {
      socketRef.current.emit('unregisterUser', { userId: myId })
    }
    
    // Register new ID
    socketRef.current.emit('registerUser', { userId: customIdInput })
    setMyId(customIdInput)
  }

  const callUser = (id: string) => {
    if (!idRegistered) {
      setErrorMsg('Please register your ID first')
      return
    }
    
    if (!id.trim()) {
      setErrorMsg('Please enter a valid ID to call')
      return
    }
    
    setErrorMsg('')
    const peer = new Peer({
      initiator: true,
      trickle: false,
      stream: stream
    })

    peer.on('signal', (data) => {
      socketRef.current.emit('callUser', {
        userToCall: id,
        signalData: data,
        from: myId
      })
    })

    peer.on('stream', (currentStream) => {
      if (userVideo.current) {
        userVideo.current.srcObject = currentStream
      }
    })

    peer.on('error', (err) => {
      console.error('Peer connection error:', err)
      setErrorMsg('Connection error. Please try again.')
      leaveCall()
    })

    connectionRef.current = peer
  }

  const answerCall = () => {
    setCallAccepted(true)
    setErrorMsg('')
    
    const peer = new Peer({
      initiator: false,
      trickle: false,
      stream: stream
    })

    peer.on('signal', (data) => {
      socketRef.current.emit('answerCall', { 
        signal: data, 
        to: caller 
      })
    })

    peer.on('stream', (currentStream) => {
      if (userVideo.current) {
        userVideo.current.srcObject = currentStream
      }
    })

    peer.on('error', (err) => {
      console.error('Peer connection error:', err)
      setErrorMsg('Connection error. Please try again.')
      leaveCall()
    })

    peer.signal(callerSignal)
    connectionRef.current = peer
  }

  const shareScreen = async () => {
    if (!isScreenSharing) {
      try {
        const screenCaptureStream = await navigator.mediaDevices.getDisplayMedia({
          video: true
        })
        
        setScreenStream(screenCaptureStream)
        
        // If in a call, replace video track
        if (connectionRef.current) {
          const videoTrack = screenCaptureStream.getVideoTracks()[0]
          const senders = connectionRef.current._pc.getSenders().find(
            (s: any) => s.track?.kind === 'video'
          )
          
          if (senders) {
            senders.replaceTrack(videoTrack)
          }
          
          // Replace the local video with screen share
          if (myVideo.current) {
            myVideo.current.srcObject = screenCaptureStream
          }
          
          // Handle when screen sharing stops
          videoTrack.onended = () => {
            stopScreenSharing()
          }
        }
        
        setIsScreenSharing(true)
      } catch (err) {
        console.error("Error sharing screen:", err)
        setErrorMsg("Failed to share screen. Please try again.")
      }
    } else {
      stopScreenSharing()
    }
  }
  
  const stopScreenSharing = () => {
    if (screenStream) {
      screenStream.getTracks().forEach(track => track.stop())
      
      // Switch back to camera
      if (myVideo.current && stream) {
        myVideo.current.srcObject = stream
      }
      
      // If in a call, replace the screen share track with video track
      if (connectionRef.current && stream) {
        const videoTrack = stream.getVideoTracks()[0]
        const senders = connectionRef.current._pc.getSenders().find(
          (s: any) => s.track?.kind === 'video'
        )
        
        if (senders && videoTrack) {
          senders.replaceTrack(videoTrack)
        }
      }
      
      setScreenStream(null)
      setIsScreenSharing(false)
    }
  }

  const leaveCall = () => {
    setCallEnded(true)
    setCallAccepted(false)
    
    if (connectionRef.current) {
      connectionRef.current.destroy()
      connectionRef.current = null
    }
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <h1 className="text-3xl font-bold mb-6">Tech Interview Video Call</h1>
      
      {errorMsg && (
        <div className="w-full max-w-3xl bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
          {errorMsg}
        </div>
      )}
      
      {/* ID Registration Section */}
      <div className="w-full max-w-3xl bg-white p-6 rounded-lg shadow mb-6">
        <h2 className="text-xl font-semibold mb-4">1. Register Your ID</h2>
        <div className="flex items-center gap-4">
          <input
            type="text"
            value={customIdInput}
            onChange={(e) => setCustomIdInput(e.target.value)}
            placeholder="Enter your custom ID (e.g., 2001)"
            className="flex-1 p-2 border rounded"
            disabled={idRegistered}
          />
          {!idRegistered ? (
            <button
              onClick={registerMyId}
              className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
            >
              Register
            </button>
          ) : (
            <div className="flex items-center gap-2">
              <span className="text-green-600 font-medium">Registered as: {myId}</span>
              <button
                onClick={() => {
                  socketRef.current.emit('unregisterUser', { userId: myId })
                  setIdRegistered(false)
                  setMyId('')
                }}
                className="bg-gray-600 text-white py-1 px-2 rounded text-sm hover:bg-gray-700"
              >
                Change
              </button>
            </div>
          )}
        </div>
        <p className="mt-2 text-sm text-gray-500">Register an ID so others can call you using this ID.</p>
      </div>
      
      {/* Videos Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-3xl mb-6">
        <div className="bg-white p-4 rounded-lg shadow">
          <h2 className="text-lg font-semibold mb-2">Your Video</h2>
          <div className="relative bg-black rounded-md overflow-hidden" style={{ height: '240px' }}>
            <video playsInline muted ref={myVideo} autoPlay className="w-full h-full object-cover" />
          </div>
        </div>
        
        {callAccepted && !callEnded ? (
          <div className="bg-white p-4 rounded-lg shadow">
            <h2 className="text-lg font-semibold mb-2">Remote Video</h2>
            <div className="relative bg-black rounded-md overflow-hidden" style={{ height: '240px' }}>
              <video playsInline ref={userVideo} autoPlay className="w-full h-full object-cover" />
            </div>
            <p className="mt-2 text-sm text-gray-500">Connected with: {idToCall}</p>
          </div>
        ) : (
          <div className="bg-white p-4 rounded-lg shadow">
            <h2 className="text-lg font-semibold mb-2">Remote Video</h2>
            <div className="relative bg-gray-200 rounded-md overflow-hidden flex items-center justify-center" style={{ height: '240px' }}>
              <p className="text-gray-500">No connection</p>
            </div>
          </div>
        )}
      </div>
      
      {/* Call Controls Section */}
      <div className="w-full max-w-3xl bg-white p-6 rounded-lg shadow mb-6">
        <h2 className="text-xl font-semibold mb-4">2. Make a Call</h2>
        <div className="flex flex-col md:flex-row items-center gap-4 mb-4">
          <input
            type="text"
            value={idToCall}
            onChange={(e) => setIdToCall(e.target.value)}
            placeholder="Enter ID to call (e.g., 2002)"
            className="flex-1 p-2 border rounded"
            disabled={!idRegistered || callAccepted}
          />
          
          {callAccepted && !callEnded ? (
            <button
              onClick={leaveCall}
              className="w-full md:w-auto bg-red-600 text-white py-2 px-6 rounded hover:bg-red-700"
            >
              End Call
            </button>
          ) : (
            <button
              onClick={() => callUser(idToCall)}
              className="w-full md:w-auto bg-green-600 text-white py-2 px-6 rounded hover:bg-green-700"
              disabled={!idRegistered || !idToCall.trim()}
            >
              Call
            </button>
          )}
        </div>
        
        {callAccepted && !callEnded && (
          <div className="mt-4">
            <button
              onClick={isScreenSharing ? stopScreenSharing : shareScreen}
              className={`w-full py-2 px-4 rounded ${
                isScreenSharing 
                  ? 'bg-yellow-600 hover:bg-yellow-700' 
                  : 'bg-blue-600 hover:bg-blue-700'
              } text-white`}
            >
              {isScreenSharing ? 'Stop Screen Sharing' : 'Share Screen'}
            </button>
          </div>
        )}
      </div>
      
      {/* Incoming Call Alert */}
      {receivingCall && !callAccepted && (
        <div className="fixed bottom-8 right-8 bg-white p-4 rounded-lg shadow-lg border-l-4 border-blue-500">
          <h3 className="font-semibold">Incoming Call from {caller}</h3>
          <div className="mt-3 flex gap-2">
            <button 
              className="bg-green-600 text-white py-1 px-4 rounded hover:bg-green-700"
              onClick={answerCall}
            >
              Answer
            </button>
            <button 
              className="bg-red-600 text-white py-1 px-4 rounded hover:bg-red-700"
              onClick={() => setReceivingCall(false)}
            >
              Decline
            </button>
          </div>
        </div>
      )}
    </div>
  )
}