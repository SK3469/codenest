import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div>
        <nav className='h-16 flex justify-between'>
            <Link href={'/'}><h1 className='font-bold text-3xl'>CodeNest</h1></Link>
            <div className='flex items-center gap-2 text-lg'>
                <Link href={'/'}><h1>Snippets</h1></Link>
                <Link href={'/aboutus'}><h1>AboutUs</h1></Link>
                <Link href={'/docs'}><h1>Docs</h1></Link>
            </div>
        </nav>
    </div>
  )
}

export default Navbar