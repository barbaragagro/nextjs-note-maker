import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import logo from './logo.png'

function Navbar() {
    return (
        <nav>
            <Image
                src={logo}
                alt='logo-helpdesk'
                width={70}
                quality={100}
            />
            <h1>Notes Maker</h1>
            <Link href="/">Home</Link>
            <Link href="/tickets">Notes</Link>
        </nav>
    )
}

export default Navbar