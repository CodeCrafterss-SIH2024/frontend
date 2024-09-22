import React, { useState } from 'react';
import './QuizEq.css'; // Import the CSS file
import { Link } from 'react-router-dom';

const QuizComponent = () => {
    const questions = [
        {
            question: "What does the Right to Equality guarantee?",
            options: [
                "Equal access to public places",
                "Unequal treatment for different genders",
                "Freedom of speech",
                "Right to work anywhere in India"
            ],
            correctAnswer: "Equal access to public places",
            feedback: {
                correct: "Correct! The Right to Equality guarantees equal access to public places without discrimination.",
                incorrect: "Incorrect. The Right to Equality specifically guarantees equal access to public places without discrimination."
            }
        },
        {
            question: "Which article of the Indian Constitution addresses the Right to Equality?",
            options: [
                "Article 21",
                "Article 14",
                "Article 19",
                "Article 32"
            ],
            correctAnswer: "Article 14",
            feedback: {
                correct: "Correct! Article 14 of the Indian Constitution guarantees the Right to Equality.",
                incorrect: "Incorrect. The Right to Equality is guaranteed under Article 14 of the Indian Constitution."
            }
        },
        {
            question: "The Right to Equality prohibits discrimination based on which of the following?",
            options: [
                "Caste",
                "Profession",
                "Economic status",
                "Physical appearance"
            ],
            correctAnswer: "Caste",
            feedback: {
                correct: "Correct! The Right to Equality prohibits discrimination based on caste, religion, race, sex, and place of birth.",
                incorrect: "Incorrect. The Right to Equality prohibits discrimination primarily based on caste, religion, race, sex, and place of birth."
            }
        },
        {
            question: "Which of the following is NOT a part of the Right to Equality?",
            options: [
                "Equality before law",
                "Abolition of untouchability",
                "Right to Freedom of Religion",
                "Prohibition of discrimination"
            ],
            correctAnswer: "Right to Freedom of Religion",
            feedback: {
                correct: "Correct! The Right to Freedom of Religion is a separate fundamental right under the Indian Constitution.",
                incorrect: "Incorrect. The Right to Equality does not include the Right to Freedom of Religion."
            }
        },
        {
            question: "Does the Right to Equality allow for 'Positive Discrimination'?",
            options: [
                "Yes, to uplift underprivileged sections",
                "No, it strictly prohibits all forms of discrimination",
                "Only for women",
                "Only in educational institutions"
            ],
            correctAnswer: "Yes, to uplift underprivileged sections",
            feedback: {
                correct: "Correct! The Right to Equality allows for 'positive discrimination' to uplift underprivileged sections like SCs, STs, and OBCs.",
                incorrect: "Incorrect. The Right to Equality does allow for positive discrimination to promote the welfare of disadvantaged groups."
            }
        }
    ];

    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [selectedOption, setSelectedOption] = useState('');
    const [showFeedback, setShowFeedback] = useState(false);
    const [score, setScore] = useState(0);

    const handleOptionClick = (option) => {
        setSelectedOption(option);
    };

    const handleNextClick = () => {
        if (selectedOption === questions[currentQuestion].correctAnswer) {
            setScore(score + 1);
        }
        setShowFeedback(true);
    };

    const handleContinue = () => {
        setSelectedOption('');
        setShowFeedback(false);
        setCurrentQuestion(currentQuestion + 1);
    };

    return (
        <div className="quiz-container">
            {currentQuestion < questions.length ? (
                <div className="quiz-question">
                    <h2>Right to Equality Quiz</h2>
                    <p className='kweschan'>{questions[currentQuestion].question}</p>
                    <div className="quiz-options">
                        {questions[currentQuestion].options.map((option, index) => (
                            <button
                                key={index}
                                className={`quiz-option ${selectedOption === option ? 'selected' : ''}`}
                                onClick={() => handleOptionClick(option)}
                            >
                                {option}
                            </button>
                        ))}
                    </div>
                    {showFeedback ? (
                        <div className="quiz-feedback">
                            {selectedOption === questions[currentQuestion].correctAnswer ? (
                                <p className="correct-feedback">{questions[currentQuestion].feedback.correct}</p>
                            ) : (
                                <p className="incorrect-feedback">{questions[currentQuestion].feedback.incorrect}</p>
                            )}
                            <button className="next-button" onClick={handleContinue}>Next</button>
                        </div>
                    ) : (
                        <button className="next-button" onClick={handleNextClick} disabled={!selectedOption}>
                            Submit
                        </button>
                    )}
                </div>
            ) : (
                <div className="quiz-result">
                    <h2>Quiz Complete!</h2>
                    <p>Your Score: {score} / {questions.length}</p>
                    <Link to="/kwiz-back">
    <button className='next-button'>Back</button>
</Link>
                </div>
            )}
        </div>
    );
};

export default QuizComponent;
