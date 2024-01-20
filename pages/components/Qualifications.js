import React from 'react'
import Image from 'next/image'
const Qualifications = () => {
  return (
    <>
        <h2 className=' self-center text-4xl text-black'>Qualifications</h2>
        <div className=' mt-8 w-full sm:w-1/2 relative flex flex-col gap-4 text-black'>
           
            
            <div className=' border-l-2 pl-2 border-blue-800 self-start'>
                <h1 className='font-bold text-base md:text-xl'>Jecrc University</h1>
                <h2 className='font-semibold text-base'>Jaipur,India</h2>
                <h2 className='text-base '>B.Tech Computer Science</h2>
                <h3 className='text-base'>GPA : 8.2/10</h3>
            </div>
            <div className=' border-l-2 pl-2 border-blue-800 self-end'>
                <h1 className='font-bold text-base md:text-xl'>Neerja Modi School</h1>
                <h2 className='font-semibold text-base '>Jaipur,India</h2>
                <h2 className='text-base'>12th CBSE</h2>
                <h3 className='text-base'>Percentage: 89.2%</h3>
            </div>
            <div className='border-l-2 pl-2 border-blue-800 self-start'>
                <h1 className='font-bold text-base md:text-xl'>Neerja Modi School</h1>
                <h2 className='font-semibold text-base'>Jaipur,India</h2>
                <h2 className='text-base'>10th CBSE</h2>
                <h3 className='text-base'>GPA : 10/10</h3>
            </div>
        </div>

    </>
  )
}

export default Qualifications