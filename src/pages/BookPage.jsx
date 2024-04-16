import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import axios from "axios";
import "./BookPage.css";

export default function BookPage() {
  const [book,setBook] = useState([]);
    const {id} = useParams();
    useEffect(()=>{
      window.scrollTo(0,0)
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
                      <h5><i class="bi bi-share"></i></h5>
          </div>            
        </div>
      </div><br />
      <div className='bookpage_flex' id='read'>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit perferendis soluta cum maiores quam exercitationem. Possimus hic odit et recusandae doloribus commodi reprehenderit omnis harum sint totam, dolor quod repudiandae! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo dolorem fugiat recusandae odit doloribus veniam eos. Quos iste esse quae. Hic, ratione! Aliquid voluptatibus ea harum eligendi quidem incidunt ducimus!Lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum deserunt, alias accusantium, inventore harum officiis aperiam praesentium ex illo a modi cum cumque. Facere neque ullam ut dolorem explicabo sapiente. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas consequuntur tempora nesciunt iure officiis quae illo. Earum in accusantium explicabo deserunt deleniti praesentium nostrum hic itaque nam, quod eaque aliquid. Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita ducimus debitis suscipit id, eligendi ea nihil voluptate tempora dolores, libero voluptatem at, error quisquam non corrupti! Tempore illo similique exercitationem? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur cumque vitae nisi expedita. Rerum modi eligendi, aliquid minus harum iusto neque, quas dicta id esse dolore illum est vitae fugiat! <br /><br /> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet maxime unde quod alias placeat laboriosam sit voluptatibus obcaecati. Eligendi, reiciendis distinctio! Numquam, culpa omnis! Iure, voluptatibus? Earum, autem porro? Repellat. Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita beatae consequatur sequi exercitationem officia totam corrupti architecto veritatis est maxime explicabo, obcaecati earum nemo sunt minima impedit incidunt labore dolor. Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde harum libero fugiat rem quidem eos, iusto repellat totam perferendis corporis tenetur sapiente porro velit sunt voluptas dolorem aliquid odit adipisci? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae porro accusamus eos nihil quibusdam obcaecati inventore beatae quidem nostrum blanditiis, maiores minima libero. Ex quisquam, nemo minus odit vitae obcaecati. <br /><br />
         Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, quia laboriosam consectetur voluptatem itaque libero quas ratione perferendis delectus accusamus ut. Saepe modi, inventore quasi officiis consectetur blanditiis ipsum! A! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente a voluptates cumque corporis sunt excepturi aliquid quisquam numquam iste nemo inventore in, blanditiis earum quae voluptatem. Sed vel et natus? Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit provident tenetur numquam labore, iste qui vitae saepe dicta in voluptatum doloribus eveniet quidem, molestias quis aspernatur harum consectetur maiores molestiae. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas blanditiis itaque neque illo deserunt perspiciatis labore dolores explicabo voluptates consequuntur tenetur distinctio delectus corrupti sit placeat accusamus dolorum, laboriosam quod?Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro cupiditate alias incidunt soluta ullam sunt. Exercitationem unde placeat facilis accusamus rerum repellat ratione nemo illo quae, repudiandae recusandae laudantium vel!
        </p>
      </div><br /><br />
    </div>
    </center>
  )
}
