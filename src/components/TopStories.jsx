import React from 'react'
import TopCard from './TopCard'

export default function TopStories() {
  return (
    <center id='topstories'>
        <h2 style={{margin:"75px"}}>Top Stories</h2>
        <div className='mustread_flex'>
        <TopCard/>
        <TopCard/>
        <TopCard/>
        <TopCard/>
        <TopCard/>
        <TopCard/>
        <TopCard/>
        </div>
    </center>
  )
}
