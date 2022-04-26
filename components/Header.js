import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function Header() {
  return (
    <div>
        <div>
            <nav>
                <Link href="/">Accueil</Link>
                <Link href="/contact">Contact</Link>
            </nav>
        </div>
        <div><h1>Untel</h1></div>
        <div>
            <Image src={require("../public/icons/facebook-white.webp")}/>
        </div>
    </div>
  )
}
