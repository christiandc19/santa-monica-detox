import React from 'react'
import { Link } from 'react-router-dom';
import Fade from 'react-reveal/Fade';
import './Hero.css'

const Hero = () => {
    return (
<>        
        <div className='hero'>
            <div className="hero-container">

                <div className="content">
                        <Fade left>
                        <h1>WELCOME TO SANTA MONICA DETOX</h1>
                        </Fade>
                        <Fade right>
                        <h2>Support. Recovery. Journey.</h2>
                        </Fade>
                        <Fade bottom >
                        <h3>Top Quality Detox Center in Los Angeles, California</h3>
                        </Fade>
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