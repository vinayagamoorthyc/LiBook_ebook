import React from 'react';
import { Card } from '@nextui-org/react';
import "../components/MustRead.css"
import { Link } from 'react-router-dom';

export default function LibCard(props) {
  return (
    <Link to={`/BookPage/${props.bookId}`} style={{textDecoration:"none",color:"black"}}>
        <Card
        className="mustreadcard" 
        >
        <img
        width={200}
            alt=""
            src={props.url}
        />
        </Card>
        <div style={{textAlign:"start"}}>{props.name}</div>
    </Link>
  )
}
