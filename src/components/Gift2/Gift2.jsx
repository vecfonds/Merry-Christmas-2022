import React, { useEffect } from 'react'
import './Gift2.css'
import { useSelector } from "react-redux";
import { selectUsername } from '../../store/features/userSlice';
import { useState } from 'react';

const Gift2 = () => {
    const username = useSelector(selectUsername);

    useEffect(() => {
        const elemCard = document.querySelector('div.cardz');
        const elemClickIcon = document.querySelector('span.click-icon');

        elemCard.addEventListener('click', function () {
            elemCard.classList.toggle('is-opened');
            elemClickIcon.classList.toggle('is-hidden');
        });
    }, [])


    return (
        <div className='gift2'>
            {/* <canvas className="zdog-canvas"></canvas> */}

            {/* <div class="gift">
                <div class="gift__bow">
                    <div class="gift__bow-left"></div>
                    <div class="gift__bow-right"></div>
                    <div class="gift__bow-center"></div>
                </div>
                <div class="gift__box">
                    <div class="gift__lid-shadow"></div>
                </div>
                <div class="gift__lid"></div>
                <div class="gift__star gift__star--1"></div>
                <div class="gift__star gift__star--2"></div>
                <div class="gift__star gift__star--3"></div>
                <div class="gift__star gift__star--4"></div>
                <div class="gift__star gift__star--5"></div>
            </div>
            <div className='gift2-title'>Coming Soon</div> */}

            <div className="cardz">
                <div className="card-page cart-page-front">
                    <div className="card-page cart-page-outside"></div>
                    <div className="card-page cart-page-inside">
                        <span className="merry-christmas">
                            <img src="/assets/images/logomery_cleanup-removebg-preview.png" alt="pling_logo" />
                        </span>
                    </div>
                </div>
                <div className="card-page cart-page-bottom">
                    {/* <p>Uma PEQUENA forma de demonstrar todo o orgulho e carinho que sentimos por você!
                        <br /><br />Feliz Natal e um próspero Ano Novo!
                        <br /><br /><i>Pling</i></p> */}
                    <p className='pFirst'>Dear {username},</p>
                    <p>
                        With all good wishes for a wonderful and happy Christmas season. Hope things are going all right with you. <br />
                        Merry Christmas!<br /><br />
                    </p>
                    <p className='pEnd'>Dũng</p>
                </div>
            </div>
            <span className="click-icon">
                <svg viewBox="0 0 40 45" xmlns="http://www.w3.org/2000/svg">
                    <path fill="#1165ae" d="M31.6 17.7V26c0 1.9-.7 3.7-2 5.1v.9c0 1.6-1.3 3-3 3h-8.4c-1.6 0-3-1.3-3-3 0-.6.5-1 1-1s1 .4 1 1c0 .5.4 1 1 1h8.4c.5 0 1-.4 1-1v-1.2-.3-.1c0-.1.1-.2.2-.3 1.1-1.1 1.7-2.5 1.7-4v-8.3c0-.3-.1-.5-.3-.7-.1-.1-.5-.4-1-.3-.4.1-.8.6-.8 1.1v2.4c0 .6-.5 1-1 1s-1-.4-1-1v-5.5c0-.3-.1-.5-.3-.7s-.4-.3-.7-.3c-.5 0-1 .5-1 1v5.5c0 .6-.5 1-1 1s-1-.4-1-1v-8.5c0-.3-.1-.5-.3-.7s-.4-.3-.7-.3c-.5 0-1 .5-1 1v8.5c0 .6-.5 1-1 1s-1-.4-1-1V7.7c0-.3-.1-.5-.3-.7-.1-.1-.5-.4-1-.3-.4.1-.8.6-.8 1.1V20c0 .4-.2.8-.6.9-.4.2-.8.1-1.1-.2L11 18.1c-.6-.6-1.6-.6-2.2.1-.5.6-.4 1.5.2 2.1l7 7c.4.4.4 1 0 1.4-.2.2-.5.3-.7.3-.3 0-.5-.1-.7-.3l-7-7.1c-1.3-1.3-1.5-3.5-.3-4.8C8 16 9 15.5 10 15.5c.9 0 1.8.4 2.5 1l.9.9V7.9c0-1.4.9-2.7 2.3-3 1-.3 2.1 0 2.8.8.6.6.9 1.3.9 2.1V9c.3-.1.7-.2 1-.2.8 0 1.5.3 2.1.9s.9 1.3.9 2.1v.2c.3-.1.7-.2 1-.2.8 0 1.5.3 2.1.9s.9 1.3.9 2.1v.2c.1 0 .2-.1.3-.1 1-.3 2.1 0 2.8.8.8.5 1.1 1.3 1.1 2z" />
                    <text x="20" y="43" className="click-text" fill="#1165ae" text-anchor="middle">
                        Open it!
                    </text>
                </svg>
            </span>
            <audio id="audio" autoPlay src="/assets/noel-e-kay-tran.mp3" loop preload="auto" style={{ display: "none" }}></audio>

            {/* <audio id="audio" autoPlay src="/assets/Kem-Duyen-Rum-NIT-Masew.mp3" loop preload="auto" style={{ display: "none" }}></audio> */}

        </div>
    )
}

export default Gift2