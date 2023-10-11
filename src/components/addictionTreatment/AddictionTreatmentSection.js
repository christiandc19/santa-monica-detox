import React from 'react'
import './AddictionTreatmentSection.css'
import { Link as LinkRoll } from 'react-scroll'
import { Link } from 'react-router-dom';

import mh1 from '../../assets/mat-card.webp'
import mh2 from '../../assets/ita-card.webp'
import mh3 from '../../assets/ddt-card.webp'

const AddictionTreatmentSection = () => {
  return (
    <>


<div className='ATSection'>

    <div className='ATSection-header container'>
        <h2>Our Addiction Treatment Programs</h2>
        <h1>We Have Years of Professional Experience in Psychology and Substance Abuse Counseling</h1>
    </div>

<div className='ATSection-content'>


<div class="card ATSection-card" >
    <div >
        <img src={mh1} alt="Conselling Session with a patient" loading="lazy" />
    </div>
    <div class="card-body">
        <h5 class="card-title">Medication Assisted Treatment</h5>
        <p class="card-text">Medication Assisted Treatment Offers New Hope for Overcoming Addiction. Combining Evidence-Based Medicine with Compassionate Care, MAT Paves the Way to Lasting Sobriety.</p>
        <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500} >
        <Link to='/medication-assisted-treatment'>
            <p class="btn btn-dark">Learn More</p>
        </Link>
        </LinkRoll>
    </div>
</div>


<div class="card ATSection-card" >
    <div >
        <img src={mh2} alt="Conselling Session with a patient" loading="lazy" />
    </div>
    <div class="card-body">
        <h5 class="card-title">Individualized Treatment Alternatives</h5>
        <p class="card-text">Unlocking Personalized Paths to Wellness through Individualized Treatment Alternatives. A New Era of Care that Adapts to Unique Needs, Empowering Patients on Their Journey to Health.</p>
        <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500} >
        <Link to='/individualize-treatment-alternatives'>
            <p class="btn btn-dark">Learn More</p>
        </Link>
        </LinkRoll>
    </div>
</div>


<div class="card ATSection-card" >
    <div >
        <img src={mh3} alt="Conselling Session with a patient" loading="lazy" />
    </div>
    <div class="card-body">
        <h5 class="card-title">Dual Diagnosis Treatment</h5>
        <p class="card-text">Breaking Barriers: Dual Diagnosis Treatment Illuminates a Path to Mental Health and Sobriety. Addressing the Root Causes for Holistic Healing and Lasting Recovery.</p>
        <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500} >
        <Link to='/dual-diagnosis'>
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

export default AddictionTreatmentSection



