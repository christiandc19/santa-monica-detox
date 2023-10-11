import React from 'react'
import ContactForm from '../contact/ContactForm'
import Fade from 'react-reveal/Fade';

import './ResidenceSection.css'


import Home1 from '../../assets/home1.webp'
import Home2 from '../../assets/home2.webp'
import Home3 from '../../assets/home3.webp'
import Home4 from '../../assets/home4.webp'
import Home5 from '../../assets/home5.webp'
import Home6 from '../../assets/home6.webp'
import Home7 from '../../assets/home7.webp'
import Home8 from '../../assets/home8.webp'
import Home9 from '../../assets/home9.webp'
import Home10 from '../../assets/home10.webp'




const ResidenceSection = () => {
  return (
<>
<div className="residence-section-header container">
                <h1>OUR HOMES</h1><br/>
                <p>Transitional sober housing focused on healing and long-term recovery
                </p>
</div>




<div className='residence-section-flex container'>
                    <Fade left>
                    <div className='residence-section-flex-item'>
                        <img src={ Home1 } alt="Home" loading="lazy"/>
                    </div>
                    </Fade>


                    <Fade right>
                    <div className='residence-section-flex-item'>
                    <img src={ Home2 } alt="Home" loading="lazy"/>
                    </div>
                    </Fade>

                    <Fade left>
                    <div className='residence-section-flex-item'>
                    <img src={ Home3 } alt="Home" loading="lazy"/>
                    </div>
                    </Fade>

                    <Fade right>
                    <div className='residence-section-flex-item'>
                    <img src={ Home4 } alt="Home" loading="lazy"/>
                    </div>
                    </Fade>                 

                    <Fade left>
                    <div className='residence-section-flex-item'>
                    <img src={ Home5 } alt="Home" loading="lazy"/>
                    </div>

                    </Fade>                          
                    <Fade right>
                    <div className='residence-section-flex-item'>
                    <img src={ Home6 } alt="Home" loading="lazy"/>
                    </div>
                    </Fade>                          

                    <Fade left>
                    <div className='residence-section-flex-item'>
                    <img src={ Home7 } alt="Home" loading="lazy"/>
                    </div>
                    </Fade>   

                    <Fade right>
                    <div className='residence-section-flex-item'>
                    <img src={ Home8 } alt="PHome" loading="lazy"/>
                    </div>
                    </Fade>  

                    <Fade right>
                    <div className='residence-section-flex-item'>
                    <img src={ Home9 } alt="PHome" loading="lazy"/>
                    </div>
                    </Fade>  

                    <Fade right>
                    <div className='residence-section-flex-item'>
                    <img src={ Home10 } alt="PHome" loading="lazy"/>
                    </div>
                    </Fade>  

                    </div>


<ContactForm />

    </>
  )
}

export default ResidenceSection
