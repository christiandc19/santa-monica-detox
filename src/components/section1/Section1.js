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
        <h1>We Have Years Professional Experience in Psychology and Substance Abuse Counseling</h1>
    </div>

<div className='section1-content'>



<div class="card section1-card" >
    <div >
        <img src={mh1} alt="Conselling Session with a patient" loading="lazy" />
    </div>
    <div class="card-body">
        <h5 class="card-title">Alcohol</h5>
        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <p class="btn btn-dark">Learn More</p>
    </div>
</div>


<div class="card section1-card" >
    <div >
        <img src={mh2} alt="Conselling Session with a patient" loading="lazy" />
    </div>
    <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <p class="btn btn-dark">Learn More</p>
    </div>
</div>


<div class="card section1-card" >
    <div >
        <img src={mh3} alt="Conselling Session with a patient" loading="lazy" />
    </div>
    <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <p class="btn btn-dark">Learn More</p>
    </div>
</div>

</div>

</div>

    </>
  )
}

export default Section1



