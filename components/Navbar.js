"use client"
import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const Navbar = () => {
  const pathname = usePathname()

  const showNavbar = ["/","/generate"].includes(pathname)
  return (
    <>
    {showNavbar &&
    <nav className='bg-white  w-[80vw] mx-auto py-4 px-6 fixed right-[10vw] rounded-full top-6 flex justify-between'>
        <div className="logo flex gap-8 items-center">
        <Link href={"/"}><svg className='h-7' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" ><path d="m13.511 5.853 4.005-4.117 2.325 2.381-4.201 4.005h5.909v3.305h-5.937l4.229 4.108-2.325 2.334-5.741-5.769-5.741 5.769-2.325-2.325 4.229-4.108H2V8.122h5.909L3.708 4.117l2.325-2.381 4.005 4.117V0h3.473v5.853zM10.038 16.16h3.473v7.842h-3.473V16.16z"></path></svg></Link>

        <ul className='flex gap-3'>
            <Link href={"/"}><li className='px-3 py-2 rounded-md hover:bg-gray-100 cursor-pointer'>Templates</li></Link>
            <Link href={"/generate"}><li className='px-3 py-2 rounded-md hover:bg-gray-100 cursor-pointer'>Marketplace</li></Link>
            <Link href={"/"}><li className='px-3 py-2 rounded-md hover:bg-gray-100 cursor-pointer'>Disover</li></Link>
            <Link href={"/"}><li className='px-3 py-2 rounded-md hover:bg-gray-100 cursor-pointer'>Pricing</li></Link>
            <Link href={"/handles"}><li className='px-3 py-2 rounded-md hover:bg-gray-100 cursor-pointer'>Learn</li></Link>
        </ul>
        </div>
        <div className='flex gap-3'>
            <button className="login bg-gray-200 px-4 py-3 font-semibold hover:bg-gray-300 rounded-lg">Log in</button>
            <button className="signup font-semibold bg-gray-800 hover:bg-gray-700 text-white px-4 py-3 rounded-full">Sign up free</button>
        </div>

    </nav>
     }
    </>
  )
}

export default Navbar
