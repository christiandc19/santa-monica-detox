import React from 'react'
import './Section2.css'
import home6 from '../../assets/home6.webp'
import Fade from 'react-reveal/Fade';
import { Link } from 'react-router-dom';
import { Link as LinkRoll } from 'react-scroll'


const Section2 = () => {
  return (
    <>
      <div className='section2'>
        <div className='section2-content container'>
            <h2>Detox Programs</h2>
            <h1>Residential Drug Detox and Rehab Programs</h1>
        </div>

        <div className='section2-flex container'>
            <Fade left>
            <div className='section2-flex-left'>
                <h1>Comfortable, Compassionate Medical Detox</h1>
                <p>Our goal is to make the detox process as safe and comfortable as possible. Medical detoxification, or medical detox, is the first step in recovery from drug or alcohol addiction to safely manage withdrawal symptoms in individuals who have become physically dependent on a substance.</p> 
                <p>Withdrawal from drugs or alcohol can be life-threatening if not properly supervised by professionals. We offer a medically supervised detox that provides individualized treatment and around-the-clock care. Upon intake, clients meet with a physician who conducts a comprehensive evaluation and designs an individualized detoxification protocol using medication-assisted therapy.</p>

                <div className='section2-btn'>
                <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500} >
                <Link to="/detox">
                <button type="button" class="btn btn-outline-primary">Learn More</button>
                </Link>
                </LinkRoll>
                </div>

            </div>
            </Fade>

            <Fade right>
            <div className='section2-flex-right'>
            <img src={home6} alt="Conselling Session with a patient" loading="lazy" />
            </div>
            </Fade>
        </div>
































    </div>


    </>
  )
}

export default Section2
