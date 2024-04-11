import React, { useState } from 'react'
import Books from '../components/Books'
import list from "../components/data"

export default function Library() {
    const [book,setBook]=useState(list);
    const books = book.map(e=>{
        <Books name={e.title}/>
    })
  return (
    <div>
        {books}
    </div>
  )
}
