import Link from 'next/link'
import React from 'react'


function ProjectCard({imgUrl, title, description, gitUrl, webUrl}) {
  return (
    <div className=''>
      <div className="h-40 md:h-56   rounded-t-xl relative group" style={{background: `url(${imgUrl})`, backgroundSize:"cover"}}>
        <div className="overlay flex items-center justify-center absolute top-0 w-full h-full left-0 bg-[#181818] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500">
       
       <Link href={gitUrl} className='h-14 mr-2 w-14 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link'>


       <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-10 text-[#ADB7BE]  absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2   cursor-pointer group-hover/link:text-white ">
  <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5" />
</svg>

       </Link>

       <Link href={webUrl} className='h-14 w-14 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link'>


       <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-10 text-[#ADB7BE]  absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2   cursor-pointer group-hover/link:text-white">
  <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
  <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
</svg>

       </Link>





        </div>
      </div>
      <div className="text-white rounded-b-xl mt-3 bg-[#181818] py-6 px-4 ">
        <Link href={webUrl}>
          <h5 className='text-xl font-semibold mb-2 '>{title}</h5>
          <p className="text-[#ADB7BE]">{description}</p>
        </Link>
       
      </div>
    </div>
    
  )
}

export default ProjectCard
