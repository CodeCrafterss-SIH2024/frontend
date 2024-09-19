// src/pages/MainPage.js
import React from 'react';
import { Link } from 'react-router-dom';
import NewHeader from '../components/NewHeader';
import Parliament from '../img/parliament-pic.png';
import mehel from '../img/mehel.png'
import Boy from '../img/boy-pic.png';
import './MainPage.css';

const MainPage = () => {
  return (
    <div>
      <NewHeader/>
      <div className='body'>
        <img src={Parliament} className='parliament' alt="Parliament" />

        <Link to="/DPSP" className='boy1'>
          <img src={Boy} alt="Legislature" />
          <h3 className='h3'>Legislature</h3>
        </Link>

        <Link to="/executive" className='boy2'>
          <img src={Boy} alt="Executive" />
          <h3 className='h3'>Executive</h3>
        </Link>

        <Link to="/judiciary" className='boy3'>
          <img src={Boy} alt="Judiciary" />
          <h3 className='h3'>Judiciary</h3>
        </Link>
      </div>
    </div>
  )
}

export default MainPage;
