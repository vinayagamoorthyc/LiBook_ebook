import React, { useEffect, useState } from 'react'
import MustReadCard from './MustReadCard'
import "./MustRead.css"
import axios from 'axios';

export default function MustRead() {
  const [books, setBooks] = useState([]);
  console.log(books)

  useEffect(() => {
    axios.get("http://localhost:8080/books/getAll")
    .then((e=>setBooks(e.data)))
    .catch(err=>console.log(err));
    }, []);

  return (
    <center id=''>
      <h2 style={{margin:"75px",width:"80%"}}>Must Read</h2>
      <div className='mustread_flex'>
        {books.map((e)=>{
          return(
            <MustReadCard name={e.name} bookId={e.bookId} author={e.author} year={e.year} url={e.url} desc={e.desc} />
          )
        })}
      </div>
    </center> 
  )
}