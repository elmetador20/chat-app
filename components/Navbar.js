"use client"
import { UserButton } from '@clerk/nextjs'
import React, { useState, useEffect } from 'react';
import Link from 'next/link'
import { useUser } from '@clerk/nextjs';


const Navbar = () => {
  // const user=useUser()
  // console.log(user.user?.id)

  return (
   <nav className="bg-gradient-to-r from-blue-600 to-purple-700 p-4 shadow-lg font-inter rounded-lg m-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Brand/Logo Section */}
        <div className="text-white text-2xl font-bold rounded-md p-2">
          <Link href="/"> {/* Use Link for the brand/logo */}
            WeTalk
          </Link>
        </div>

        {/* Desktop Navigation Links */}
        <div className="flex items-end space-x-6"> {/* Removed hidden md:flex as there's no mobile menu */}
          <Link href="/" className="text-white hover:text-blue-200 transition duration-300 ease-in-out px-3 py-2 rounded-md">Home</Link>
          <Link href="/forums" className="text-white hover:text-blue-200 transition duration-300 ease-in-out px-3 py-2 rounded-md">Forums</Link>
          <Link href="/chat" className="text-white hover:text-blue-200 transition duration-300 ease-in-out px-3 py-2 rounded-md">UserChat</Link>
          <Link href="/contact" className="text-white hover:text-blue-200 transition duration-300 ease-in-out px-3 py-2 rounded-md">Contact</Link>
        </div>
        <div className="hidden md:flex items-center space-x-4">
        

        {/* Call to Action Button */}
       
         <span className='flex justify-center items-center'> <UserButton/></span>
        </div>
     </div>
    </nav>
  )
}

export default Navbar
