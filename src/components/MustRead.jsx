import React from 'react'
import MustReadCard from './MustReadCard'
import "./MustRead.css"

export default function MustRead() {
  return (
    <center>
    <div className='mustread_flex'>
       <MustReadCard/>
       <MustReadCard/>
       <MustReadCard/>
       <MustReadCard/>
       <MustReadCard/>
    </div>
    </center> 
  )
}
