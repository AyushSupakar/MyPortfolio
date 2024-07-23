import React from 'react'
import NavLink from './NavLink'

export default function MenuOverLay({links}) {
  return (
    <ul className='flex flex-col py-4 items-center'>
        {
            links.map((link,index)=>(
                <li key={index}>
                    <NavLink href={link.path} title={link.title} />
                </li>
            ))
        }
       
    </ul>
  )
}
