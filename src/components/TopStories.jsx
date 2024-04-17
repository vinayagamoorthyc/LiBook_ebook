import React, { useEffect, useState } from 'react'
import TopCard from './TopCard'
import axios from "axios";

export default function TopStories() {
  const [books, setBooks] = useState([]);
  const [load,setLoad] = useState(false);

  useEffect(() => {
    axios.get("http://localhost:8080/topbooks/getAll")
    .then((e=>{
      setLoad(true);
      setBooks(e.data);
    }))
    .catch(err=>console.log(err));
    }, []);


  return (
    <center id='topstories'>
        <h2 style={{margin:"75px"}}>Top Stories</h2>
        <div className='mustread_flex'>
        <div class="superballs" hidden={load}>
          <div class="superballs__dot"></div>
          <div class="superballs__dot"></div>
        </div>
          {books.map((e)=>{
              return(
                <TopCard name={e.name} bookId={e.bookId} author={e.author} year={e.year} url={e.url} desc={e.desc} category={e.category}/>
            )})
          }
        </div>
    </center>
  )
}
