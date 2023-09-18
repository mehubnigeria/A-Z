"use client"
import Link from "next/link";
import { useState } from "react";

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  
  return (
      <nav className="shadow-lg bg-purple-50 bordb">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center">
        <Link href="https://www.sqeholdings.com">
            <img src="https://as2.ftcdn.net/v2/jpg/03/17/27/59/1000_F_317275919_0Lmoy6CZqKyfErASnFJ2tatCtg18GVF6.jpg" alt="sqe-logo" className="h-14 object-contain items-center"/>
          </Link>
        </div>

        <div className="hidden md:flex space-x-6">
          <Link href="#" className="text-black text-[13px] font-semibold  hover:bg-gradient-to-r  hover:from-fuchsia-400 hover:to-violet-600 transition duration-300 hover:px-3 hover:py-2 hover:rounded-lg hover:text-white ">Home</Link>
          <Link href="#" className="text-black text-[13px] font-semibold  hover:bg-gradient-to-r  hover:from-fuchsia-400 hover:to-violet-600 transition duration-300 hover:px-3 hover:py-2 hover:rounded-lg hover:text-white ">About</Link>
          <Link href="#" className="text-black text-[13px] font-semibold  hover:bg-gradient-to-r  hover:from-fuchsia-400 hover:to-violet-600 transition duration-300 hover:px-3 hover:py-2 hover:rounded-lg hover:text-white ">Contact</Link>
          <Link href="#" className="text-black text-[13px] font-semibold  hover:bg-gradient-to-r  hover:from-fuchsia-400 hover:to-violet-600 transition duration-300 hover:px-3 hover:py-2 hover:rounded-lg hover:text-white ">ATM</Link>
        </div>

        <div className="hidden md:flex space-x-4">
          <Link href="#" className="text-black text-[13px] font-semibold  hover:bg-gradient-to-r  hover:from-fuchsia-400 hover:to-violet-600 transition duration-300 hover:px-3 hover:py-2 hover:rounded-lg hover:text-white ">Log In</Link>
          <Link href="#" className="text-black text-[13px] font-semibold  hover:bg-gradient-to-r  hover:from-fuchsia-400 hover:to-violet-600 transition duration-300 hover:px-3 hover:py-2 hover:rounded-lg hover:text-white ">Sign Up</Link>
        </div>

        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-black">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              )}
            </svg>
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white py-2">
          <div className="container mx-auto flex flex-col items-center space-y-4">
            <Link href="#" className="text-black text-[13px] font-semibold">Home</Link>
            <Link href="#" className="text-black text-[13px] font-semibold">About</Link>
            <Link href="#" className="text-black text-[13px] font-semibold">Contact</Link>
            <Link href="#" className="text-black text-[13px] font-semibold">ATM</Link>
            <Link href="#" className="text-black text-[13px] font-semibold">Log In</Link>
            <Link href="#" className="text-black text-[13px] font-semibold">Sign Up</Link>
          </div>
        </div>
      )}
    </nav>


  

  )
}

export default NavBar
