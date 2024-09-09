import React from 'react';
import NewHeader from '../components/NewHeader';


import './PresidentPage.css'; // Make sure this CSS file exists
import PresidentPhotoo from '../img/presiii.jpg';


const PresidentPage = () => {
  const articles = [
    {
      title: 'Article 52',
      content: 'Establishes the position of the President as the head of the state in India.',
    },
    {
      title: 'Article 53',
      content: 'Vests all executive power of the Union in the President, exercised according to the Constitution.',
    },
    {
      title: 'Article 54',
      content: 'Describes the election process of the President through an Electoral College.',
    },
    {
      title: 'Article 56',
      content: 'Defines the term of office for the President as five years, with conditions for resignation and removal.',
    },
    {
      title: 'Article 61',
      content: 'Outlines the procedure for impeachment of the President for constitutional violations.',
    },
    {
      title: 'Article 75',
      content: 'Empowers the President to appoint the Prime Minister and Council of Ministers.',
    },
  ];

  return (
    <div className="president-page">
      <NewHeader />
      <h1 className="page-title mt-[100px]">Understanding the Role of the President of India</h1>
      
      <section className="intro-section">
        <img src={PresidentPhotoo} alt="President" className="president-photo" />
        <div className="intro-text">

{/* <section className="intro-section">
        <img src={presidentPhoto} alt="President" className="president-photo" />
        <div className="intro-text"> */}

          <h2>Introduction</h2>
          <p>
            The President of India is the ceremonial head of the state and the highest constitutional authority. This role encompasses various responsibilities including the appointment of the Prime Minister and other key officials, as well as the execution of executive powers according to the Constitution.
           <br/><br/> The Indian President is the head of the state. He is the first citizen of India and is a symbol of solidarity, unity, and integrity of the nation. He is a part of Union Executive along with the Vice-President, Prime Minister, Council of Ministers, and Attorney-General of India.
            
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