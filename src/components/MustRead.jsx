import React from 'react'
import MustReadCard from './MustReadCard'
import "./MustRead.css"

export default function MustRead() {
  return (
    <center id=''>
      <h2 style={{margin:"75px",width:"80%"}}>Must Read</h2>
      <div className='mustread_flex'>
        <MustReadCard/>
        <MustReadCard/>
        <MustReadCard/>
        <MustReadCard/>
        <MustReadCard/>
        <MustReadCard/>
      </div>
    </center> 
  )
}
