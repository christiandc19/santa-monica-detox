import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import {BrowserRouter, Routes, Route} from 'react-router-dom'

import ProgramsPage from './routes/ProgramsPage'
import MissionPage from './routes/MissionPage'
import AboutPage from './routes/AboutPage'
import ResidencePage from './routes/ResidencePage'
import InsurancePage from './routes/InsurancePage'
import ContactPage from './routes/ContactPage'

import COCAINE from './routes/COCAINE';
import ALCOHOL from './routes/ALCOHOL';
import FENTANYL from './routes/FENTANYL';
import HEROIN from './routes/HEROIN';
import KRATOM from './routes/KRATOM';
import MDMA from './routes/MDMA';
import METH from './routes/METH';
import OPIATE from './routes/OPIATE';
import OPIOID from './routes/OPIOID';
import OXYCODONE from './routes/OXYCODONE';
import PRESCRIPTIONS from './routes/PRESCRIPTIONS';
import XANAX from './routes/XANAX';



import SA from './routes/SA';


import Jobs from './routes/JOBS';
import Team from './routes/Team';


ReactDOM.render(
  <BrowserRouter basename={window.location.pathname || ''} >
    <Routes>
      <Route exact path='/' element={<App />} />
      <Route exact path='/alcohol' element={<ALCOHOL />} />
      <Route exact path='/cocaine' element={<COCAINE />} />
      <Route exact path='/fentanyl' element={<FENTANYL />} />
      <Route exact path='/heroin' element={<HEROIN />} />
      <Route exact path='/kratom' element={<KRATOM />} />
      <Route exact path='/mdma' element={<MDMA />} />
      <Route exact path='/meth' element={<METH />} />
      <Route exact path='/opiate' element={<OPIATE />} />
      <Route exact path='/opioid' element={<OPIOID />} />
      <Route exact path='/oxycodone' element={<OXYCODONE />} />
      <Route exact path='/prescriptions' element={<PRESCRIPTIONS />} />
      <Route exact path='/xanax' element={<XANAX />} />

      <Route exact path='/substance-abuse' element={<SA />} />

      <Route exact path='/jobs' element={<Jobs />} />
      <Route exact path='/programs' element={<ProgramsPage />} />
      <Route exact path='/mission' element={<MissionPage />} />

      <Route exact path='/about-us' element={<AboutPage />} />
      <Route exact path='/team' element={<Team />} />

      <Route exact path='/residence' element={<ResidencePage />} />
      <Route exact path='/insurance' element={<InsurancePage />} />
      <Route exact path='/contact' element={<ContactPage />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);
