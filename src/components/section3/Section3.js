import React from 'react'
import './Section3.css'
import Fade from 'react-reveal/Fade';
// import { Link as LinkRoll } from 'react-scroll'
// import { Link } from 'react-router-dom';
import Section3img from '../../assets/section3-img.jpg'
import { AiFillCheckCircle } from 'react-icons/ai';

const Section3 = () => {
  return (
    <>
      <div className='section3'>

<Fade left>
<div className='section3-left'>
    <img src={Section3img} alt="Conselling Session with a patient" loading="lazy" />
</div>
</Fade>

<Fade right>
<div className='section3-right'>
    <h3>GET TO KNOW US</h3>
    <h2>Support. Recovery. Journey</h2>
    <br/>
    <p>We seek to provide the highest quality care for any addiction situation to create long-term sobriety in a safe and effective environment built on love, acceptance, and tolerance. We work every day to create addict programming that gives you the time and tools needed to live a sober life today, and then vigorously push you to fulfill your dreams tomorrow.</p>
    <ul> 
                    <li>
                        <AiFillCheckCircle className='check'/> Therapy and support groups for either addiction or mental health disorders.
                    </li>
                    <li>
                        <AiFillCheckCircle className='check'/> Compassionate staff that is dedicated to your success.
                    </li>
                    <li>
                        <AiFillCheckCircle className='check'/> SEvidence-based practices that give you the best chance of recovery.
                    </li>                    
                    <li>
                        <AiFillCheckCircle className='check'/> Employment tools and resources to get you hired.
                    </li>
            </ul>

</div>
</Fade>

</div>

    </>
  )
}

export default Section3
