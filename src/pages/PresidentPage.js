import React from 'react';
import NewHeader from '../components/NewHeader';
// import '../styles/PresidentPage.css'; // Make sure this CSS file exists

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
      <h1 className="page-title">Understanding the Role of the President of India</h1>
      <div className="cards-container">
        {articles.map((article, index) => (
          <div key={index} className="card">
            <div className="card-content">
              <h2 className="card-title">{article.title}</h2>
              <p className="card-text">{article.content}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PresidentPage;




// import React from 'react'
// import NewHeader from '../components/NewHeader'


// function Vicepresident() {
//   return (
    
//       <div className="flex flex-col items-center justify-center min-h-screen bg-[#43345d]">
//       {/* Header at the top */}
//       <NewHeader />
//       this is vice President
//     </div>
//   )
// }

// export default Vicepresident




