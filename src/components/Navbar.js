import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <>
         <div className="container pt-4 nav_bar">
            <div className="d-flex justify-content-between align-items-center text-white">
                <div className="logo fw-bolder fs-2">Profession</div>
                <div className="nav">
                      <nav className="navbar navbar-expand-lg text-white">
                          <div className="container-fluid">
                              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                                  <span className="navbar-toggler-icon" />
                              </button>
                              <div className="collapse navbar-collapse" id="navbarNavDropdown">
                                  <ul className="navbar-nav">
                                      <li className="nav-item">
                                          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                                      </li>                                   
                                      <li className="nav-item">
                                          <a className="nav-link active" aria-current="page" href="#about">About</a>
                                      </li>                                   
                                      <li className="nav-item">
                                          <a className="nav-link active" aria-current="page" href="#services">Services</a>
                                      </li>                                   
                                      <li className="nav-item">
                                          <a className="nav-link active" aria-current="page" href="#portfolio">Portfolio</a>
                                      </li>                                   
                                      <li className="nav-item">
                                          <Link className="nav-link active" aria-current="page" to="#">Experiences</Link>
                                      </li>                                   
                                      <li className="nav-item">
                                          <a className="nav-link active" aria-current="page" href="#contact">Contact Us</a>
                                      </li>                                                 
                                  </ul>
                              </div>
                          </div>
                      </nav>
                </div>               
            </div>
        </div>
    </>
  )
}
