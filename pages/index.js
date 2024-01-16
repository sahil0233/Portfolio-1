import Image from 'next/image'
import { Inter } from 'next/font/google'
import Navbar from './components/Navbar'
import Qualifications from './components/Qualifications'
import Codingskills from './components/Codingskills'
import { useRef, useState } from 'react'
import Softskills from './components/Softskills'
import Landing from './components/Landing'
import Projects from './components/Projects'
import ContactMe from './components/ContactMe'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const home_div = useRef(null);
  const qualifications_div = useRef(null);
  const skills_div = useRef(null);
  const projects_div = useRef(null);
  const contact_div = useRef(null);

  const sectionRefs = {
    home_div : home_div,
    qualifications_div : qualifications_div,
    skills_div: skills_div,
    projects_div :projects_div ,
    contact_div:contact_div
  };
  
  const [ selectedSkill, setSelectedSkill ] = useState('1');

  const handleSkillChange = (event) => {
    setSelectedSkill(event.target.value);
  }

  return (
    <main className='max-h-full mx-auto bg-blue-100 flex flex-col items-center'>
      <Navbar sectionRefs = {sectionRefs} />
      <div className='max-w-screen-lg flex flex-col items-center gap-16'>
        <div ref={home_div} className='flex flex-col justify-center relative items-center max-w-screen-lg py-4 shadow-md'>
          <Landing />
        </div>
        <div ref={qualifications_div} className='px-2 md-px-8  text-black flex flex-col w-full items-center'>
          <Qualifications />
        </div>
        <div ref={skills_div} className='flex flex-col items-center'>
          <div className="w-80 flex justify-center gap-2 rounded-xl bg-blue-800 p-2">
            <div className='w-40'>
                <input onChange={handleSkillChange} type="radio" name="option" id="codingskills" value="1" className="peer hidden" checked={selectedSkill === '1'} />
                <label htmlFor="codingskills" className="block cursor-pointer select-none rounded-xl p-2 text-center peer-checked:bg-black peer-checked:font-bold peer-checked:text-white">Coding Skills</label>
            </div>

            <div className='w-40'>
                <input onChange={handleSkillChange} type="radio" name="option" id="softskills" value="2" className="peer hidden" checked = {selectedSkill === '2'} />
                <label htmlFor="softskills" className="block cursor-pointer select-none rounded-xl p-2 text-center peer-checked:bg-black peer-checked:font-bold peer-checked:text-white">Soft Skills</label>
            </div>
          
          </div>
          {selectedSkill === '1'? <Codingskills /> : <Softskills />}
        </div>
        <div ref={projects_div} className='w-11/12 flex flex-col gap-8 items-center'>
          <Projects />
        </div>
        <div ref={contact_div} className=' w-11/12'>
          <ContactMe />
        </div>
        
      </div>
    </main>
  )
}
