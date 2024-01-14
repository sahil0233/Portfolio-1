import React, { useRef } from 'react'
import Image from 'next/image'
const Navbar = ({sectionRefs}) => {

  const openNavbar = () =>{
    const menu = document.querySelector("#menu");
    menu.classList.toggle('hidden');
  }
  

  const scrollToDiv = (ref) => {
    if (ref && ref.current) {
      const yOffset = -90; // Adjust the offset based on your layout or styling
      const y = ref.current.getBoundingClientRect().top + window.pageYOffset + yOffset;

      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
     <nav
        className="
          sticky
          top-0
          shadow-lg
          z-20
          flex flex-wrap
          items-center
          justify-around
          w-full
          py-4
          md:py-2
          px-4
          text-lg text-gray-700
          bg-blue-800
        "
      >
       <div>
          <a href="#" className='flex gap-4 justify-center items-center'>
            <Image className=' h-12 w-12 rounded-full transfrom border border-black object-contain '
             src="/sahilphoto.jpeg"
             alt='sahil-photo'
             width={50}
             height={50}
             />
             <h1 className='text-white'>Sahil Gangwani</h1>

          </a>
        </div>
       
         <svg
            xmlns="http://www.w3.org/2000/svg"
            id="menu-button"
            className="h-6 w-6 cursor-pointer md:hidden block"
            fill="none"
            viewBox="0 0 24 24"
            stroke="white"
            onClick={openNavbar}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
       
       <div className="hidden w-full md:flex md:items-center md:w-auto" id="menu">
          <ul
            className="
              gap-4
              pt-4
              text-base text-white
              flex
              flex-col
              md:flex-row
              md:justify-between 
              md:pt-0"
          >
            <li>
           <button onClick={() => scrollToDiv(sectionRefs.home_div)}>Home</button>
         </li>
         <li>
           <button onClick={() => scrollToDiv(sectionRefs.qualifications_div)}>Qualifactions</button>
         </li>
         <li>
         <button onClick={() => scrollToDiv(sectionRefs.skills_div)}>Skills</button>
         </li>
         <li>
         <button onClick={() => scrollToDiv(sectionRefs.projects_div)}>Projects</button>
         </li>
         <li>
         <button onClick={() => scrollToDiv(sectionRefs.contact_div)}>Contact</button>
         </li>
          </ul>
        </div>
    </nav>
    
  )
}

export default Navbar
