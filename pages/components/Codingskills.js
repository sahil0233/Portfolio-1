import React from 'react'
import Image from 'next/image'
const Codingskills = () => {
  return (
    <>

    <div className="flex gap-12 p-10 flex-wrap justify-center">

        
            <span className="inline-block flex flex-col items-center">
               <div className="bg-black rounded-full p-2 inline-flex align-middle justify-center items-center select-none text-white">
                    <Image 
                        src = "/reactjs.svg"
                        alt='hello'
                        width={50}
                        height={50}
                    />
               </div>
               <h2 className="mt-2 font-semibold text-base sm:text-lg text-black text-center">
                React.js
                </h2>
            </span>

            <span className="inline-block flex flex-col items-center">
               <div className="bg-black rounded-full p-2 inline-flex align-middle justify-center items-center select-none text-white">
                    <Image 
                        className='bg-white rounded-full'
                        src = "/nextjs.svg"
                        alt='next.js icon'
                        width={50}
                        height={50}
                    />
               </div>
               <h2 className="mt-2 font-semibold text-base sm:text-lg text-black text-center">
                Next.js
                </h2>
            </span>

            <span className="inline-block flex flex-col items-center">
               <div className="bg-white rounded-full p-2 inline-flex align-middle justify-center items-center select-none text-white">
                    <Image
                        src = "/express.svg"
                        alt='express.js icon'
                        width={50}
                        height={50}
                    />
               </div>
               <h2 className="mt-2 font-semibold text-base sm:text-lg text-black text-center">
                Express.js
                </h2>
            </span>

            <span className="inline-block flex flex-col items-center">
               <div className="bg-black rounded-full p-2 inline-flex align-middle justify-center items-center select-none text-white">
                    <Image 
                        src = "/nodejs.svg"
                        alt='node.js icon'
                        width={50}
                        height={50}
                    />
               </div>
               <h2 className="mt-2 font-semibold text-base sm:text-lg text-black text-center">
                Node.js
                </h2>
            </span>
            <span className="inline-block flex flex-col items-center">
               <div className="bg-white rounded-full p-2 inline-flex align-middle justify-center items-center select-none text-white">
                    <Image 
                        src = "/java.svg"
                        alt='java icon'
                        width={50}
                        height={50}
                    />
               </div>
               <h2 className="mt-2 font-semibold text-base sm:text-lg text-black text-center">
                Java
                </h2>
            </span>
            <span className="inline-block flex flex-col items-center ">
               <div className="bg-white rounded-full p-2 inline-flex align-middle justify-center items-center select-none text-white">
                    <Image 
                        src = "/tailwindcss.svg"
                        alt='hello'
                        width={50}
                        height={50}
                    />
               </div>
               <h2 className="mt-2 font-semibold text-base sm:text-lg text-black text-center">
                TailwindCSS
                </h2>
            </span>
            <span className="inline-block flex flex-col items-center ">
               <div className="bg-white rounded-full p-2 inline-flex align-middle justify-center items-center select-none text-white">
                    <Image 
                    className='rounded-full'
                        src = "/bootstrap.svg"
                        alt='hello'
                        width={50}
                        height={50}
                    />
               </div>
               <h2 className="mt-2 font-semibold text-base sm:text-lg text-black text-center">
                Bootstrap
                </h2>
            </span>
    </div>
    </>
  )
}

export default Codingskills
