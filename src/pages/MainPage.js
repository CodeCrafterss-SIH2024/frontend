import React from 'react';
import NewHeader from '../components/NewHeader';
import Parliament from '../img/parliament-pic.png';
import Boy from '../img/boy-pic.png';
import './MainPage.css';

const MainPage = () => {
  return (
    <div>
      <NewHeader/>
      {/* <h1 className='mt-[100px]'>this is my main page</h1> */}
      <div className='body'>
        <img src={Parliament} className='parliament'/>
        <img src={Boy} className='boy1'/>
        <img src={Boy} className='boy2'/>
        <img src={Boy} className='boy3'/>  
      </div>
      
    </div>
  )
}

export default MainPage
