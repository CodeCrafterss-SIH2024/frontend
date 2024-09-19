import React from 'react';
import NewHeader from '../components/NewHeader';
import './PresidentPage.css'; // Make sure this CSS file exists
import PresidentPhotoo from '../img/presiii.jpg';


const PresidentPage = () => {
  const articles = [
    {
      title: 'Efficient Utilization of Resources',
      content: 'Ensure optimum utilization of the country resources, including natural, financial, and human resources, to foster balanced economic growth.',
    },
    {
      title: 'Promotion of Economic Development',
      content: 'Plan and strategize measures to eliminate poverty and unemployment, and improve the overall standard of living.',
    },
    {
      title: 'Balanced Growth',
      content: ' Focus on achieving balanced growth by reducing regional inequalities in terms of wealth and income.',
    },
    {
      title: 'Social Welfare and Justice',
      content: 'Incorporate social welfare into the growth model by aiming for the upliftment of weaker sections of society and promoting social justice.',
    },
    {
      title: 'Modernization',
      content: 'Encourage modernization of the industrial sector, technological progress, and scientific research, which were considered critical for India economic development.',
    },
    {
      title: 'Subsequent Five-Year Plans',
      content: 'Emphasized various sectors such as industry, infrastructure, healthcare, education, and poverty alleviation.',
    },
  ];

  return (
    <div className="president-page">
      <NewHeader />
      <h1 className="page-title mt-[100px]">Establishment of Planning Commission</h1>
      
      <section className="intro-section">
        <img src={PresidentPhotoo} alt="President" className="president-photo" />
        <div className="intro-text">

{/* <section className="intro-section">
        <img src={presidentPhoto} alt="President" className="president-photo" />
        <div className="intro-text"> */}

          <h2>Introduction</h2>
          <p>
          The Planning Commission of India was established on March 15, 1950, by an executive order of the Government of India. It was a non-constitutional and non-statutory body 
          tasked with creating a centralized and systematic approach to economic planning in India.
          <br />
          <br />
           The commission was instrumental in shaping the country’s
           development trajectory post-independence, especially in terms of infrastructure, industrial growth, and modernization.
          </p>
        </div>
      </section>

      <div className="cards-container">
        {articles.map((article, index) => (
          <div key={index} className="card">
            <div className="card-content">
              <h2 className="card-title">{article.title}</h2>
              <p className="card-text">{article.content}</p>
               {/* Read More Button */}
               <button className="read-more-button">Read More</button>
            </div>
          </div>
        ))}
      </div>

            <div className="mod2">
        
         <p>Start Learning</p>

         
      
          </div>  





    </div>
  );
};

export default PresidentPage;