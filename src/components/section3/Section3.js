import React from 'react'
import './Section3.css'
import Fade from 'react-reveal/Fade';
import { Link as LinkRoll } from 'react-scroll'
import { Link } from 'react-router-dom';

const Section3 = () => {
  return (
    <>
      <div className='wrap'>

<div className="wrap-container">
    <Fade right>
        <div className="wrap-content">
            <p>
            <h1>A healthier choice for a healthier you. </h1>
            </p><br />
            <p>

            We have staff on site 24 hours a day to monitor and help you through this difficult process. To learn more about treatment, contact us today.
            </p>
            </div>

            <div className='wrap-btn'>
                    <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
                        <Link to="/contact">
                            <button>CONTACT US</button>
                        </Link>
                    </LinkRoll>
                </div>

    </Fade>
    </div>

</div>
    </>
  )
}

export default Section3
