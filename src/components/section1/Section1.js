import React from 'react'
import './Section1.css'
import { Link as LinkRoll } from 'react-scroll'
import { Link } from 'react-router-dom';

import mh1 from '../../assets/mh1.jpg'
import mh2 from '../../assets/PhpSection1.jpg'
import mh3 from '../../assets/PhpSection2.jpg'
import mh4 from '../../assets/home1.webp'
import mh5 from '../../assets/submenu-bg-jobs-min.webp'

const Section1 = () => {
  return (
    <>


<div className='section1'>

    <div className='section1-header container'>
        <h2>Our Substance Abuse Services</h2>
        <h1>We Have Years of Professional Experience in Psychology and Substance Abuse Counseling</h1>
    </div>

<div className='section1-content container'>


<div class="card section1-card" >
    <div >
        <img src={mh2} alt="Conselling Session with a patient" loading="lazy" />
    </div>
    <div class="card-body">
        <h5 class="card-title">Addiction Treatment</h5>
        <p class="card-text">Our dedicated team of experts is committed to offering evidence-based therapies, personalized treatment plans, and a compassionate environment to guide you towards a path of recovery and lasting sobriety.</p>
        <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500} >
        <Link to='/addiction-treatment'>
            <p class="btn btn-dark">Learn More</p>
        </Link>
        </LinkRoll>
    </div>
</div>


<div class="card section1-card" >
    <div >
        <img src={mh1} alt="Conselling Session with a patient" loading="lazy" />
    </div>
    <div class="card-body">
        <h5 class="card-title">Detox Programs</h5>
        <p class="card-text">Our tailored detoxification protocols, administered by experienced healthcare professionals, prioritize your comfort and safety while paving the way for a successful transition into comprehensive addiction treatment.</p>
        <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500} >
        <Link to='/detox'>
            <p class="btn btn-dark">Learn More</p>
        </Link>
        </LinkRoll>
    </div>
</div>


<div class="card section1-card" >
    <div >
        <img src={mh3} alt="Conselling Session with a patient" loading="lazy" />
    </div>
    <div class="card-body">
        <h5 class="card-title">Substance Abuse</h5>
        <p class="card-text">Our multidisciplinary approach combines therapy, counseling, and support groups to provide individuals with the tools and resources they need to achieve lasting recovery and reclaim their lives.</p>
        <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500} >
        <Link to='/substance-abuse'>
            <p class="btn btn-dark">Learn More</p>
        </Link>
        </LinkRoll>
    </div>
</div>

<div class="card section1-card" >
    <div >
        <img src={mh4} alt="Conselling Session with a patient" loading="lazy" />
    </div>
    <div class="card-body">
        <h5 class="card-title">Sober Living</h5>
        <p class="card-text">Here, we provide a supportive and structured environment for individuals seeking to maintain their newfound sobriety, fostering a community of like-minded individuals committed to building fulfilling, substance-free lives.</p>
        <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500} >
        <Link to='/residence'>
            <p class="btn btn-dark">Learn More</p>
        </Link>
        </LinkRoll>
    </div>
</div>


<div class="card section1-card" >
    <div >
        <img src={mh5} alt="Conselling Session with a patient" loading="lazy" />
    </div>
    <div class="card-body">
        <h5 class="card-title">Jobs Program</h5>
        <p class="card-text">Through tailored training, job placement assistance, and ongoing support, we aim to equip our clients with the tools they need to build stable, fulfilling careers on their path to lasting recovery.</p>
        <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500} >
        <Link to='/jobs'>
            <p class="btn btn-dark">Learn More</p>
        </Link>
        </LinkRoll>
    </div>
</div>


</div>

</div>

    </>
  )
}

export default Section1



