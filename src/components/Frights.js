import React from 'react';
import './fund_rights.css';
import NewHeader from '../components/NewHeader';
import Cards from '../components/Cards';
import { Link } from 'react-router-dom';
import image1 from '../img/fund1.webp';
import image2 from '../img/equality1.png';
import image3 from '../img/educational.png';
import image4 from '../img/exploitation.png';
import image5 from '../img/freedom1.jpg';
import image6 from '../img/freedomOfRel.png';
import image7 from '../img/remedies.png';

export default function Frights() {


  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#43345d]">
      {/* Header at the top */}
      <NewHeader />

      <div className="mt-[100px] w-full text-center text-2xl bg-yellow-400">
         <p>Understanding Fundamental Rights</p>
      </div>



      <div>
     <div className="flex flex-col md:flex-row items-center p-6 bg-[#cfc4e7]">
    {/* Text and Content */}

     {/* Image */}
     <div className="flex-1 p-4">
      <img src={image1} alt="Section Image" className="ml-[50px] w-[600px] h-[400px]  rounded-lg shadow-lg" />
    </div>


    <div className="flex-1 p-4 text-center md:text-left">
    <h1 className=' text-black text-7xl'>What are Fundamental Rights ???</h1>
    <div className='h-[2px] w-[400px] bg-black'></div>
      <h2 className="text-2xl font-bold mb-4"></h2>
      <p className="text-lg text-gray-700">
      Fundamental Rights are the basic human freedoms guaranteed by the Constitution of India to all its citizens. They are essential for the all-around development of individuals and are enforceable by the courts.
<br/><br/>
&#x25CF; These rights are provided to protect individuals against any arbitrary actions by the state. 
<br></br>● Fundamental Rights are enshrined in Part III of the Indian Constitution.
<br></br> ● They include the Right to Equality, Right to Freedom, Right against Exploitation, Right to Freedom of Religion, Cultural and Educational Rights, and Right to Constitutional Remedies.
<br/>
<br/>


      </p>
    </div>
    
   
  </div>
    </div>
      {/* heheheheheheheh */}


      <div className="mod2">
        
         <p>THE FUNDAMENTAL RIGHTS</p>
      
      </div>
      
      {/* Cards below the header */}
      <div className="flex flex-col justify-evenly gap-8 items-center relative top-16">
        <div className="mainBox">

        <Link to='/president'>
        <Cards 
          imageSrc={image2}
          title="Right to Equality"
          description="Ensures equality before the law and prohibits discrimination on the grounds of religion, race, caste, sex, or place of birth."
        />
        </Link>
        <Cards 
          imageSrc={image3}
          title="Cultural and Educational Rights"
          description="Protects the rights of minorities to preserve their culture and establish educational institutions of their choice."
        />
        <Cards 
          imageSrc={image4}
          title="Right against Exploitation"
          description=" Prohibits human trafficking, forced labor, and child labor in hazardous environments."
        />
        <Cards 
          imageSrc={image7}
          title="Right to Constitutional Remedies"
          description="Allows citizens to approach the courts to enforce Fundamental Rights if they are violated.
"
        />
            <Cards 
          imageSrc={image6}
          title="Right to Freedom of Religion"
          description="Grants freedom of conscience and the right to freely profess, practice, and propagate any religion."
        />
            <Cards 
          imageSrc={image5}
          title="Right to Freedom"
          description="Guarantees freedom of speech, expression, assembly, association, movement, and the right to practice any profession or carry out any occupation.

"
        />
          
        </div>
      
      </div>
    </div>
  );
}

