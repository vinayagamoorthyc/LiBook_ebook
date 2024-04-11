import React from 'react'
import NavBar from './components/NavBar'
import Carousel from './components/Carousel'
import "./App.css"
import MustRead from './components/MustRead'

export default function() {
  return (
    <div className='wholebody'>
        <NavBar/>
        <Carousel/>
        <MustRead/>
    </div>
  )
}
