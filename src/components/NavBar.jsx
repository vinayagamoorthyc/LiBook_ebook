import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css'
import "./NavBar.css"
import logo from "../images/logo.png"

function NavBar() {
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
                <Nav.Link href="#action1">Home</Nav.Link>
                <Nav.Link href="/Library">Library</Nav.Link>
                <Nav.Link href="/AdminHome">Admin</Nav.Link>

            </Nav>
            <div style={{display:"flex",gap:"20px"}}>
                <i class="bi bi-journal-bookmark-fill" style={{fontSize:"22px"}}></i>
                <i class="bi bi-search" style={{fontSize:"22px"}}></i>
                <i class="bi bi-person-circle" style={{fontSize:"22px"}}></i>
            </div>
            </Navbar.Collapse>
        </Container>
        </Navbar>
    </center>
  );
}

export default NavBar;