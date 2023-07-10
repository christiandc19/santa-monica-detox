import React from 'react'
import './Section1.css'
// import { Link as LinkRoll } from 'react-scroll'
// import { Link } from 'react-router-dom';


// import { CiBeerMugFull } from 'react-icons/ci';
// import { GiSyringe } from 'react-icons/gi';
// import { TbPills } from 'react-icons/tb';
// import { TbPrescription } from 'react-icons/tb';

import mh1 from '../../assets/mh1.jpg'
import mh2 from '../../assets/PhpSection1.jpg'
import mh3 from '../../assets/PhpSection2.jpg'

const Section1 = () => {
  return (
    <>


<div className='section1'>

    <div className='section1-header container'>
        <h2>Our Substance Abuse Services</h2>
        <h1>We Have Years of Professional Experience in Psychology and Substance Abuse Counseling</h1>
    </div>

<div className='section1-content'>


<div class="card section1-card" >
    <div >
        <img src={mh2} alt="Conselling Session with a patient" loading="lazy" />
    </div>
    <div class="card-body">
        <h5 class="card-title">Cocaine Addiction</h5>
        <p class="card-text">Cocaine is a highly addictive drug, but it may be hard to recognize an addiction to it. Craving Cocaine and ignoring the consequences that come with it are signs of an addiction.</p>
        <p class="btn btn-dark">Learn More</p>
    </div>
</div>


<div class="card section1-card" >
    <div >
        <img src={mh1} alt="Conselling Session with a patient" loading="lazy" />
    </div>
    <div class="card-body">
        <h5 class="card-title">Alcoholism</h5>
        <p class="card-text">Alcoholism is the inability to control drinking due to both a physical and emotional dependence on alcohol. A chronic disease characterized by uncontrolled drinking and preoccupation with alcohol.</p>
        <p class="btn btn-dark">Learn More</p>
    </div>
</div>


<div class="card section1-card" >
    <div >
        <img src={mh3} alt="Conselling Session with a patient" loading="lazy" />
    </div>
    <div class="card-body">
        <h5 class="card-title">Fentanyl Addiction</h5>
        <p class="card-text">It is a prescription drug that is also made and used illegally. Like morphine, it is a medicine that is typically used to treat patients with severe pain, especially after surgery.</p>
        <p class="btn btn-dark">Learn More</p>
    </div>
</div>

</div>

</div>

    </>
  )
}

export default Section1



