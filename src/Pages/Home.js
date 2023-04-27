import React from 'react'
import Navbar from '../components/Navbar'
import Button from '../components/ui/Button'
import About from './About'
import Contact from './Contact'
import ProjectSection from '../components/ui/ProjectSection'

export default function Home() {
  return (
    <>
      <div className="container-fluid p-0 ">
        <div className="home-img">
          <Navbar />
          <div className="container intro-name ">
            <div className="header_bg_body">
              <h4 className='fs-3 text-white'>Introduction</h4>
              <p className=' text-white'>My Name Tsering Dorjee Lama, <br />I am a Web Designer</p>
              <Button />
            </div>
          </div>
        </div>
      </div>

      <About />
      <ProjectSection />
      <Contact />

    </>
  )
}
