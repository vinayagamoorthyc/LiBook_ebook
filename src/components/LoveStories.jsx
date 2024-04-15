import React from 'react'
import LoveCard from './LoveCard'

export default function LoveStories() {
  return (
    <center>
        <h2 style={{margin:"75px"}}>Love Stories</h2>
        <div className='mustread_flex'>
            <LoveCard/>
            <LoveCard/>
            <LoveCard/>
            <LoveCard/>
            <LoveCard/>
            <LoveCard/>
            <LoveCard/>
        </div>
    </center>
  )
}
