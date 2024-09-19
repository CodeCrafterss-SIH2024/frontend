import React from 'react'
import fourpill from '../img/fourpills.jpg'
import NewHeader from './NewHeader'
import fourpill2 from '../img/fourpill2.jpg'
import { Link } from 'react-router-dom'

function Secondmain() {
  return (
    <div
    className="flex items-center justify-center h-screen bg-gray-100 bg-cover bg-no-repeat bg-top"
    style={{ backgroundImage: `url(${fourpill2})` }}
  >
    <NewHeader/>
      
    <div className="flex justify-between w-full p-4">
      {/* First Button */}
      <Link to="/fund_rights">
        <button className=" text-white w-[200px] h-full   px-[150px] py-[300px] rounded">
          
        </button>
      </Link>

      {/* Second Button */}
      <Link to="/preamble">
        <button className=" text-white px-4 py-2 rounded w-[200px] h-full   px-[150px] py-[300px]">
          
        </button>
      </Link>

      {/* Third Button */}
      <Link to="/dpsp">
        <button className=" text-white px-4 py-2 rounded w-[200px] h-full   px-[150px] py-[300px]">
          
        </button>
      </Link>

      {/* Fourth Button */}
      <Link to="/duties">
        <button className=" text-white px-4 py-2 rounded w-[200px] h-full   px-[150px] py-[300px]">
          
        </button>
      </Link>
    </div>
   

  </div>
  

  
  
  )
}

export default Secondmain