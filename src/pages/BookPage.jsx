import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import axios from "axios";
import "./BookPage.css";

export default function BookPage() {
  const [book,setBook] = useState([]);
    const {id} = useParams();

    useEffect(()=>{
      window.scrollTo(0,0);
      axios.get("http://localhost:8080/topbooks/search/"+id)
      .then((e)=>setBook(e.data))
      .catch(err=>console.log(err));
      axios.get("http://localhost:8080/lovebooks/search/"+id)
      .then((e)=>setBook(e.data))
      .catch(err=>console.log(err));
      axios.get("http://localhost:8080/books/search/"+id)
      .then((e)=>setBook(e.data))
      .catch(err=>console.log(err));
    }, []);

    const handleShare = async () => {
      try {
        if (navigator.share) {
          await navigator.share({
            url: window.location.href
          });
        } else {
          const fallbackShare = () => {
            if (navigator.clipboard) {
              navigator.clipboard.writeText(window.location.href)
                .then(() => {
                  
                })
                .catch(error => console.error('Error copying to clipboard:', error));
            } else {
              alert('Please copy the URL manually');
            }
          };
          fallbackShare();
        }
      } catch (error) {
        console.error('Error sharing:', error.message);
      }
    };

  return (
    <center><br /><br />
    <div>
      <div className='bookpage_flex'>
        <div>
          <img src={book.url} alt="" width={300} className='img'/>
        </div>
        <div className='content'>
          <h1>{book.name}</h1><br />
          <p><b>{book.author}</b></p><br />
          <p>The Book was published in <b>{book.year}</b> by the author who named {book.author}.</p>
          <p>Get ready to uncover the dark secrets and betrayals in the book. A thrilling story awaits you.</p>
          <p><b>Language: </b>Standard English (US & UK)</p>
          <div style={{display:"flex",flexDirection:"row",alignItems:"center",gap:"10px"}}>
                      <a href="#read" class="button1" style={{clr: "#7808d0"}}>
                        <span class="button1__icon-wrapper">
                            <svg
                            viewBox="0 0 14 15"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            class="button1__icon-svg"
                            width="10"
                            >
                            <path
                                d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"
                                fill="currentColor"
                            ></path>
                            </svg>

                            <svg
                            viewBox="0 0 14 15"
                            fill="none"
                            width="10"
                            xmlns="http://www.w3.org/2000/svg"
                            class="button1__icon-svg button1__icon-svg--copy"
                            >
                            <path
                                d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"
                                fill="currentColor"
                            ></path>
                            </svg>
                        </span>
                        Start reading
                      </a>&nbsp;&nbsp;
                      <h5 onClick={handleShare}><i class="bi bi-share"></i></h5>
          </div>            
        </div>
      </div><br />
      <div className='bookpage_flex' id='read'>
        <p>{book.desc}
        </p>
      </div><br /><br />
    </div>
    </center>
  )
}
