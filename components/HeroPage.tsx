// src/components/Hero.js

import Image from 'next/image';
import React from 'react';
import { PiStudentThin } from 'react-icons/pi';
import { BsFillForwardFill } from 'react-icons/bs';

import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"


const Hero = () => {
  return (
    <div className="bg-purple-50 h-screen">

      <div className="container mx-auto p-4 flex justify-between items-center">

        <div className="w-1/2 mt-16">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Welcome to A to Z group of School
          </h1>
          <p className="text-lg text-gray-600 mb-6 ml-100 font-medium text-14">
            Providing quality education for a brighter future for all our students is our top priority
          </p>
          <button className="flex row px-3 py-2 space-x-1 bg-gradient-to-r from-violet-600 to-fuchsia-400 text-white rounded-sm font-semibold hover:bg-gradient-to-r  hover:from-fuchsia-400 hover:to-violet-600 transition duration-300">
            <p>Get Started</p>
            <BsFillForwardFill className="mt-1 text-white font-bold" /> 
          </button>
        </div>
        <div className="w-1/2 mt-16 ml-16 relative justify-center items-center">
          <div className=' bg-white h-8 shadow-md hover:shadow-lg w-36 flex justify-start items-center space-x-2 px-2 absolute mr-[20%] mt-4 rounded-tl-xl rounded-br-xl hover:w-44 hover:h-10'>
              <PiStudentThin className="bg-purple-700 text-[16px] p-1 text-white rounded-sm font-extrabold hover:text-[22px]" />
            <div className=' col block justify-center items-center space-x-[-2px] '>
              <p className='text-[8px] p-0.5 mt-1.5 text-purple-700 font-extrabold rounded-sm hover:text-[12px]'>45</p>
            <p className='text-[8px] font-bold mb-2.5 overflow-hidden hover:text-[10px]'>Number of Students</p>
            </div>
          </div>
          <Image
            src="/assets/landing.jpg"
            width={350}
            height={350}
            alt="School Image"
            className="rounded-tr-xl rounded-bl-xl ml-[15%] shadow-md"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
