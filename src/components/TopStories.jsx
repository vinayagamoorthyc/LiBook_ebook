import React, { useEffect, useState } from 'react'
import TopCard from './TopCard'
import axios from "axios";

export default function TopStories() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8080/topbooks/getAll")
    .then((e=>setBooks(e.data)))
    .catch(err=>console.log(err));
    }, []);


  return (
    <center id='topstories'>
        <h2 style={{margin:"75px"}}>Top Stories</h2>
        <div className='mustread_flex'>
          {books.map((e)=>{
              return(
                <TopCard name={e.name} bookId={e.bookId} author={e.author} year={e.year} url={e.url} desc={e.desc} />
            )})
          }
        </div>
    </center>
  )
}
