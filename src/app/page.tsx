import Link from "next/link";
import Footer from "@/layouts/components/Footer";
import Navbar from "@/layouts/components/Navbar";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-50">
      <Navbar />


      <Footer />
    </div>
  );
}
