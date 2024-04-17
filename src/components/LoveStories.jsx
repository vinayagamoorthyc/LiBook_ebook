import React, { useEffect, useState } from 'react'
import LoveCard from './LoveCard';
import axios from "axios";

export default function LoveStories() {
  const [books, setBooks] = useState([]);
  const [load,setLoad] = useState(false);

  useEffect(() => {
    axios.get("http://localhost:8080/lovebooks/getAll")
    .then((e=>{
      setLoad(true);
      setBooks(e.data);
    }))
    .catch(err=>console.log(err));
    }, []);

  return (
    <center>
        <h2 style={{margin:"75px"}}>Love Stories</h2>
        <div className='mustread_flex'>
        <div class="superballs" hidden={load}>
          <div class="superballs__dot"></div>
          <div class="superballs__dot"></div>
        </div>
        {books.map((e)=>{
              return(
                <LoveCard name={e.name} bookId={e.bookId} author={e.author} year={e.year} url={e.url} desc={e.desc} category={e.category} />
            )})
          }
        </div>
    </center>
  )
}
