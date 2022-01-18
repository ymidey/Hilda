import React, { useState } from 'react'
import { QuestionnaireBox } from '../../utils/styles/Atoms'
import styled from 'styled-components'
import { questions } from '../../data/Questionnaire'

// Style
const ScoreSection = styled.div`
  display: flex;
  font-size: 24px;
  align-items: center;
`

/* QUESTION/TIMER/LEFT SECTION */
const QuestionSection = styled.div`
  width: 100%;
  position: relative;
`

const QuestionCount = styled.h1`
  margin-bottom: 20px;
`

const QuestionCountSpan = styled.span`
  font-size: 28px;
`

const QuestionText = styled.div`
  margin-bottom: 12px;
`

/* ANSWERS/RIGHT SECTION */
const AnswerSection = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`

const ButtonEdit = styled.button`
  width: 100%;
  margin-bottom: 5%;
  font-size: 16px;
  color: #ffffff;
  background-color: #252d4a;
  border-radius: 15px;
  display: flex;
  padding: 5px;
  justify-content: flex-start;
  align-items: center;
  border: 5px solid #234668;
  cursor: pointer;
  &:hover {
    background-color: #555e7d;
    &:focus {
      outline: none;
    }
  }
`

export default function Questionnaire() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [showScore, setShowScore] = useState(false)
  const [score, setScore] = useState(0)
  const [pseudo, setPseudo] = useState('')
  const [showQuestionnaire, setShowQuestionnaire] = useState(false)
  const [changementPseudo, setChangementPseudo] = useState(false)
  const [leaderBoard, updateLeaderBoard] = useState([
    { userName: 'test', highScore: 21 },
    { userName: 'test2', highScore: 14 },
  ])
  console.log('changement de pseudo est ', changementPseudo)

  const handleStartQuestionnaire = (pseudo) => {
    setShowQuestionnaire(true)
    localStorage.setItem('Name', pseudo)
  }

  const handleResetButtonClick = (changementPseudo) => {
    if (changementPseudo) {
      setCurrentQuestion(0)
      setShowScore(false)
      setScore(0)
      setShowQuestionnaire(false)
    } else {
      setCurrentQuestion(0)
      setShowScore(false)
      setScore(0)
    }
  }

  const handleAnswerButtonClick = (isCorrect) => {
    if (isCorrect === true) {
      setScore(score + 1)
    }
    const nextQuestion = currentQuestion + 1
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion)
    } else {
      setShowScore(true)
    }
  }

  return (
    <QuestionnaireBox>
      {(() => {
        if (showScore) {
          return (
            <ScoreSection>
              Vous avez réussi à répondre correctement à {score} questions sur{' '}
              {questions.length}. <br />
              <ButtonEdit
                onClick={() => {
                  setChangementPseudo(false)
                  handleResetButtonClick()
                }}
              >
                Voulez vous faire le test de nouveau avec le même pseudo ?
              </ButtonEdit>
              <ButtonEdit
                onClick={() => {
                  setChangementPseudo(true)
                  handleResetButtonClick(changementPseudo)
                }}
              >
                Voulez vous faire le test de nouveau avec un nouveau pseudo ?
              </ButtonEdit>
            </ScoreSection>
          )
        } else if (showQuestionnaire === false) {
          return (
            <div>
              {/* {leaderBoard?.map((test) => (
                <h1>                {test.userName}</h1>
              )} */}
              

              <p>Entrer votre pseudo : </p>
              <input onChange={(e) => setPseudo(e.target.value)} />
              <br />
              <button
                onClick={() => {
                  handleStartQuestionnaire(pseudo)
                }}
              >
                Commencer le questionnaire{' '}
              </button>
            </div>
          )
        } else {
          return (
            <>
              <QuestionSection>
                <QuestionCount>
                  <QuestionCountSpan editable={false} selectTextOnFocus={false}>
                    Question {currentQuestion + 1}
                  </QuestionCountSpan>
                  /{questions.length}
                </QuestionCount>
                <QuestionText>
                  {questions[currentQuestion].questionText}
                </QuestionText>
              </QuestionSection>
              <AnswerSection>
                {questions[currentQuestion].answerOptions.map(
                  (answerOptions) => (
                    <ButtonEdit
                      key={answerOptions.answerText}
                      onClick={() =>
                        handleAnswerButtonClick(answerOptions.isCorrect)
                      }
                    >
                      {answerOptions.answerText}
                    </ButtonEdit>
                  )
                )}
              </AnswerSection>
              <div className="question-reset">
                <ButtonEdit onClick={() => handleResetButtonClick()}>
                  Reinitialise
                </ButtonEdit>
              </div>
            </>
          )
        }
      })()}
    </QuestionnaireBox>
  )
}
