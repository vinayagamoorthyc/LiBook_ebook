import React from 'react';
import about from "../images/intro.png"
import "../about/About.css"

export default function About() {
  return (
    <center id='about'>
        <div className='about_flex'>
            <div>
                <img width={550} src={about} alt="" />
            </div>
            <div style={{width:"50%"}}>
                <h3>About Us</h3>
                <p>Welcome to our Ebook Library, your digital sanctuary for book lovers! Dive into a world of limitless literature with our comprehensive collection of ebooks. Whether you're a passionate reader, a student in search of academic resources, or a professional seeking knowledge, our platform offers a curated selection to satisfy every interest and need.</p>
                <p>Our platform is designed for convenience and accessibility. Access your favorite titles anytime, anywhere, across multiple devices. Whether you're curled up on the couch with a tablet, commuting with your smartphone, or studying at your desktop, your entire library is just a click away.</p>
            </div>
        </div>
    </center>
  )
}
