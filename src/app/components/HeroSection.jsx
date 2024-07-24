"use client"
import React from 'react'
import Image from 'next/image'
import { TypeAnimation } from 'react-type-animation';
import Link from 'next/link';




function HeroSection() {
  return (
    <section className='px-6'>
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <div className="col-span-7 md:col-span-5 lg:col-span-7 place-self-center text-center sm:text-left text-justify">
        <h1 className="font-bold text-white mb-4 text-3xl sm:text-3xl lg:text-5xl font-extrabold bg-[#121212]">
            <span className="text-transparent bg-clip-textx bg-gradient-to-r from-purple-400 to-pink-400">Hello, I am {"\n"}</span>
            <br />
            <TypeAnimation
      sequence={[
        'Ayush Anshuman Supakar',
        1000,
        'a Front End Developer',
        1000,
        'a Back End Developer',
        1000,
        'a Full Stack Developer',
        1000,
        'a Game Developer',
        1000,
        'a 3D  Artist',
        1000,
        'a Java Developer',
        1000,
      ]}
      wrapper="span"
      speed={50}
      
      repeat={Infinity}
    /></h1>

        <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl mr-4 ">A Website to Build or a Bug to Fix, a Game to Make or a 3D item to Bake, I got you covered.</p>

        
        <div className="">

            <Link href="https://www.linkedin.com/in/ayush-anshuman-supakar-4b71681b8/"  className=" w-full px-6 py-3 sm:w-fit  rounded-full mr-4 bg-gradient-to-br from-blue-400 via-purple-500 to-pink-400 hover:bg-slate-200 text-white ">Hire Me</Link>
            
            <button  className="  px-1 py-1 rounded-full mr-4 bg-gradient-to-br from-blue-400 via-purple-500 to-pink-400  hover:bg-slate-800 text-white mt-3" download>
                <span className="block bg-[#121212] hover:bg-white hover:text-black hover:font-bold rounded-full px-5 py-2"><a href="/resume/CV.pdf">Resume</a></span>
            </button>

        </div>


        </div>
        <div className="col-span-5 md:col-span-5 md:px-4 lg:col-span-5 place-self-center mt-4 lg:mt-0 px-2">
            <div className=" mx-4 p-1 w-[340px] h-[340px]  lg:w-[350px] lg:h-[350px] md:w-[300px] sm:w-[200px] sm:h-[200px] rounded-full bg-[#181818] relative"><Image className='rounded-full absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 sm:w-full 
            ' src= "/images/coder.jpg" alt="img" width={280} height={280}/></div>
            
        </div>
        
        
      
</div>
    </section>
  )
}

export default HeroSection
