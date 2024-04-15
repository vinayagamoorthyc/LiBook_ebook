import React from 'react';
import "./Distributors.css";
import d1 from "../images/d1.png"
import d2 from "../images/d2.png"
import d3 from "../images/d3.png"
import d4 from "../images/d4.png"
import d5 from "../images/d5.png"


export default function Distributors() {
  return (
    <center>
        <div className='dist_flex'>
            <img width={200} src={d1} alt="" />
            <img width={200} src={d2} alt="" />
            <img width={200} src={d3} alt="" />
            <img width={200} src={d4} alt="" />
            <img width={200} src={d5} alt="" />
        </div>
    </center>
  )
}
