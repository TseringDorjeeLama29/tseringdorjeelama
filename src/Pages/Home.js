import React from 'react'
import Navbar from '../components/Navbar'
import Button from '../components/ui/Button'
import About from './About'
import Contact from './Contact'
import Tab from '../components/ui/ProjectSection'
import ProjectSection from '../components/ui/ProjectSection'
// import { Routes, Route, Link } from "react-router-dom";

export default function Home() {
  return (
    <>
        <div className="container-fluid p-0 ">
            <div className="home-img">
                <Navbar />
                <div className="container intro-name position-relative ">
                  <h4 className='fs-3 text-white'>Introduction</h4>
                  <p className=' text-white'>My Name Tsering Dorjee Lama, <br />I am a Web Designer</p>
                  <Button />
                </div>
            </div>
        </div>

        <About />
        <Contact />
        

        {/* <Routes>
        <Route path="/" element={<Home />} />

      </Routes> */}
    </>
  )
}
