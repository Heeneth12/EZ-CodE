"use client";
import React, { useState, useEffect } from 'react';
import {
  Dialog,
  Disclosure,
  Popover,
  Transition
} from '@headlessui/react';
import {
  Bars3Icon,
  CodeBracketIcon,
  CommandLineIcon,
  CpuChipIcon,
  ServerIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline';
import { ChevronDownIcon, PlayCircleIcon, QuestionMarkCircleIcon } from '@heroicons/react/20/solid';

const compilerFeatures = [
  { name: 'Code Editor', description: 'Write and edit code with syntax highlighting', href: '/editor', icon: CodeBracketIcon },
  { name: 'Terminal', description: 'Access command-line interface', href: '/terminal', icon: CommandLineIcon },
  { name: 'Language Support', description: '15+ programming languages available', href: '/languages', icon: CpuChipIcon },
  { name: 'Code Sharing', description: 'Share your code snippets easily', href: '/share', icon: ServerIcon },
];

const helpResources = [
  { name: 'Documentation', href: '/docs', icon: PlayCircleIcon },
  { name: 'Get Help', href: '/support', icon: QuestionMarkCircleIcon },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Add scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled ? "bg-white shadow-md" : "bg-white/95"
      }`}>
      <nav
        aria-label="Global"
        className="mx-auto flex max-w-7xl items-center justify-between p-4 lg:px-8">
        <div className="flex lg:flex-1">
          <a href="/" className="flex items-center gap-2 -m-1.5 p-1.5 group">
            <img
              alt="EZ-CodE logo"
              src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600"
              className="h-8 w-auto transition-transform duration-300 group-hover:scale-110"
            />
            <span className="text-indigo-600 font-bold text-xl tracking-tight transition-colors duration-300 group-hover:text-indigo-500">
              EZ-CodE
            </span>
          </a>
        </div>

        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700 hover:bg-gray-100 transition-colors duration-300">
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="h-6 w-6" />
          </button>
        </div>

        <Popover.Group className="hidden lg:flex lg:gap-x-8">
          <Popover className="relative">
            {({ open }) => (
              <>
                <Popover.Button
                  className={`flex items-center gap-x-1 rounded-md px-3 py-2 text-sm font-medium ${
                    open
                      ? "text-indigo-600"
                      : "text-gray-700 hover:text-indigo-600"
                  } transition-colors duration-300`}>
                  Features
                  <ChevronDownIcon
                    aria-hidden="true"
                    className={`h-5 w-5 flex-none transition-transform duration-300 ${
                      open ? "rotate-180 text-indigo-600" : "text-gray-400"
                    }`}
                  />
                </Popover.Button>

                <Transition
                  show={open}
                  enter="transition ease-out duration-200"
                  enterFrom="opacity-0 translate-y-1"
                  enterTo="opacity-100 translate-y-0"
                  leave="transition ease-in duration-150"
                  leaveFrom="opacity-100 translate-y-0"
                  leaveTo="opacity-0 translate-y-1">
                  <Popover.Panel className="absolute left-1/2 z-10 mt-3 w-screen max-w-md -translate-x-1/2 transform rounded-xl bg-white p-2 shadow-lg ring-1 ring-gray-900/5">
                    <div className="grid grid-cols-1 gap-2 p-2">
                      {compilerFeatures.map((item) => (
                        <div
                          key={item.name}
                          className="group relative flex items-center gap-x-6 rounded-lg p-3 text-sm hover:bg-gray-50 transition-colors duration-300">
                          <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-indigo-50 group-hover:bg-indigo-100 transition-colors duration-300">
                            <item.icon
                              aria-hidden="true"
                              className="h-6 w-6 text-indigo-600 group-hover:text-indigo-700"
                            />
                          </div>
                          <div className="flex-auto">
                            <a
                              href={item.href}
                              className="block font-medium text-gray-900 group-hover:text-indigo-600 transition-colors duration-300">
                              {item.name}
                              <span className="absolute inset-0" />
                            </a>
                            <p className="mt-1 text-gray-600">
                              {item.description}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50 rounded-b-lg">
                      {helpResources.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          className="flex items-center justify-center gap-x-2.5 p-3 text-sm font-medium text-gray-900 hover:bg-gray-100 transition-colors duration-300">
                          <item.icon
                            aria-hidden="true"
                            className="h-5 w-5 flex-none text-indigo-500"
                          />
                          {item.name}
                        </a>
                      ))}
                    </div>
                  </Popover.Panel>
                </Transition>
              </>
            )}
          </Popover>

          <a
            href="/languages"
            className="rounded-md px-3 py-2 text-sm font-medium text-gray-700 hover:text-indigo-600 transition-colors duration-300">
            Languages
          </a>

          <a
            href="/examples"
            className="rounded-md px-3 py-2 text-sm font-medium text-gray-700 hover:text-indigo-600 transition-colors duration-300">
            Examples
          </a>

          <a
            href="/docs"
            className="rounded-md px-3 py-2 text-sm font-medium text-gray-700 hover:text-indigo-600 transition-colors duration-300">
            Docs
          </a>
        </Popover.Group>

        <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:gap-x-4">
          <a
            href="/login"
            className="rounded-md px-4 py-2 text-sm font-medium text-indigo-600 hover:text-indigo-700 transition-colors duration-300">
            Log in
          </a>
          <a
            href="/register"
            className="rounded-md bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition-colors duration-300">
            Sign up
          </a>
        </div>
      </nav>

      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}>
        <div className="fixed inset-0 z-10 bg-black/20" aria-hidden="true" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="#" className="flex items-center gap-2 -m-1.5 p-1.5">
              <img
                alt="EZ-CodE logo"
                src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600"
                className="h-8 w-auto"
              />
              <span className="text-indigo-600 font-bold text-xl">EZ-CodE</span>
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-gray-700 hover:bg-gray-100 transition-colors duration-300">
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="h-6 w-6" />
            </button>
          </div>

          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <Disclosure as="div" className="-mx-3">
                  {({ open }) => (
                    <>
                      <Disclosure.Button className="flex border-none w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold text-gray-900 hover:bg-gray-50 transition-colors duration-300">
                        Features
                        <ChevronDownIcon
                          className={`h-5 w-5 flex-none transition-transform duration-300 ${
                            open ? "rotate-180 text-indigo-600" : ""
                          }`}
                          aria-hidden="true"
                        />
                      </Disclosure.Button>
                      <Disclosure.Panel className="mt-2 space-y-2">
                        {[...compilerFeatures, ...helpResources].map((item) => (
                          <Disclosure.Button
                            key={item.name}
                            as="a"
                            href={item.href}
                            className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold text-gray-900 hover:bg-gray-50 hover:text-indigo-600 transition-all duration-300">
                            {item.name}
                          </Disclosure.Button>
                        ))}
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>

                <a
                  href="/languages"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold text-gray-900 hover:bg-gray-50 hover:text-indigo-600 transition-all duration-300">
                  Languages
                </a>

                <a
                  href="/examples"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold text-gray-900 hover:bg-gray-50 hover:text-indigo-600 transition-all duration-300">
                  Examples
                </a>

                <a
                  href="/docs"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold text-gray-900 hover:bg-gray-50 hover:text-indigo-600 transition-all duration-300">
                  Docs
                </a>
              </div>

              <div className="py-6 space-y-3">
                <a
                  href="/login"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold text-indigo-600 hover:text-indigo-700 transition-colors duration-300 text-center border border-indigo-600">
                  Log in
                </a>
                <a
                  href="/register"
                  className="-mx-3 block rounded-lg bg-indigo-600 px-3 py-2.5 text-base font-semibold text-white hover:bg-indigo-500 transition-colors duration-300 text-center">
                  Sign up
                </a>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
}