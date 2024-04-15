import React from 'react'
import "./Carousel.css"
import introimg from "../images/about.png"

export default function Carousel() {
  return (
    <center>
       <div className='intro_flex'>
            <div>
                <img width={500} src={introimg} alt="" />
            </div>
            <div style={{width:"50%"}}>
                <p>Welcome to our Ebook Library, your digital sanctuary for book lovers! Dive into a world of limitless literature with our comprehensive collection of ebooks. Whether you're a passionate reader, a student in search of academic resources, or a professional seeking knowledge, our platform offers a curated selection to satisfy every interest and need.</p>
                <p>Immerse yourself in a world where imagination knows no bounds and curiosity is always rewarded. From timeless classics to contemporary bestsellers, from scholarly tomes to gripping thrillers, our library is a treasure trove waiting to be explored.</p>
                <p>Start exploring today and let the pages come to life.</p>
                <button>Explore more</button>
            </div>
       </div>
    </center>
  )
}
