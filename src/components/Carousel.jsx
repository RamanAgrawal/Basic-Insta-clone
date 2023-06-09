import React, { useState } from 'react'
// import './carousel.css'
// import '../App.css'
import {AiFillLeftCircle, AiFillRightCircle}from'react-icons/ai'
const Carousel = ({ children: media }) => {
    const [curr,setCurr]=useState(0);
    const prev=()=>setCurr(curr=>curr===0?media.length-3:curr-1)
    const next=()=>setCurr(curr=>curr===media.length-3?0:curr+1)
    return (
        <div className='carousel'>
            <div className='inner' style={{transform:`translateX(-${curr*100}%)`}} >{media}</div>
            <div className="controls">
                <button onClick={prev}>
                    <AiFillLeftCircle size={40}/>
                    
                </button>
                <button onClick={next}>
                <AiFillRightCircle size={40}/>
                </button>
            </div>
        </div>
    )
}

export default Carousel