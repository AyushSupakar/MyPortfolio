"use client"
import Link from 'next/link'
import React, { useState } from 'react'
import NavLink from "./NavLink" 
import MenuOverLay from './MenuOverLay'
const navLinks=[
    {
        title:"About",
        path:"#about",
    },
    {
        title:"Projects",
        path:"#projects",
    },
    {
        title:"Contacts",
        path:"#contacts",
    }
]

function Navbar() {
    const [hbopen, sethbopen] = useState(false);
  return (
    <nav className='fixed w-full left-0 right-0 top-0 z-10 bg-[#121212] bg-opacity-80x backdrop-blurx px-4 py-4 '>
        <div className="flex flex-wrap items-center justify-between mx-auto px-4 py-2">
            <Link href={"/"} className='text-3xl md:text-4xl text-white font-semibold'>Ayush Anshuman Supakar</Link>

            <div className="block mobile-menu md:hidden">
                {
                    (hbopen)?(<button onClick={()=>sethbopen(false)} className="flex items-center px-3 py-2 border rounded-lg border-slate-200 text-slate-200 hover:text-white hover:border-white">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-8">
  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
</svg>

                    </button>):(<button
                    onClick={()=>sethbopen(true)}  className="flex items-center px-3 py-2 border rounded-lg border-slate-200 text-slate-200 hover:text-white hover:border-white" >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-8">
  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
</svg>
                    </button>)
                }
            </div>


            <div className="menu hidden md:block md:w-auto" id="navbar">
                
                <ul className=" flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0">
                    {navLinks.map((link, index)=>{
                    return(<li key={index}>
                        <NavLink href={link.path} title={link.title} />
                    </li>)
                })}
                    
                </ul>

            </div>
        </div>

        {(hbopen)?(<MenuOverLay links={navLinks}/>):null}
      
    </nav>
  )
}

export default Navbar
