import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import Logo from './dojo-logo.png';
import LogoutButton from './LogoutButton';

export default function Navbar({ user }) {
  return (
    <nav className="flex flex-col md:flex-row justify-between items-center md:gap-5 pb-4 border-b-2 border-gray-200 my-10 mx-auto max-w-5xl">
      {/* Left side: Logo, Dashboard, Tickets */}
      <div className="flex flex-col md:flex-row items-center gap-4 w-full md:w-auto">
        <Link href="./"><Image
          src={Logo}
          alt="Dojo HelpDesk"
          width={70}
          height={70}
          placeholder="blur"
        />
        </Link>
          <h1 className="text-lg font-bold text-primary">Dojo HelpDesk</h1>

        {/* Links */}
        <div className="flex flex-col md:flex-row gap-4 w-full md:w-auto">
          <Link href="/" className="text-gray-200 hover:text-black">DashBoard</Link>
          <Link href="/tickets" className="text-gray-200 hover:text-black">Tickets</Link>
        </div>
      </div>

      {/* Right side: User Info and Logout Button */}
      <div className="flex flex-col md:flex-row items-start md:items-center gap-4 mt-4 md:mt-0 w-full md:w-auto">
        {user && <span className="text-gray-200">Hello {user.email.split('@')[0]}</span>}
        <LogoutButton />
      </div>
    </nav>
  );
}
