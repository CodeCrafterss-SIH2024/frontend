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

        <div className='boy1'>
            <img src={Boy} />
            <h3>Legislature</h3>
        </div>

        <div className='boy2'>
            <img src={Boy} />
            <h3>Executive</h3>
        </div>

        <div className='boy3'>
            <img src={Boy} />
            <h3>Judiciary</h3>
        </div>

      </div>
      
    </div>
  )
}

export default MainPage
