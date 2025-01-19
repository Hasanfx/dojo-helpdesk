import Link from 'next/link'
import React from 'react'
import Image from  'next/image'
import Logo from './dojo-logo.png'
import LogoutButton from './LogoutButton'

export default function Navbar({user}) {
  return (
    <nav>
      <Image
      src={Logo}
      alt='Dojo HelpDesk'
      width={70}
      height={70}
      placeholder='blur'
>
      </Image>
    <h1>dojo HelpDesk</h1>
    <Link href="/">DashBoard</Link>
    <Link href="/tickets">Tickets</Link>
    <Link href="./signup" className='mr-auto'>Sign up</Link>

    {user && <span> Hello {user.email}</span>}
    <LogoutButton />
    </nav>  )
}
