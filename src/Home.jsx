import React from 'react'
import NavBar from './components/NavBar'
import Carousel from './components/Carousel'
import "./App.css"
import MustRead from './components/MustRead'
import TopStories from './components/TopStories'
import Footer from './components/Footer'
import Distributors from './components/Distributors'
import LoveStories from './components/LoveStories'
import About from './about/About'

export default function() {
  return (
    <div className='wholebody'>
        <NavBar/><br /><br /><br /><br /><br /><br />
        <Carousel/>
        <Distributors/>
        <MustRead/>
        <TopStories/>
        <LoveStories/>
        <About/>
        <Footer/>
    </div>
  )
}
