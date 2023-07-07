import React from 'react'
import './Section2.css'

import { RiNurseLine } from 'react-icons/ri';
import { BsGear } from 'react-icons/bs';
import { BiSupport } from 'react-icons/bi';



const Section2 = () => {
  return (
    <>
      <div className='section2'>
        <div className='content container'>
            <h1>We Have Years Professional Experience in Psychology and Substance Abuse Counseling</h1>
            <p>At Santa Monica Detox, clients receive individual therapy alongside a range of additional treatments, including relapse prevention, trauma therapy, mindfulness meditation, yoga, and more. We offer support that clients need to allow them to gradually go back to treatment.</p>
        </div>
        </div>


        <div className='cards'>
                    <div className='card'>
                        <div className='icon'>
                            <RiNurseLine/> 
                        </div>

                        <div>
                            <h1>DEDICATED STAFF.</h1><br />
                            <p>The medical professionals on our team are completely dedicated to your recovery.</p>
                        </div>
                    </div> 


                    <div className='card'>
                        <div className='icon'>
                            <BsGear/> 
                        </div>

                        <div>
                            <h1>PROVEN METHODS.</h1> <br />
                            <p>Our treatment methods are solely based on proven research and science-based evidence.</p>
                        </div>
                    </div> 

                    <div className='card'>
                        <div className='icon'>
                            <BiSupport/> 
                        </div>

                        <div>
                            <h1>24/7 SUPPORT.</h1><br />
                            <p>Guidance and support are always in reach. We provide care for you whenever needed.</p>
                        </div>
                    </div> 
        </div>
    </>
  )
}

export default Section2
