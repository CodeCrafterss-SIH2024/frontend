import React from 'react'
import NewHeader from './NewHeader'
import image1 from '../img/cm.jpeg.jpg'
import Cards from './Cards'
import { Link } from 'react-router-dom'
import '../pages/ExecutivePage.css';
import logo from '../img/dpsp.webp'
import planning from '../img/Planning.webp'
import minimum from '../img/minimum 48.jpg'
import maternity from '../img/maternity.png'
import seven from '../img/7374.jpg'
import criminal from '../img/criminal.webp'
import environment from '../img/environment.webp'

import eighty from '../img/86.webp'
function DPSP() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#43345d]">
    {/* Header at the top */}
    <NewHeader />

    <div className=" mt-[100px] w-full text-center text-2xl bg-[#FFB115] px-2 py-2 border-[20px] rounder border-[#14314e] ">
       <p>Understanding Directive Principles of State Policy </p>
    </div>



    {/* heheheheheheh */}
    <div>
   <div className="flex flex-col md:flex-row items-center p-6 bg-[#cfc4e7]">
  {/* Text and Content */}

   {/* Image */}
   <div className="flex-1 p-4">
    <img src={logo} alt="Section Image" className="ml-[100px] w-[500px] h-[450px]  rounded-lg shadow-lg" />
  </div>


  <div className="flex-1 p-4 text-center md:text-left">
  <h1 className=' text-black text-7xl  '>What is Directive Principles of State Policy???</h1>
  <div className='h-[2px] w-[400px] mt-[30px] bg-black'></div>
    <h2 className="text-2xl font-bold mb-4"></h2>
    <p className="text-lg text-gray-700">
    The Directive Principles of State Policy (DPSP) are guidelines or principles set out in the Constitution of India that are meant to guide the government in making laws and policies. They are outlined in Part IV of the Indian Constitution and are designed to ensure that the government strives to create a just and equitable society. Unlike Fundamental Rights, which are justiciable and enforceable by courts, DPSPs are non-justiciable, meaning they cannot be legally enforced.
<br/><br/>
&#x25CF; <span className=' font-extrabold'>Guiding Principles for Governance:</span> Directive Principles are guidelines for the government to establish a just and equitable society by promoting socio-economic welfare and justice.
<br/>
&#x25CF; <span className=' font-extrabold'>Non-Justiciable Rights:</span> Unlike Fundamental Rights, Directive Principles are not enforceable by courts but serve as essential ideals for policy-making and governance.
<br/>
&#x25CF; <span className=' font-extrabold'>Promote Social Justice:</span> They aim to ensure the government's efforts towards ensuring adequate livelihood, health, education, and economic growth, helping to bridge the gap between different sections of society.
<br/>

    </p>
  </div>
  
 
</div>
  </div>
    {/* heheheheheheheh */}


    <div className="  w-full text-center text-2xl bg-[#FFB115] px-2 py-2 border-[20px] rounder border-[#14314e] ">
       <p>Understanding Executives</p>
    </div>
    
    {/* Cards below the header */}
    <div className="flex flex-wrap ml-[80px] mr-[40px] justify-evenly gap-8 items-start relative top-16">
  <Link to='/planning-commision' className="w-full max-w-xs">
    <Cards 
      imageSrc={planning}
      title="Establishment of Planning Commission"
      description="The Planning Commission, established under Article 38 of the Indian Constitution, was tasked with formulating and overseeing the implementation of national economic plans and development strategies."
    />
  </Link>
  <div className="w-full max-w-xs  ">
  <Link to='/planning-commision' >
    <Cards 
      imageSrc={minimum}
      
      title="Minimum Wages Act, 1948"
      description="The Minimum Wages Act, 1948, enacted under Article 39 of the Indian Constitution, aims to ensure fair wages by fixing minimum wages for workers in certain employment sectors to prevent exploitation."
    />
    </Link>
  </div>
  <div className="w-full max-w-xs  ">
  <Link to='/planning-commision'>
    <Cards 
      imageSrc={maternity}
      title="Maternity Benefits Act, 1961"
      description="The Maternity Benefits Act, 1961, enacted under Article 42 of the Indian Constitution, provides maternity leave and benefits to ensure the health and welfare of female employees during and after childbirth."
    />
    </Link>
  </div>
  <div className="w-full max-w-xs">
  <Link to='/planning-commision'>
    <Cards 
      imageSrc={seven}
      title="73rd and 74th Constitutional Amendments"
      description="The 73rd and 74th Amendments to the Indian Constitution empower the creation of a decentralized system of local governance through the establishment of Panchayati Raj institutions and urban local bodies, enhancing grassroots democracy."
    />
    </Link>
  </div>
  <div className="w-full max-w-xs">
  <Link to='/planning-commision'>
    <Cards 
      imageSrc={criminal}
      title="Criminal Procedure Code, 1973"
      description="The Criminal Procedure Code, 1973, under Article 50, aims to separate the judiciary from the executive to ensure impartiality and independence in the administration of justice."
    />
    
  </Link>
  </div>
  <div className="w-full max-w-xs">
  <Link to='/planning-commision'>
    <Cards 
      imageSrc={environment}
      title="Environment Protection Act, 1986"
      description="The Environment Protection Act, 1986, under Article 48A, provides a legal framework for the preservation and enhancement of the environment and wildlife in India."
    />

</Link>
  </div>
  <div className="w-full max-w-xs">
  <Link to='/planning-commision'>
    <Cards 
      imageSrc={eighty}
      title="86th Constitutional Amendment (2002)"
      description="The 86th Constitutional Amendment (2002) introduced Article 21A, making education a fundamental right for children aged 6 to 14 years, enhancing the existing provisions of Article 45."
    />
    </Link>
  </div>

</div>

  </div>
  )
}

export default DPSP
