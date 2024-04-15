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
                <div style={{display:"flex",flexDirection:"row",gap:"50px",fontWeight:"600"}}>
                    <Nav.Link href="#action1">Home</Nav.Link>
                    <Nav.Link href="/Library">Category</Nav.Link>
                    <Nav.Link href="/AdminHome">Stories</Nav.Link>
                </div>
            </div>
            <center><hr style={{color:"rgba(0, 0, 0, 0.3)",width:"80%"}}/></center>
            <div style={{textAlign:"center"}}>
                &copy; Developed by Vinayaga Moorthy
            </div>
        </div>
    </div>
  )
}
