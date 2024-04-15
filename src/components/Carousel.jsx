import React from 'react'
import "./Carousel.css"
import introimg from "../images/intro.png"

export default function Carousel() {
  return (
    <center>
       <div className='intro_flex'>
            <div>
                <img width={500} src={introimg} alt="" />
            </div>
            <div style={{width:"50%"}}>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque rem quod ex iusto optio repellat natus illo numquam, vel molestiae necessitatibus maxime magni, similique eius sit ipsum quaerat? Voluptate, incidunt.</p>
            </div>
       </div>
    </center>
  )
}
