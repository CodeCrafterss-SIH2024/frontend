import React from 'react';
import NewHeader from '../components/NewHeader';
import imagelig from '../img/Frontloader.jpg'
function LegislaturePage () {
  return (

<div>
    <NewHeader/>
 
    <div className="bg-[#d4cae8] min-h-screen text-[#333] mt-[70px] ">
      <header className="bg-[#604597] text-white py-3 text-center shadow-md">
        <h1 className="text-5xl font-extrabold py-12 ">The Legislature</h1>
      </header>

      <section className="content flex flex-col items-center py-8 px-4 max-w-screen-lg mx-auto">
        <div className="description text-left bg-white p-5 rounded-md shadow-md mb-5 w-full">
          <p className="mb-4">
            The Legislature is a fundamental pillar of democracy in India. It is the branch of government responsible for enacting laws, scrutinizing the actions of the executive, and representing the will of the people. The Indian Parliament is bicameral, comprising the Lok Sabha (House of the People) and the Rajya Sabha (Council of States).
          </p>
          <p className="mb-4">
            The Lok Sabha is the lower house, where members are directly elected by the people of India. It plays a critical role in shaping national policy and passing legislation. The Rajya Sabha, on the other hand, is the upper house, with members representing the states and union territories. This house acts as a revising chamber and provides checks and balances to the decisions of the Lok Sabha.
          </p>
          <p>
            Together, these two houses work in harmony to ensure that the laws of the land reflect the aspirations and needs of the people. The Legislature also holds the executive branch accountable through questions, debates, and committee reports, ensuring transparency and good governance.
          </p>
        </div>

        <div className="image-container flex justify-center items-center h-[50vh] w-[60vw] bg-white rounded-md shadow-md mb-5 overflow-hidden">
          <img
            src={imagelig}
            alt="Legislature Image"
            className="max-w-[150%] max-h-full object-contain"
          />
        </div>

        <div className="articles text-center bg-white p-5 rounded-md shadow-md w-full">
          <h2 className="underline mb-3 text-[#8B5FE3]">Key Articles and Laws</h2>
          <ul className="list-none p-0">
            <li className="my-2">
              <a href="article_79.html" className="text-[#8B5FE3] font-bold hover:text-[#673ab7] hover:underline">
                Article 79 - Constitution of Parliament
              </a>
            </li>
            <li className="my-2">
              <a href="article_80.html" className="text-[#8B5FE3] font-bold hover:text-[#673ab7] hover:underline">
                Article 80 - Composition of Rajya Sabha
              </a>
            </li>
            <li className="my-2">
              <a href="article_81.html" className="text-[#8B5FE3] font-bold hover:text-[#673ab7] hover:underline">
                Article 81 - Composition of Lok Sabha
              </a>
            </li>
            <li className="my-2">
              <a href="article_102.html" className="text-[#8B5FE3] font-bold hover:text-[#673ab7] hover:underline">
                Article 102 - Disqualifications for Membership
              </a>
            </li>
            <li className="my-2">
              <a href="laws.html" className="text-[#8B5FE3] font-bold hover:text-[#673ab7] hover:underline">
                Representation of the People Act, 1951
              </a>
            </li>
          </ul>
          <div className="learn-more bg-[#673ab7] text-white py-2 px-4 rounded-md hover:bg-[#896cbc] mt-5 inline-block">
            Learn More
          </div>
        </div>
      </section>
    </div>


</div>
  )
}

export default LegislaturePage 
