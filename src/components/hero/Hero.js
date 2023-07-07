import React from 'react'
import { Link } from 'react-router-dom';
import Fade from 'react-reveal/Fade';
import './Hero.css'

import BgVideo from '../../assets/bg-video1.mp4'


const Hero = () => {
    return (
<>        

        <div className='hero'>
            <video src={BgVideo} autoPlay muted loop playsInline className='video-bg' />



            <div className="hero-container">

                <div className="content">
                    <Fade left>
                        <p> WELCOME TO</p>
                    </Fade>
                    <Fade right>
                        <h1> Santa Monica <br/>Detox</h1>
                    </Fade>
                    <Fade left>
                        <h2>The first step to a healthier you starts here!</h2>
                    </Fade>
                        <br />
                        <div className='hero-btn'>
                        <Link to="/contact">
                            <button>Contact Us</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>


</>

    )
}

export default Hero