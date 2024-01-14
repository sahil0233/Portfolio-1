import React from 'react';
import {useState} from 'react';
import styles from '../../styles/MyCV.module.css';

const Landing = () => {
  const [showCVModal, setShowCVModal] = useState(false);

  const openCVModal = () => {
    setShowCVModal(true);
  };

  const closeCVModal = () => {
    setShowCVModal(false);
  };
  const handleDownload = () => {
    // Replace 'my_cv.pdf' with your actual CV file name
    const downloadUrl = '/Sahil_Gangwani_cv.pdf';
    const link = document.createElement('a');
    link.href = downloadUrl;
    link.download = 'Sahil_Gangwani_cv.pdf'; // Change this to your CV file name
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <>
    <div className='relative w-full h-80'>
      <object
        className='absolute left-1/2 transform -translate-x-1/2 w-1/2'
          data="/bwsahil.svg"
          type='image/svg+xml' width={300} height={300}>
        </object>
        <h1 className='absolute top-24 left-2/3 text-black text-md sm:text-lg'>Hi I am,</h1>
        <h1 className=' absolute top-32 left-2/3   text-black text-lg sm:text-2xl'> Sahil Gangwani</h1>
        </div>
        <p className='p-8 md:px-20 text-black text-justify'>
          I am a passionate full-stack developer who loves working with MERN stack and Java. I enjoy tackling problems and have built a range of projects for hackathons. One of my proudest moments was winning the top spot in a national hackathon at my college, earning a prize of 2 lakh rupees. It was a real confidence boost and showed me the power of creative problem-solving.

          Besides coding, I'm a big sports fan. You'll often find me on the field playing or at the gym, keeping up with my fitness routine. I believe in the balance between staying mentally sharp through coding and staying physically fit.

          I'm always eager to take on new challenges and improve my skills. Whether it's in tech or exploring new sports, I'm driven by the desire to learn and grow. Bringing creativity to coding and staying active in sports both fuel my passion for a well-rounded and fulfilling life.
        </p>
        
        

        {showCVModal && (
        <div className={styles.modalBackdrop}>
          <div className={styles.modalContent}>
            <button className={styles.closeButton} onClick={closeCVModal}>X</button>
            <img src="/Sahil_Gangwani_cv.webp"></img>
          </div>
        </div>
      )}
        <div className='flex gap-4'>
          <button className='bg-blue-800 p-2 rounded-lg' onClick={openCVModal}>View CV</button>
          <button  onClick={handleDownload} className='border bg-blue-800 p-2 rounded-lg'>Download CV</button>
        </div>
    </>
  )
}

export default Landing
