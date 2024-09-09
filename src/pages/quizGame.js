import React, { useState, useEffect } from 'react';
import '../styles/QuizGame.css';

const questions = [
    {
        question: "Who is known as the 'Father of the Indian Constitution'?",
        options: ["Mahatma Gandhi", "Jawaharlal Nehru", "B. R. Ambedkar", "Sardar Vallabhbhai Patel"],
        answer: 2
    },
    {
        question: "In which year was the Constitution of India adopted?",
        options: ["1947", "1949", "1950", "1952"],
        answer: 1
    },
    {
        question: "Which part of the Constitution deals with Fundamental Rights?",
        options: ["Part I", "Part II", "Part III", "Part IV"],
        answer: 2
    },
    {
        question: "How many articles are there in the Indian Constitution?",
        options: ["395", "448", "370", "420"],
        answer: 1
    },
    {
        question: "Which language is the Constitution of India written in?",
        options: ["Hindi", "English", "Both Hindi and English", "None of the above"],
        answer: 2
    }
];

const QuizGame = () => {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [score, setScore] = useState(0);
    const [timeLeft, setTimeLeft] = useState(15);
    const [timerInterval, setTimerInterval] = useState(null);
    const [resultMessage, setResultMessage] = useState('');
    const [showNextButton, setShowNextButton] = useState(false);

    useEffect(() => {
        loadQuestion();
    }, [currentQuestionIndex]);

    const loadQuestion = () => {
        clearInterval(timerInterval);
        setTimeLeft(15);
        const interval = setInterval(updateTimer, 1000);
        setTimerInterval(interval);

        setResultMessage('');
        setShowNextButton(false);
    };

    const checkAnswer = (selectedOption) => {
        clearInterval(timerInterval);
        const correctAnswer = questions[currentQuestionIndex].options[questions[currentQuestionIndex].answer];

        if (selectedOption === correctAnswer) {
            setScore(score + 1);
            setResultMessage('Correct!');
        } else {
            setResultMessage('Wrong!');
        }

        setShowNextButton(true);
    };

    const nextQuestion = () => {
        if (currentQuestionIndex < questions.length - 1) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
        } else {
            clearInterval(timerInterval);
            setResultMessage(`Congratulations! You've completed the quiz. Your final score is: ${score} / ${questions.length}`);
            setShowNextButton(false);
        }
    };

    const updateTimer = () => {
        setTimeLeft(prevTimeLeft => {
            if (prevTimeLeft <= 1) {
                clearInterval(timerInterval);
                setResultMessage("Time's up!");
                setShowNextButton(true);
                return 0;
            }
            return prevTimeLeft - 1;
        });
    };

    const updateProgressBar = () => {
        return ((currentQuestionIndex + 1) / questions.length) * 100;
    };

    return (
        <div className="quizGame-container-unique">
            <h1 className="quizGame-title-unique">Indian Constitution Quiz</h1>
            <div className="quizGame-progress-container-unique">
                <div
                    className="quizGame-progress-bar-unique"
                    style={{ width: `${updateProgressBar()}%` }}
                ></div>
            </div>
            <div className="quizGame-question-container-unique">
                <div className="quizGame-question-unique">
                    {questions[currentQuestionIndex].question}
                </div>
                <div className="quizGame-options-container-unique">
                    {questions[currentQuestionIndex].options.map((option, index) => (
                        <button
                            key={index}
                            className="quizGame-option-unique"
                            onClick={() => checkAnswer(option)}
                        >
                            {option}
                        </button>
                    ))}
                </div>
            </div>
            <div className="quizGame-result-unique">{resultMessage}</div>
            {showNextButton && (
                <button
                    className="quizGame-next-btn-unique"
                    onClick={nextQuestion}
                >
                    Next Question
                </button>
            )}
            <div className="quizGame-timer-unique">
                Time Left: <span className="quizGame-time-unique">{timeLeft}</span> seconds
            </div>
        </div>
    );
};

export default QuizGame;
