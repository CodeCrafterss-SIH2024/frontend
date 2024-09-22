import React, { useState } from "react";
import './fduties.css'
import NewHeader from "../components/NewHeader";

const dutiesTranslations = {
  english: [
    "To abide by the Constitution and respect its ideals and institutions, the National Flag, and the National Anthem.",
    "To cherish and follow the noble ideals that inspired the national struggle for freedom.",
    "To uphold and protect the sovereignty, unity, and integrity of India.",
    "To defend the country and render national service when called upon to do so.",
    "To promote harmony and the spirit of common brotherhood amongst all the people of India, transcending religious, linguistic, and regional diversities; to renounce practices derogatory to the dignity of women.",
    "To value and preserve the rich heritage of the country’s composite culture.",
    "To protect and improve the natural environment including forests, lakes, rivers, and wildlife, and to have compassion for living creatures.",
    "To develop the scientific temper, humanism, and the spirit of inquiry and reform.",
    "To safeguard public property and abjure violence.",
    "To strive towards excellence in all spheres of individual and collective activity so that the nation constantly rises to higher levels of endeavor and achievement.",
    "To provide opportunities for education to children between the ages of 6 and 14 years."
  ],
  hindi: [
    "संविधान का पालन करना और उसके आदर्शों, संस्थाओं, राष्ट्रीय ध्वज और राष्ट्रगान का सम्मान करना।",
    "स्वतंत्रता संग्राम से प्रेरित आदर्शों का पालन करना।",
    "भारत की संप्रभुता, एकता और अखंडता की रक्षा करना।",
    "देश की रक्षा करना और जब बुलाया जाए तो राष्ट्रीय सेवा प्रदान करना।",
    "भारत के सभी लोगों के बीच भाईचारे की भावना को बढ़ावा देना और महिलाओं की गरिमा को ठेस पहुंचाने वाले आचरण को त्यागना।",
    "देश की समग्र संस्कृति की समृद्ध विरासत का मूल्यांकन और संरक्षण करना।",
    "प्राकृतिक पर्यावरण की सुरक्षा करना और वन्यजीवों की रक्षा करना।",
    "वैज्ञानिक दृष्टिकोण, मानवता और सुधार की भावना का विकास करना।",
    "सार्वजनिक संपत्ति की रक्षा करना और हिंसा से बचना।",
    "व्यक्तिगत और सामूहिक गतिविधियों में उत्कृष्टता की ओर प्रयास करना।",
    "6 से 14 वर्ष की आयु के बच्चों के लिए शिक्षा के अवसर प्रदान करना।"
  ]
};

const dutyDescriptions = [
  "This duty requires all citizens to respect national symbols like the National Flag and National Anthem.",
  "Inspired by freedom fighters, citizens must follow the ideals that drove the independence movement.",
  "This duty emphasizes the need to protect India’s sovereignty, unity, and integrity.",
  "Every citizen is required to defend the country, if necessary, through national service.",
  "This duty asks citizens to promote harmony and reject any practices that harm the dignity of women.",
  "India’s cultural heritage is diverse and must be valued and preserved by every citizen.",
  "Citizens must work towards protecting the environment and be compassionate towards living creatures.",
  "Encourages the development of scientific thinking, humanism, and a spirit of reform among citizens.",
  "Citizens are required to safeguard public property and avoid engaging in violence.",
  "All citizens should strive for excellence in their fields to uplift the nation.",
  "Citizens must ensure that children receive proper education between the ages of 6 and 14 years."
];

const quizData = [
  {
    question: "Which Fundamental Duty asks citizens to defend the country?",
    options: ["Duty 4", "Duty 5", "Duty 1", "Duty 7"],
    correct: "Duty 4"
  },
  {
    question: "Which Fundamental Duty focuses on preserving the environment?",
    options: ["Duty 9", "Duty 7", "Duty 6", "Duty 10"],
    correct: "Duty 7"
  }
];

const Fduties = () => {
  const [language, setLanguage] = useState("english");
  const [modalDutyIndex, setModalDutyIndex] = useState(null);
  const [quizIndex, setQuizIndex] = useState(0);
  const [userAnswer, setUserAnswer] = useState(null);
  const [quizFeedback, setQuizFeedback] = useState("");

  const handlePrint = () => {
    window.print();
  };

  const handleQuizAnswer = () => {
    if (userAnswer === quizData[quizIndex].correct) {
      setQuizFeedback("Correct!");
    } else {
      setQuizFeedback("Wrong. Try again!");
    }
    setQuizIndex(quizIndex + 1);
    setUserAnswer(null);
  };

  const currentQuiz = quizData[quizIndex];

  return (
    <>
        <NewHeader/>
   
    <div className="app-container mt-[550px]">
    
      <h1 className="app-title text-5xl">Fundamental Duties of the Indian Constitution</h1>
      <p className="app-description">
        Article 51A of the Constitution of India lays down the following
        Fundamental Duties for citizens:
      </p>

      <div className="header-tools">
        <select
          className="language-select"
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
        >
          <option value="english">English</option>
          <option value="hindi">Hindi</option>
        </select>
        <button className="print-button" onClick={handlePrint}>
          Print This Page
        </button>
      </div>

      <ul className="duties-list">
        {dutiesTranslations[language].map((duty, index) => (
          <li
            key={index}
            className="duty-item"
            onClick={() => setModalDutyIndex(index)}
          >
            {duty}
          </li>
        ))}
      </ul>

      {modalDutyIndex !== null && (
        <div className="modal" onClick={() => setModalDutyIndex(null)}>
          <div className="modal-content">
            <span className="modal-close" onClick={() => setModalDutyIndex(null)}>
              &times;
            </span>
            <h2 className="modal-title">Fundamental Duty {modalDutyIndex + 1}</h2>
            <p className="modal-description">{dutyDescriptions[modalDutyIndex]}</p>
          </div>
        </div>
      )}

      {quizIndex < quizData.length && (
        <div className="quiz-section">
          <h3 className="quiz-title">Quick Quiz</h3>
          <div className="quiz-question">{currentQuiz.question}</div>
          <div className="quiz-options">
            {currentQuiz.options.map((option, index) => (
              <button
                key={index}
                onClick={() => setUserAnswer(option)}
                className={`quiz-option ${userAnswer === option ? "selected" : ""}`}
              >
                {option}
              </button>
            ))}
          </div>
          <button className="submit-answer-button" onClick={handleQuizAnswer}>
            Submit
          </button>
          <p className="quiz-feedback">{quizFeedback}</p>
        </div>
      )}
      {quizIndex >= quizData.length && <p className="quiz-completion-message">You've completed the quiz!</p>}
    </div>
    </>
  );
};

export default Fduties;
