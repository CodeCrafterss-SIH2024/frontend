import React from 'react';
import NewHeader from '../components/NewHeader';
import Card from '../components/Card';
import './ExecutivePage.css'

function ExecutivePage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#43345d]">
      {/* Header at the top */}
      <NewHeader />

      <div className='mod-1'>
         <p>Understanding Executives</p>
      </div>
      
      {/* Cards below the header */}
      <div className="container flex justify-around space-x-8 relative mt-12">
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
}

export default ExecutivePage;
