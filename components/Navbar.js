import { UserButton } from '@clerk/nextjs'
import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
   <nav className="bg-gradient-to-r from-blue-600 to-purple-700 p-4 shadow-lg font-inter rounded-lg m-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Brand/Logo Section */}
        <div className="text-white text-2xl font-bold rounded-md p-2">
          <Link href="/"> {/* Use Link for the brand/logo */}
            MyBrand
          </Link>
        </div>

        {/* Desktop Navigation Links */}
        <div className="flex space-x-6"> {/* Removed hidden md:flex as there's no mobile menu */}
          <Link href="/" className="text-white hover:text-blue-200 transition duration-300 ease-in-out px-3 py-2 rounded-md">Home</Link>
          <Link href="/features" className="text-white hover:text-blue-200 transition duration-300 ease-in-out px-3 py-2 rounded-md">Features</Link>
          <Link href="/pricing" className="text-white hover:text-blue-200 transition duration-300 ease-in-out px-3 py-2 rounded-md">Pricing</Link>
          <Link href="/contact" className="text-white hover:text-blue-200 transition duration-300 ease-in-out px-3 py-2 rounded-md">Contact</Link>
        </div>

        {/* Call to Action Button */}
        <div> {/* Removed hidden md:block */}
          <button className="bg-white text-blue-700 px-5 py-2 rounded-full font-semibold hover:bg-blue-100 transition duration-300 ease-in-out shadow-md">
            Get Started
          </button>
         <span className='p-4 m-4'> <UserButton/></span>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
