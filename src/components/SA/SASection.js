import React from 'react'
import { Link } from 'react-router-dom';
import { Link as LinkRoll } from 'react-scroll'
import './SASection.css'

import Contact2 from '../contact/Contact2'



const MHSection = () => {
  return (
    <>

            <div className="sa-thumbnail-header container">
                <h1>Santa Monica Detox Offers Various Substance Abuse Programs</h1>
                <p>We treat a multitude of substance use disorders. Whether the client is suffering from an alcohol addiction, prescription drug addiction, we can help. </p>
            </div>
            


<div className='sa-thumbnails-contents'>
    <div className='sa-thumbnails-flex container'>



        <div className='sa-thumbnail'>
            <img src='https://rodeo-recovery-substance-abuse.s3.us-west-1.amazonaws.com/alcoholism.jpg' alt='Alcholism' />
            <h1>Alcohol</h1>
            <div className='thumbnail-btn'>
              <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
                <Link to="/alcohol">
                  <button>Learn More</button>
                </Link>
              </LinkRoll>
            </div>
        </div>



        <div className='sa-thumbnail'>
            <img src='https://rodeo-recovery-substance-abuse.s3.us-west-1.amazonaws.com/cocaine.jpg' alt='Cocaine Addiction'/>
            <h1>Cocaine</h1>
            <div className='thumbnail-btn'>
              <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
                <Link to="/cocaine">
                  <button>Learn More</button>
                </Link>
              </LinkRoll>
            </div>
        </div>


        <div className='sa-thumbnail'>
            <img src='https://rodeo-recovery-substance-abuse.s3.us-west-1.amazonaws.com/fentanyl.jpg' alt='Fentanyl Addiction'/>
            <h1>Fentanyl</h1>
            <div className='thumbnail-btn'>
              <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
                <Link to="/fentanyl">
                  <button>Learn More</button>
                </Link>
              </LinkRoll>
            </div>
        </div>


        <div className='sa-thumbnail'>
            <img src='https://rodeo-recovery-substance-abuse.s3.us-west-1.amazonaws.com/heroin.jpg' alt='Heroin Addiction'/>
            <h1>Heroin</h1>
            <div className='thumbnail-btn'>
              <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
                <Link to="/heroin">
                  <button>Learn More</button>
                </Link>
              </LinkRoll>
            </div>
        </div>


        <div className='sa-thumbnail'>
            <img src='https://rodeo-recovery-substance-abuse.s3.us-west-1.amazonaws.com/kratom.jpg' alt='Kratom Addiction'/>
            <h1>Kratom</h1>
            <div className='thumbnail-btn'>
              <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
                <Link to="/kratom">
                  <button>Learn More</button>
                </Link>
              </LinkRoll>
            </div>
        </div>


        <div className='sa-thumbnail'>
            <img src='https://rodeo-recovery-substance-abuse.s3.us-west-1.amazonaws.com/mdma.jpg' alt='MDMA Addiction'/>
            <h1>MDMA</h1>
            <div className='thumbnail-btn'>
              <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
                <Link to="/mdma">
                  <button>Learn More</button>
                </Link>
              </LinkRoll>
            </div>
        </div>


        <div className='sa-thumbnail'>
            <img src='https://rodeo-recovery-substance-abuse.s3.us-west-1.amazonaws.com/meth.jpg' alt='Meth Addiction'/>
            <h1>Meth</h1>
            <div className='thumbnail-btn'>
              <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
                <Link to="/meth">
                  <button>Learn More</button>
                </Link>
              </LinkRoll>
            </div>
        </div>


        <div className='sa-thumbnail'>
            <img src='https://rodeo-recovery-substance-abuse.s3.us-west-1.amazonaws.com/opiate.jpg' alt='Opiate Addiction'/>
            <h1>Opiate</h1>
            <div className='thumbnail-btn'>
              <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
                <Link to="/opiate">
                  <button>Learn More</button>
                </Link>
              </LinkRoll>
            </div>
        </div>


        <div className='sa-thumbnail'>
            <img src='https://rodeo-recovery-substance-abuse.s3.us-west-1.amazonaws.com/opioid.jpg' alt='Opioid Addiction'/>
            <h1>Opioide</h1>
            <div className='thumbnail-btn'>
              <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
                <Link to="/opioid">
                  <button>Learn More</button>
                </Link>
              </LinkRoll>
            </div>
        </div>


        <div className='sa-thumbnail'>
            <img src='https://rodeo-recovery-substance-abuse.s3.us-west-1.amazonaws.com/oxycodone.jpg' alt='Oxycodone Addiction'/>
            <h1>Oxycodone</h1>
            <div className='thumbnail-btn'>
              <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
                <Link to="/oxycodone">
                  <button>Learn More</button>
                </Link>
              </LinkRoll>
            </div>
        </div>


        <div className='sa-thumbnail'>
            <img src='https://rodeo-recovery-substance-abuse.s3.us-west-1.amazonaws.com/prescriptions.jpg' alt='Prescriptions Addiction'/>
            <h1>Prescriptions</h1>
            <div className='thumbnail-btn'>
              <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
                <Link to="/prescriptions">
                  <button>Learn More</button>
                </Link>
              </LinkRoll>
            </div>
        </div>


        <div className='sa-thumbnail'>
            <img src='https://rodeo-recovery-substance-abuse.s3.us-west-1.amazonaws.com/alcoholism.jpg' alt='Xanax Addiction'/>
            <h1>Xanax</h1>
            <div className='thumbnail-btn'>
              <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
                <Link to="/xanax">
                  <button>Learn More</button>
                </Link>
              </LinkRoll>
            </div>
        </div>
    </div>
</div>








<Contact2 />

    </>
  )
}

export default MHSection
