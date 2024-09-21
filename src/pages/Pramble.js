import React from 'react';
import NewHeader from '../components/NewHeader';
import Cards from '../components/Cards';
import './Preamble.css';
import logo from '../img/preamblemain.jpg'
import { Link } from 'react-router-dom';
import image1 from '../img/legalbinding.jpg';
import image2 from '../img/aspirant.jpg';
import image0 from '../img/purpose.webp';
import image5 from '../img/exception.png';

function Pramble() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#43345d]">
      {/* Header at the top */}
      <NewHeader />

      <div className="mt-[130px] w-full text-center text-3xl bg-yellow-400">
         <p>Understanding Preambles</p>
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
    <h1 className=' text-black  '>What is  Preamble ???</h1>
    <div className='h-[2px] w-[400px] bg-black'></div>
      <h2 className="text-2xl font-bold mb-4"></h2>
      <p className="text-lg text-gray-700">
      A preamble is an introductory statement or opening to a document, speech, or legal text that explains its purpose, principles, and philosophy.
<br/><br/>
&#x25CF; Preambles are often found in constitutions or laws. They explain the reasons and guiding principles behind the law, but they are not legally enforceable themselves.
<br/>
&#x25CF;The Preamble to the Constitution of India outlines the fundamental purposes and guiding principles of the document. It introduces the ideals of justice, liberty, equality, and fraternity.
<br/>


      </p>
    </div>
    
   
  </div>
    </div>
      {/* heheheheheheheh */}


      <div className="mod2">
        
         <p>KEY FEATURE</p>
      
      </div>
      
      {/* Cards below the header */}
      <div className="flex justify-evenly gap-8 items-center relative top-16">
      <Link to='/president'>
        <Cards 
          imageSrc={image0}
          title="Introduction to a Document's Purpose and Principles"
          description="A preamble serves as an introductory statement that outlines the purpose, objectives, and underlying principles of the document it precedes. It provides a context for understanding the goals and intentions behind the main content that follows."
        />
        </Link>
        <Cards 
          imageSrc={image1}
          title="Non-Legally Binding"
          description="In legal documents such as constitutions or contracts, the preamble is not legally enforceable. However, it helps in interpreting the intent of the law or agreement, guiding how the content should be understood or applied in practice.
"
        />
        <Cards 
          imageSrc={image2}
          title="Sets Ideals and Aspirations"
          description="Preambles often outline ideals, values, or aspirations—such as justice, equality, or liberty in the case of constitutions. These ideals represent what the creators of the document aim to achieve and serve as a guiding framework for the content that follows."
        />
        <Cards 
          imageSrc={image5}
          title="Clarifies Roles and Expectations"
          description="While it doesn't assign specific duties, a preamble can help define the expectations and responsibilities of the parties involved. For instance, in a constitution, it implies the government's role in upholding principles like equality and justice, and citizens' roles in promoting unity and integrity.
"
        />
      </div>
    </div>
  );
}

export default Pramble;
