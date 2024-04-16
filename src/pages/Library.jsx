import React, { useEffect, useState } from 'react';
import LibNav from './LibNav';
import axios from "axios";
import LibCard from './LibCard';
import "./Library.css"

export default function Library() {
  const [books, setBooks] = useState([]);
  const [books2, setBooks2] = useState([]);
  const [books3, setBooks3] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8080/books/getAll")
    .then((e=>setBooks(e.data)))
    .catch(err=>console.log(err));

    axios.get("http://localhost:8080/topbooks/getAll")
    .then((e=>setBooks2(e.data)))
    .catch(err=>console.log(err));

    axios.get("http://localhost:8080/lovebooks/getAll")
    .then((e=>setBooks3(e.data)))
    .catch(err=>console.log(err));
    }, []);
  return (
    <div>
        <LibNav/><br /><br /><br /><br />
        <div className='lib_flex'>
          
          {books.map((e)=>{
              return(
                <LibCard name={e.name} bookId={e.bookId} author={e.author} year={e.year} url={e.url} desc={e.desc} category={e.category}/>
            )})
          }
          {books2.map((e)=>{
              return(
                <LibCard name={e.name} bookId={e.bookId} author={e.author} year={e.year} url={e.url} desc={e.desc} category={e.category}/>
            )})
          }
          {books3.map((e)=>{
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
