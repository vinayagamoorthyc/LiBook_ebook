import React, { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from "../images/logo.png";
import axios from "axios";
import LibCard from './LibCard';
import "./Library.css"
import "./LibNav.css"

export default function Library() {
  const [books, setBooks] = useState([]);
  const [books2, setBooks2] = useState([]);
  const [books3, setBooks3] = useState([]);
  const all=[...books,...books2,...books3];
  const [load,setLoad] = useState(false);

  const [filter, setFilter] = useState('all');
  const [search, setSearch] = useState('');
  const handleFilterChange = () => {
    let selectedFilter = document.getElementById("drop").value;
    setFilter(selectedFilter);
  };
  const handleSearchChange = (event) => {
    setSearch(event.target.value);
  };

  const filteredBooks = all.filter( (e)=> {

    const categoryMatch = filter === 'all' || e.category === filter;

    const searchMatch = e.name.toLowerCase().includes(search.toLowerCase());

    return categoryMatch&searchMatch;
  });

  useEffect(() => {
    axios.get("http://localhost:8080/books/getAll")
    .then((e=>{
      setLoad(true);
      setBooks(e.data);
    }))
    .catch(err=>console.log(err));

    axios.get("http://localhost:8080/topbooks/getAll")
    .then((e=>{
      setLoad(true);
      setBooks2(e.data);
    }))
    .catch(err=>console.log(err));

    axios.get("http://localhost:8080/lovebooks/getAll")
    .then((e=>{
      setLoad(true);
      setBooks3(e.data);
    }))
    .catch(err=>console.log(err));
    }, []);


  return (
    <div>
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
                        <input placeholder="Search" type="search" className="input" onChange={handleSearchChange}/>
                    </div>

                    <div className='group'>
                        <select name="" id="drop" className='input' onChange={handleFilterChange}>
                            <option value="all">All</option>
                            <option value="MustRead">Must Read</option>
                            <option value="LoveBooks">Love Stories</option>
                            <option value="TopBooks">Top Stories</option>
                        </select>
                    </div>

                </div>
                </Navbar.Collapse>
            </Container>
            </Navbar>
        </center>
</div><br /><br /><br /><br />
        <div className='lib_flex'>
        <div class="superballs" hidden={load}>
          <div class="superballs__dot"></div>
          <div class="superballs__dot"></div>
        </div>
          {filteredBooks?.map((e)=>{
              return(
                <LibCard name={e.name} bookId={e.bookId} author={e.author} year={e.year} url={e.url} desc={e.desc} category={e.category}/>
            )})
          }
          
        </div>
        <div>
          
        </div>
    </div>
  )
}
