import React, { useEffect } from 'react'
import './Slider.css'
import { motion } from "framer-motion"

import { Slideshow, SlideshowItem } from "./slideshow";

const Slider = () => {
    return (
        <div className="slider">
            <ul className="slideshow">
                <li><span>Image 01</span></li>
                <li><span>Image 02</span></li>
                {/* <li><span>Image 03</span><div><h3>3</h3></div></li>
                <li><span>Image 04</span><div><h3>4</h3></div></li>
                <li><span>Image 05</span><div><h3>5</h3></div></li>
                <li><span>Image 06</span><div><h3>6</h3></div></li> */}
            </ul>
        </div>
    )
}

export default Slider


