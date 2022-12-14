import styles from './index.module.css'
import React from 'react'
import LandingPage from './landingPage'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import FaceRecog from './faceRecog'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<LandingPage/>}/>
        <Route path='/facerecog' element={<FaceRecog/>}/>
        <Route path='*' element={<h1>Page Not Found</h1>}/>
      </Routes>
    </BrowserRouter>
  )
}
