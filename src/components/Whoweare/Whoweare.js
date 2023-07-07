import React from 'react'
import './Whoweare.css'
import Fade from 'react-reveal/Fade';


import Whoweare1 from '../../assets/slider1.jpg'



const Whoweare = () => {
  return (
<>


<div className='wwa'>

    <Fade left>
    <div className='left'>
        <img src={Whoweare1} alt="Conselling Session with a patient" loading="lazy" />
    </div>
    </Fade>

    <Fade right>
    <div className='right'>
        <h3>WELCOME TO SANTA MONICA DETOX</h3>
        <h2>Top Quality Detox Center in Santa Monica</h2>
        <br/>
        <p>To ensure that those who attend our rehab facility receive tailored care to meet their individual needs, we conduct a series of evaluations before you begin treatment at our drug and alcohol detox center. <br/> <br/> These evaluations allow us to understand your active addictions, history of substance abuse, mental health disorders, co-occurring disorders, prior drug and alcohol treatment, and how our detox center can help you overcome your substance use disorder.</p>
    </div>
    </Fade>

</div>

</>
  )
}

export default Whoweare