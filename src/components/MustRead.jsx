import React, { useEffect, useState } from 'react'
import MustReadCard from './MustReadCard'
import "./MustRead.css"
import axios from 'axios';

export default function MustRead() {
  const [books, setBooks] = useState([]);
  const [load,setLoad] = useState(false);

  useEffect(() => {
    axios.get("https://libook-pr0n.onrender.com/books/getAll")
    .then((e=>{
      setLoad(true);
      setBooks(e.data);
    }))
    .catch(err=>console.log(err));
    }, []);

  return (
    <center id=''>
      <h2 className='headings'>Must Read</h2>
      <div className='mustread_flex'>
        <div class="superballs" hidden={load}>
          <div class="superballs__dot"></div>
          <div class="superballs__dot"></div>
        </div>
        {books.map((e)=>{
          return(
            <MustReadCard name={e.name} bookId={e.bookId} author={e.author} year={e.year} url={e.url} desc={e.desc} category={e.category}/>
          )
        })}
      </div>
    </center> 
  )
}