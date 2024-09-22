import React from 'react'
import NewHeader from '../components/NewHeader';
import eqa from '../img/equality2.png'
import './RTequality.css'
import { Link } from 'react-router-dom';

function RTequalitys() {

    
        const articles = [
          {
            title: 'Article 14',
            content: 'Guarantees equality before the law and equal protection of the laws, ensuring no person is above the law.',
          },
          {
            title: 'Article 15',
            content: 'Prohibits discrimination on grounds of religion, race, caste, sex, or place of birth, while allowing special provisions for socially and educationally backward classes.'
          },
          {
            title: 'Article 16',
            content: 'Ensures equality of opportunity in matters of public employment, barring discrimination but allowing reservations for underprivileged groups. ',
          },
          {
            title: 'Article 17',
            content: 'Abolishes untouchability and forbids its practice in any form, promoting social justice and dignity for all.',
          },
          {
            title: 'Article 18',
            content: 'Abolishes the conferment of titles, except for military and academic honors, to ensure equality among citizens.',
          },
        ];

  return (
    <div className="president-page">
      <NewHeader />
      <h1 className=" text-3xl text-black mt-[80px]  text-5xl mb-[20px]">Right To Equality</h1>
      
      <section className="intro-section ">
        <div>
        <img src={eqa} alt="President" className="president-photo ml-[-20px]" />
        </div>
       
        <div className="intro-text ">


          <h2 className='font-semibold'>Introduction</h2>
          <p>
          The Right to Equality is a fundamental right enshrined in the Constitution of India under Articles 14 to 18. It guarantees that every citizen is treated equally before the law and prohibits any discrimination on the basis of religion, race, caste, sex, or place of birth. It ensures equal opportunities in public employment, the abolition of untouchability, and the elimination of titles that promote inequality. 
          <br />
          <br />
          The aim is to create a society where all individuals have the same legal status and access to justice, fostering fairness and social justice.
          </p>
        </div>
      </section>

      <div className="cards-container">
        {articles.map((article, index) => (
          <div key={index} className="card">
            <div className="card-content">
              <h2 className="card-title">{article.title}</h2>
              <p className="card-text">{article.content}</p>
               <button className="read-more-button">Read More</button>
            </div>
          </div>
        ))}
      </div>

            <div className="mod2">
        
         <p>Learn in an Interactive Manner</p>

         
      
          </div>  
         <div className="interactive">
         <Link className='kard' to='/kwiz'>
          <div> Quizes </div>
            </Link>
         
          <div className="kard">Stories</div>
          <div className="kard">Case Study</div>
         </div>
    </div>
  )
}




export default RTequalitys

