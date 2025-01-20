import Link from 'next/link'
import React, { useState } from 'react'
import Image from  'next/image'
import Logo from './dojo-logo.png'
import LogoutButton from './LogoutButton'

export default function Navbar({ user }) {
  const [drawerOpen, setDrawerOpen] = useState(false)

  const toggleDrawer = () => setDrawerOpen(!drawerOpen)

  return (
    <nav className="relative">
      {/* Navbar top section */}
      <div className="flex items-center justify-between pb-4 border-b-2 border-gray-200 max-w-5xl mx-auto my-10">
        <div className="flex items-center gap-5">
          <Image
            src={Logo}
            alt="Dojo HelpDesk"
            width={70}
            height={70}
            placeholder="blur"
          />
          <h1 className="text-xl font-bold text-primary">Dojo's HelpDesk</h1>
        </div>

        {/* Desktop links */}
        <div className="hidden md:flex gap-5">
          <Link href="/">DashBoard</Link>
          <Link href="/tickets">Tickets</Link>
          {user && <span> Hello {user.email}</span>}
          <LogoutButton />
        </div>

        {/* Mobile hamburger menu */}
        <button
          className="md:hidden text-gray-500"
          onClick={toggleDrawer}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>
      </div>

      {/* Mobile Drawer */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 z-50 ${drawerOpen ? 'block' : 'hidden'}`}
        onClick={toggleDrawer}
      >
        <div
          className={`bg-white p-5 w-3/4 h-full overflow-y-auto transform transition-transform duration-300 ${drawerOpen ? 'translate-x-0' : 'translate-x-full'}`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex flex-col gap-4">
            <Link href="/">DashBoard</Link>
            <Link href="/tickets">Tickets</Link>
            {user && <span> Hello {user.email}</span>}
            <LogoutButton />
          </div>
        </div>
      </div>
    </nav>
  )
}
