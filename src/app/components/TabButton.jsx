import React from 'react'

export default function TabButton({active, selectTab, children}) {
    const buttonClasses = (active) ? 'text-white border-b border-purple-500' : 'text-[#ADB7BE]'
  return (
    <button onClick={selectTab}>
        <p className={`mr-3 font-semibold ${buttonClasses}`}>
        {children}
        </p>
        
      
    </button>
  )
}
