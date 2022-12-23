import React, { useEffect, useState } from 'react'
import './ButtonChrismas.css'
// import './function'
import BrandStory from '../BrandStory/BrandStory'
import { motion } from "framer-motion"

import { useDispatch } from "react-redux";
import { updateUsername } from '../../store/features/userSlice'
import { useNavigate } from 'react-router-dom'

const ButtonChrismas = () => {
    const navigate = useNavigate()

    const dispatch = useDispatch();

    // const [show, setShow] = useState(true);
    const [username, setUsername] = useState("");
    const [nameError, setNameError] = useState(false);
    const [nameSuccess, setNameSuccess] = useState(false);

    useEffect(() => {
        setTimeout(() => setNameError(false), 6000);
    }, [nameError])

    // function handleLogin() {
    //     // Dispatch action updateUsername to store
    //     if (username.trim().length) {
    //         dispatch(updateUsername(username));

    //         // Navigate to dashboard page
    //         navigate('home');
    //     }
    //     else {
    //         setNameError(true);
    //     }
    // }

    function resolveAfter5Seconds() {
        return new Promise(resolve => {
            setTimeout(() => {
                resolve(setNameSuccess(false));
                document.title = username;
            }, 5000);
        });
    }


    async function handleLogin() {
        // Dispatch action updateUsername to store
        if (username.trim().length) {
            dispatch(updateUsername(username));
            setNameSuccess(true);
            await resolveAfter5Seconds();
            // Navigate to dashboard page
            navigate('home');
        }
        else {
            setNameError(true);
        }
    }


    return (
        <div className="bg">
            <motion.div
                initial={{ position: "absolute" }}
                // whileInView={{
                //     rotate: -10,
                //     transition: {
                //         duration: 3,
                //         type: "spring",
                //         repeat: Infinity
                //     }
                // }}

                animate={{ rotate: [10, -10, 10], }}
                transition={{
                    duration: 3,
                    type: "spring",
                    repeat: Infinity
                }}//times: [0, 1]
            >
                <img src="/assets/images/merry1-removebg-preview.png" alt="" />
            </motion.div>


            <div className="centerer">

                <input
                    name="name"
                    type="text"
                    placeholder='Nhập tên vào đây nè ...'
                    value={username}
                    onChange={event => setUsername(event.target.value)}
                    autoFocus
                />

                {/* [10, -10, 10] */}
                {/* translateX: [0, 50, 50, 0], translateY: [0, 0, 50, 50] */}
                <motion.div
                    initial={{ position: "relative" }}
                    animate={{ scale: [1, 0.98, 1], }}
                    transition={{
                        duration: 1,
                        type: "spring",
                        repeat: Infinity
                    }}//times: [0, 1]
                >
                    <button onClick={handleLogin} className="button">Merry Christmas</button>
                </motion.div>

                {nameError &&
                    <motion.div
                        initial={{ position: "relative" }}
                        animate={{ scale: [0.5, 1, 1, 1], opacity: [0, 1, 1, 0.1] }}
                        transition={{
                            duration: 10,
                            type: "spring",
                            repeat: Infinity
                        }}//times: [0, 1]
                    >
                        <img src="/assets/images/please.png" alt="lickme" className='img-clickme' />
                    </motion.div>
                }

                {nameSuccess &&
                    <motion.div
                        initial={{ position: "relative" }}
                        animate={{ scale: [0.5, 1, 1, 1], opacity: [0, 1, 1, 0.1] }}
                        transition={{
                            duration: 10,
                            type: "spring",
                            repeat: Infinity
                        }}//times: [0, 1]
                    >
                        <img src="/assets/images/success.png" alt="lickme" className='img-clickme-success' />
                    </motion.div>
                }



            </div>
            {/* <audio id="audio" autoPlay src="https://assets.codepen.io/3/jingle-bells.mp3" preload="auto" style={{ display: "none" }}></audio> */}
            {/* <Link to='gift1' >dsfgdsf</Link>
            <Link to='gift2' >dsfgdsf</Link>
            <Link to='gift3' >dsfgdsf</Link>
            <Link to='gift4' >dsfgdsf</Link> */}

        </div>
    )
}

export default ButtonChrismas