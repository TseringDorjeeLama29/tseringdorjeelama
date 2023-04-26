import React from 'react'
import Tab from 'react-bootstrap/Tab'
import Tabs from 'react-bootstrap/Tabs';
import About from '../../Pages/About'
import Project from '../../Pages/Project';

export default function ProjectSection() {
  return (
    <>
        <div className="container my-5 text-center">
            <h2 className='mt-5 mb-3'>Selected Projects</h2>
            <Tabs defaultActiveKey="home" id="uncontrolled-tab-example" className="mb-3 t">
                  <Tab eventKey="home" title="All Projects">
                      <Project />
                  </Tab>
                  <Tab eventKey="profile" title="Website">
                      <About />
                  </Tab>
              </Tabs>
        </div>
    </>
  )
}
