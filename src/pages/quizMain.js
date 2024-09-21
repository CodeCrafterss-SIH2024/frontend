import React from 'react'
import QuizGame from './quizGame'
import '../styles/QuizGame.css'
import NewHeader from '../components/NewHeader'
function QuizMain() {
  return (
    <div>
      <NewHeader/>
      <QuizGame/>
    </div>
  )
}

export default QuizMain
