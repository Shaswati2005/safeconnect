import React from 'react'
import Button from './Button'
import Link from 'next/link'
import { NAV_LINKS } from '@/constants'

const Navbar = () => {
  return (
   <nav className='border-2 border-red-400 lg:border-rounded-2xl flexBetween max-container padding-container z-20  relative py-3'>
    <Link href="/">
    <h3 className='capitalise font-bold-18 text-skin-20 '>safe connect</h3>
    </Link>

    <ul className="hidden h-full gap-15 lg:flex gap-20">

          {NAV_LINKS.map((link)=>(
            <Link href={link.href} key={link.key} className="regular-16 text-skin-20 flex-center cursor-pointer pb-1 transition-all hover:font-bold">
              {link.label}
            </Link>
            
          ))}
          </ul>

   </nav>
  )
}

export default Navbar