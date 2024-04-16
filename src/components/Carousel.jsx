import React from 'react'
import "./Carousel.css"
import introimg from "../images/about.png"

export default function Carousel() {
  return (
    <center>
       <div className='intro_flex'>
            <div>
                <img width={500} src={introimg} alt="" />
            </div>
            <div style={{width:"50%"}}>
                <p>Welcome to our Ebook Library, your digital sanctuary for book lovers! Dive into a world of limitless literature with our comprehensive collection of ebooks. Whether you're a passionate reader, a student in search of academic resources, or a professional seeking knowledge, our platform offers a curated selection to satisfy every interest and need.</p>
                <p>Immerse yourself in a world where imagination knows no bounds and curiosity is always rewarded. From timeless classics to contemporary bestsellers, from scholarly tomes to gripping thrillers, our library is a treasure trove waiting to be explored. Start exploring today and let the pages come to life.</p>
                <div id='brands'>
                    <a href="/Library" class="button1" style={{clr: "#7808d0"}}>
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
                        Explore More
                    </a>
                </div>
            </div>
       </div>
    </center>
  )
}
