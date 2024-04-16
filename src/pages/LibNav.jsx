import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from "../images/logo.png";
import "./LibNav.css"

export default function LibNav() {
  return (
    <div>
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
                    <Nav.Link href="/">Home</Nav.Link>
                </Nav>
                <div style={{display:"flex",gap:"20px"}}>

                    <div className="group">
                        <svg className="icon" aria-hidden="true" viewBox="0 0 24 24"><g><path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"></path></g></svg>
                        <input placeholder="Search" type="search" className="input"/>
                    </div>

                    <div className='group'>
                        <select name="" id="" className='input'>
                            <option value="">All</option>
                            <option value="">Must Read</option>
                            <option value="">Love Stories</option>
                            <option value="">Top Stories</option>
                        </select>
                    </div>

                </div>
                </Navbar.Collapse>
            </Container>
            </Navbar>
        </center>
</div>
  )
}
