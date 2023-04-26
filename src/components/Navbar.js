import React from 'react'

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
                                          <a className="nav-link active" aria-current="page" href="#">Home</a>
                                      </li>                                   
                                      <li className="nav-item">
                                          <a className="nav-link active" aria-current="page" href="#">About</a>
                                      </li>                                   
                                      <li className="nav-item">
                                          <a className="nav-link active" aria-current="page" href="#">Services</a>
                                      </li>                                   
                                      <li className="nav-item">
                                          <a className="nav-link active" aria-current="page" href="#">Portfolio</a>
                                      </li>                                   
                                      <li className="nav-item">
                                          <a className="nav-link active" aria-current="page" href="#">Experiences</a>
                                      </li>                                   
                                      <li className="nav-item">
                                          <a className="nav-link active" aria-current="page" href="#">Contact Us</a>
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
