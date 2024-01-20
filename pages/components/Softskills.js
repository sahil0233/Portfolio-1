import React from 'react'
import Image from 'next/image'
const Softskills = () => {
    return (
        <>
    
        <div className="flex gap-12 p-10 flex-wrap justify-center">
    
            
                <span className="inline-block flex flex-col items-center">
                   <div className="bg-white rounded-full p-2 inline-flex align-middle justify-center items-center select-none text-white">
                        <Image 
                            src = "/communication.svg"
                            alt='hello'
                            width={50}
                            height={50}
                        />
                   </div>
                   <h2 className="mt-2 font-semibold text-base sm:text-lg text-black text-center">
                    Comunication
                    </h2>
                </span>
    
                <span className="inline-block flex flex-col items-center">
                   <div className="bg-white rounded-full p-2 inline-flex align-middle justify-center items-center select-none text-white">
                        <Image 
                            className='p-2'
                            src = "/collaboration.svg"
                            alt='next.js icon'
                            width={50}
                            height={50}
                        />
                   </div>
                   <h2 className="mt-2 font-semibold text-base sm:text-lg text-black text-center">
                    Collaboration
                    </h2>
                </span>
    
                <span className="inline-block flex flex-col items-center">
                   <div className="bg-white rounded-full p-2 inline-flex align-middle justify-center items-center select-none text-white">
                        <Image 
                            src = "/problemsolving.svg"
                            alt='node.js icon'
                            width={50}
                            height={50}
                        />
                   </div>
                   <h2 className="mt-2 font-semibold text-base sm:text-lg text-black text-center">
                   Problem-solving
                    </h2>
                </span>
                <span className="inline-block flex flex-col items-center">
                   <div className="bg-white rounded-full p-2 inline-flex align-middle justify-center items-center select-none text-white">
                        <Image 
                            src = "/tenacious.svg"
                            alt='java icon'
                            width={50}
                            height={50}
                        />
                   </div>
                   <h2 className="mt-2 font-semibold text-base sm:text-lg text-black text-center">
                   Teancious
                    </h2>
                </span>
                <span className="inline-block flex flex-col items-center ">
                   <div className="bg-white rounded-full p-2 inline-flex align-middle justify-center items-center select-none text-white">
                        <Image
                            className='p-2' 
                            src = "/outcome.svg"
                            alt='hello'
                            width={50}
                            height={50}
                        />
                   </div>
                   <h2 className="mt-2 font-semibold text-base sm:text-lg text-black text-center">
                   Outcome-Oriented
                    </h2>
                </span>
                <span className="inline-block flex flex-col items-center ">
                   <div className="bg-white rounded-full p-2 inline-flex align-middle justify-center items-center select-none text-white">
                        <Image 
                        className='rounded-full'
                            src = "/flexible.svg"
                            alt='hello'
                            width={50}
                            height={50}
                        />
                   </div>
                   <h2 className="mt-2 font-semibold text-base sm:text-lg text-black text-center">
                    Flexibile
                    </h2>
                </span>
        </div>
        </>
      )
}

export default Softskills
