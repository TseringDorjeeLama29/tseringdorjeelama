import React from 'react'
import { Routes, Route, Link } from "react-router-dom";
import Home from './Pages/Home';


export default function Main() {
  return (
    <>
        
      <Routes>
        <Route path="/" element={<Home />} />

      </Routes>




      
    </>
  )
}
