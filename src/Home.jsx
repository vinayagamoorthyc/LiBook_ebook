import React from 'react'
import NavBar from './components/NavBar'
import Carousel from './components/Carousel'
import "./App.css"
import MustRead from './components/MustRead'
import TopStories from './components/TopStories'
import Footer from './components/Footer'
import Distributors from './components/Distributors'

export default function() {
  return (
    <div className='wholebody'>
        <NavBar/>
        <Carousel/>
        <MustRead/>
        <TopStories/>
        <Distributors/>
        <Footer/>
    </div>
  )
}
