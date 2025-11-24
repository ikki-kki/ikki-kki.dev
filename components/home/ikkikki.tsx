import React from 'react'

const Ikkikki = () => {
  return (
    <div className="relative rounded-full">
      <div className="absolute top-1/2 left-1/2 w-28 h-28 rounded-full opacity-100 z-0 blur-xl -translate-x-1/2 -translate-y-[40%] bg-primary-100" />
      <pre className="relative z-10 text-sm md:text-base text-dark">
        {`         
   (        )
 (   •   •    )
(           )
  (       )
`}
      </pre>
    </div>
  )
}

export default Ikkikki
