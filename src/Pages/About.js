import React from 'react'

export default function About() {
  return (
    <>
      <div className="container my-5  about" id='about'>
            <h2 className='text-start ms-3 my-3 text-lighter fw-bold'>Profile</h2>
        <div className="row align-items-start gx-5 justify-content-between">
          <div className="col-lg-8">
            <div className="d-flex justify-content-between align-items-center">
              <div className="profile-img mt-2">
                <img src={require('../Assets/img/tsering.jpg')} className="" />
              </div>
              <div className="profile-body w-75 mt-3">
                <p className='lh-base text-secondary'>I have worked for many companies around the world, helping build stunning designs, and provide a creative direction across multiple platforms.</p>
                <p className='lh-base text-secondary'>consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut minim quis nostrud exercitation ullamco laboris et eiusmod tempor incididun dolore magna nostrud exercitation.</p>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="row">
              <div className="col">
                <div className='progress-box'>
                  <h5 className='progress-bar d-inline'>HTML</h5>
                  <span className='text-end'>70%</span>
                  <div className="progress">
                    <div className="skills html"></div>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className='progress-box'>
                  <h5 className='progress-bar d-inline'>CSS</h5>
                  <span className='text-end'>60%</span>
                  <div className="progress">
                    <div className="skills css"></div>
                  </div>
                </div></div>
              <div className="col">
                <div className='progress-box'>
                  <h5 className='progress-bar d-inline'>JAVASCRIPT</h5>
                  <span className='text-end'>30%</span>
                  <div className="progress">
                    <div className="skills js"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

