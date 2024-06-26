import React from 'react'
import logo from "../images/logo.png"
import Nav from 'react-bootstrap/Nav';
import "./Footer.css";

export default function Footer() {
  return (
    <div>
        <div className='footer_flex'>
            <div className='footer_first'>
                <div style={{display:"flex",flexDirection:"row",gap:"5px",alignItems:"center"}}>
                    <img src={logo} alt="LiBook" width={50} />
                    <label>LiBook</label>
                </div>
                <div className='footer_navs'>
                    <Nav.Link href="" onClick={()=>window.scrollTo(0,0)}>Home</Nav.Link>
                    <Nav.Link href="/Library">Library</Nav.Link>
                    <Nav.Link href="#topstories">Stories</Nav.Link>
                </div>
            </div>
            <center><hr style={{color:"rgba(0, 0, 0, 0.3)",width:"80%"}}/></center>
            <a style={{textAlign:"center",color:"black",textDecoration:"none"}} href='https://vinayagamoorthy.vercel.app/' target='_blank'>
                &copy; Developed by Vinayaga Moorthy
            </a>
        </div>
    </div>
  )
}
