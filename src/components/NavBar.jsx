import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css'
import "./NavBar.css"
import logo from "../images/logo.png"

function NavBar() {

    function check(){
        let k=window.prompt("Enter your admin key!");
        if(k=="vinayaga"){
            window.location="/BookCreate";
        }else{
            alert("Access denied!");
        }
    }

  return (
    <center>
        <Navbar expand="lg" className="navbar">
        <Container fluid>
            <Navbar.Brand href="#"><img src={logo} alt="LiBook" width={50} /></Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
            <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: '100px' }}
                navbarScroll
            >
                <Nav.Link href="#Home">Home</Nav.Link>
                <Nav.Link href="/Library">Library</Nav.Link>
                <Nav.Link href="#about">About</Nav.Link>
                <Nav.Link href="#brands">Brands</Nav.Link>
                <Nav.Link href="#topstories">Stories</Nav.Link>
            </Nav>
            <div style={{display:"flex",gap:"20px",alignItems:"center"}}>
                <a class="button1" style={{clr: "#7808d0"}} onClick={()=>check()}>Admin Portal</a>
                <i class="bi bi-github" style={{fontSize:"22px"}} onClick={()=>{window.open("https://github.com/vinayagamoorthyc","_blank")}}></i>
                <i class="bi bi-linkedin" style={{fontSize:"22px"}} onClick={()=>{window.open("https://www.linkedin.com/in/vinayaga-moorthy-c-bb8284276/","_blank")}}></i>
                <i class="bi bi-instagram" style={{fontSize:"22px"}} onClick={()=>{window.open("https://www.instagram.com/_.kolaru.__/","_blank")}}></i>
            </div>
            </Navbar.Collapse>
        </Container>
        </Navbar>
    </center>
  );
}

export default NavBar;