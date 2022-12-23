import React from 'react'
import './Gift4.css'

const Gift4 = () => {
    return (
        <div className='gift4'>
            <div className="window">
                <div className="santa">
                    <div className="head">
                        <div className="face">
                            <div className="redhat">
                                <div className="whitepart"></div>
                                <div className="redpart"></div>
                                <div className="hatball"></div>
                            </div>
                            <div className="eyes"></div>
                            <div className="beard">
                                <div className="nouse"></div>
                                <div className="mouth"></div>
                            </div>
                        </div>
                        <div className="ears"></div>
                    </div>
                    <div className="body"></div>
                </div>
            </div>
            <div className="message">
                <h1>Merry Christmas!</h1>
                {/* <h2 className="copyright">pure css Santa Caul made with ♥ by <a href="https://twitter.com/alireza29675" target="_blank">Alireza Sheikholmolouki</a></h2> */}
            </div>
            <audio id="audio" autoPlay src="/assets/Tieng-cuoi-ong-gia-noel-www_nhachuongvui_com.mp3" loop preload="auto" style={{ display: "none" }}></audio>

        </div>
    )
}

export default Gift4