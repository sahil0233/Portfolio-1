import React from 'react'

const ContactMe = () => {
  return (
  <section className="mb-32">
    <div
      className="relative h-[150px] sm:h-[300px] overflow-hidden bg-cover bg-[50%] bg-no-repeat bg-[url('https://mdbcdn.b-cdn.net/img/new/textures/full/171.jpg')]">
    </div>
    <div className="container px-6 md:px-12">
      <div
        className="block rounded-lg bg-[hsla(0,0%,100%,0.7)] px-6 py-12 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-[hsla(0,0%,5%,0.7)] dark:shadow-black/20 md:py-16 md:px-12 -mt-[100px] backdrop-blur-[30px]">
        <div className="mb-12 grid gap-x-6 md:grid-cols-1 lg:grid-cols-3">
          <div className="mx-auto mb-12 text-center lg:mb-0">
            <a href='mailto:sahil.gangwani2024@gmail.com'><img className="mx-auto mb-6 h-8 w-8 text-primary dark:text-primary-400" src ="/mail.svg" /></a>
            <h6 className="font-medium"> <a href="mailto:sahil.gangwani2024@gmail.com">sahil.gangwani2024@gmail.com</a></h6>
          </div>
          <div className="mx-auto mb-12 text-center lg:mb-0">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2"
              stroke="currentColor" className="mx-auto mb-6 h-8 w-8 text-primary dark:text-primary-400">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
              <path strokeLinecap="round" strokeLinejoin="round"
                d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
            </svg>
            <h6 className="font-medium">Jaipur, Rajasthan, India</h6>
          </div>
          <div className="mx-auto mb-6 text-center md:mb-0">
            <a href='tel:+918239279999'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2"
              stroke="currentColor" className="mx-auto mb-6 h-8 w-8 text-primary dark:text-primary-400">
              <path strokeLinecap="round" strokeLinejoin="round"
                d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
            </svg></a>
            <h6 className="font-medium"><a href="tel:+918239279999">+91 8239279999</a></h6>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default ContactMe
