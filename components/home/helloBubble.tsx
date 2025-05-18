import React from 'react'

const HelloBubble = () => {
  return (
    <div className="relative">
      <div className="absolute rounded-full top-1/2 left-1/2 w-28 h-28" />
      <div className="relative z-10 text-sm whitespace-pre md:text-base text-contents-000">
        {`   
       ⎛                ⎞
   o (     `}
        <h1 className="inline text-2xl leading-none md:text-3xl">Hello</h1>
        {`     )    
.°     ⎝                ⎠
  
  `}
      </div>
    </div>
  )
}

export default HelloBubble
