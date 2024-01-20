import React from 'react'

const Projects = () => {
  
  return (
    <>
        <h1 className='sm:self-start text-black font-bold text-xl sm:text-3xl'><span >Projects I've Built</span><span className='ml-2 inline-block w-0 sm:w-56 md:w-96 border-t border-black'></span></h1>
        <div id='project-1' className='relative w-full sm:h-[500px]'>
            <div className='z-10 py-4 top-10 left-0 sm:absolute sm:w-7/12'>
                <h2 className='text-sm text-blue-700 text-left'>Featured Project<br></br><span className=' text-black font-semibold text-md'>Inventory & Invoicing WebApp</span></h2>
                
                <p className='mt-2 bg-black p-4 text-xs md:text-sm rounded-lg shadow-2xl text-white'>
                  <span className='font-medium text-xs md:text-sm'><span className='underline'>Problem Identification</span> : </span><br></br> During a visit to my brother's jewelry store, I noticed sales staff manually calculating prices due to daily gold rate fluctuations. 
                  The absence of a proper invoicing system was evident. To address this, I proposed an automated system that updates prices according to the daily gold rate, alongside implementing a professional invoicing system.
                  <br></br><span className='font-medium text-xs md:text-sm'><span className='underline'>Solution</span> : </span><br></br> Leveraging Next.js, I developed the frontend interface for the project and implemented endpoints to efficiently retrieve data from MongoDB. Utilizing MongoDB Atlas, I securely stored the information pertaining to jewelry items. Ultimately, I deployed the website on Vercel, ensuring its accessibility and performance.
                  <br></br><span className='font-medium text-xs md:text-sm'><span className='text-yellow-200'>Note : </span> This is not a generic solution but specifc to that jewelry store.</span>
                </p>
                <ul className=' pr-4 flex gap-4 pt-2 text-black text-xs'>
                    <li>Next.js</li>
                    <li>TailwindCSS</li>
                    <li>Mongodb</li>
                    <li>Github</li>
                    <li>Vercel</li>
                </ul>
                
            </div>
            <div className=' z-0 top-5 right-0 sm:absolute h-64 sm:w-7/12 '>
              <div className='w-full h-full rounded-lg overflow-hidden shadow-2xl'>
                <a href="https://samskarabilling.vercel.app/" target="_blank" rel="noopener noreferrer"><img className='object-cover object-center w-full h-full'  src='/inventory.png'></img></a>
              </div>
              
              <div className='flex pt-2 gap-2 justify-end'>
                <a href="https://samskarabilling.vercel.app/" target="_blank" rel="noopener noreferrer">
                    <img className='w-6 h-6' src="link.svg"></img>
                  </a>
                <a href="https://github.com/sahil0233/Samskarabillingwebsite" target="_blank" rel="noopener noreferrer">
                    <img className='w-6 h-6' src="github.svg"></img>
                  </a>
              </div>
            </div>
            
            
        </div>
        <div id='project-2' className='relative w-full sm:h-[500px]'>
            <div className=' py-4 z-10 top-10 right-0 sm:absolute sm:w-7/12'>
                <h2 className='text-sm text-blue-700 sm:text-right'>Featured Project<br></br><span className=' text-black font-semibold text-md'>CrowdFunding Decentralized App</span></h2>
                
                <p className='mt-2 bg-black p-4 text-xs md:text-sm rounded-lg shadow-2xl text-white'>
                  <span className='font-medium text-xs md:text-sm'><span className='underline'>Problem Identification</span> : </span><br></br> 
                  With Blockchain's growing popularity, I've noticed the potential to raise funds using cryptocurrency. Traditional methods involve high transaction fees. To address this, I plan to create a crypto-based fundraising platform.
                  <br></br><span className='font-medium text-xs md:text-sm'><span className='underline'>Solution</span> : </span><br></br> I developed a responsive website using React and implemented smart contracts in Solidity for backend functionality. I connected the smart contract database to the frontend using the Thirdweb library. Then deployed the project on google cloud.  This setup enables users to create campaigns and donate Ethereum to other campaigns seamlessly.
                  <br></br><span className='font-medium text-xs md:text-sm'><span className='text-yellow-200'>Note : </span>Our team received recognition for this project at the GFG Hackathon.</span>
                </p>
                <ul className=' pr-4 flex gap-4 pt-2 text-black text-xs justify-end'>
                    <li>React.js</li>
                    <li>TailwindCSS</li>
                    <li>Solidity</li>
                    <li>GoogleCloud</li>
                    <li>thirdweb</li>
                </ul>
                
            </div>
            <div className=' z-0 top-5 left-0 sm:absolute h-64 sm:w-7/12 '>
              <div className='w-full h-full rounded-lg overflow-hidden shadow-2xl'>
                <a href="https://coinraise-ten.vercel.app/" target="_blank" rel="noopener noreferrer"><img className='object-cover object-center w-full h-full'  src='/project2-img.png'></img></a>
              </div>
              
              <div className='flex pt-2 gap-2'>
              <a href="https://coinraise-ten.vercel.app/" target="_blank" rel="noopener noreferrer">
                  <img className='w-6 h-6' src="link.svg"></img>
                </a>
              <a href="https://github.com/sahil0233/Coinraise" target="_blank" rel="noopener noreferrer">
                  <img className='w-6 h-6' src="github.svg"></img>
                </a>
              </div>
            </div>
            
            
        </div>
    </>
  )
}

export default Projects
