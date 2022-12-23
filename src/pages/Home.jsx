import React, { useEffect, useState } from 'react'
import Slider from '../components/Slider/Slider'
import Introduce from '../components/Introduce/Introduce'
import LoadingPage from '../components/LoadingPage/LoadingPage'
import ButtonChrismas from '../components/ButtonChrismas/ButtonChrismas'
import { motion } from "framer-motion"



const Home = () => {
    const [show, setShow] = useState(true);
    useEffect(() => {
        setTimeout(() => {
            setShow(false);
        }, 23500);
    }, []);

    return (
        <div style={{ position: 'relative', overflow: 'hidden' }}>
            <motion.div
                initial={{ position: "relative", opacity: 1, y: 0 }}
                whileInView={{
                    opacity: 0,
                    y: 1000,
                    transition: {
                        duration: 3,
                        type: "spring",
                        delay: 20.5
                    }
                }}
                viewport={{ once: true }}
            >
                {show && <LoadingPage />}
            </motion.div>
            <ButtonChrismas />
        </div>
    )
}

export default Home