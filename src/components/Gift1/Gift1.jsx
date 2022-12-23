import React from 'react'
import './Gift1.css'

const Gift1 = () => {
    return (
        <div className="main">
            <div className="mask" align="center">
                <div className="text" align="center">
                    Merry<br />Christmas
                </div>
                <img src="/assets/images/Santa.png" className="santa" alt="Santa" />
                <div id="sid" className="snow">
                    <span className="o">❄</span>
                    <span className="o">❄</span>
                    <span className="o">❄</span>
                    <span className="o">❄</span>
                    <span className="r">❄</span>
                    <span className="r">❄</span>
                    <span className="r">❄</span>
                    <span className="r">❄</span>
                    <span className="m">❄</span>
                    <span className="m">❄</span>
                    <span className="m">❄</span>
                    <span className="m">❄</span>
                </div>
                <audio id="audio" autoPlay src="/assets/jingle-bells.mp3" loop preload="auto" style={{ display: "none" }}></audio>

                {/* <audio id="audio" autoPlay src="https://assets.codepen.io/3/jingle-bells.mp3" loop preload="auto" style={{ display: "none" }}></audio> */}
            </div>
        </div>
    )
}

export default Gift1