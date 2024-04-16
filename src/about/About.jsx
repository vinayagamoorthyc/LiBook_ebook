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
                <p>Join us in celebrating the joy of reading and embark on endless literary adventures with Ebook Library. Start exploring today and unlock the door to a world of imagination and knowledge."</p>
                <p>Our platform is designed for convenience and accessibility. Access your favorite titles anytime, anywhere, across multiple devices. Whether you're curled up on the couch with a tablet, commuting with your smartphone, or studying at your desktop, your entire library is just a click away.</p>
                <div style={{display:"flex",gap:"25px",justifyContent:"center"}}>
                <i class="bi bi-github" style={{fontSize:"22px"}} onClick={()=>{window.open("https://github.com/vinayagamoorthyc","_blank")}}></i>
                <i class="bi bi-linkedin" style={{fontSize:"22px"}} onClick={()=>{window.open("https://www.linkedin.com/in/vinayaga-moorthy-c-bb8284276/","_blank")}}></i>
                <i class="bi bi-instagram" style={{fontSize:"22px"}} onClick={()=>{window.open("https://www.instagram.com/_.kolaru.__/","_blank")}}></i>
                </div>
            </div>
        </div>
    </center>
  )
}
