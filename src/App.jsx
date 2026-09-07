import React from 'react'
import Home from './pages/Home'
import Navbar from './layouts/Navbar'
import LenisScroll from './utils/Lenis'
import Footer from './layouts/Footer'

const App = () => {
  return (
    <div>
      <LenisScroll/>
      <Navbar/>
      <Home/>
      <Footer/>
    </div>
  )
}

export default App