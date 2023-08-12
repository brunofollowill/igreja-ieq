import React, { useState } from "react";
import { shuffle } from "lodash"; 
import questions from "../BibleQuiz/questions.json";
import "../BibleQuiz/Style.css";


function Quiz(theme) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [answerStatus, setAnswerStatus] = useState(null);
  const [showOptions, setShowOptions] = useState(true);
  const [shuffledQuestions, setShuffledQuestions] = useState(shuffle(questions));

  const shuffleAnswers = (answers) => {
    return shuffle(answers);
  };

  const handleAnswerOptionClick = (isCorrect, option) => {
    if (isCorrect) {
      setScore(score + 1);
      setAnswerStatus(`Parabéns, você acertou!`);
    } else {
      setAnswerStatus(
        `Humm... Você errou! A resposta certa é: ${shuffledQuestions[currentQuestion].resposta}.`
      );
    }

    setShowOptions(false);

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < shuffledQuestions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  const handleNextQuestionClick = () => {
    setShowOptions(true);
    setAnswerStatus(null);

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion === shuffledQuestions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  return (
    <div className={`Container-quiz ${theme}`}>
      <div className="Box-quiz">
        <div className="scoreboard">
          <p className="scoreLeft"> {score}</p>

          <p className="scoreRight"> {currentQuestion - score}</p>
        </div>

        {showOptions && (
          <div className="question-section">
            <div className="question-count"></div>
            <div className="question-text">
              {shuffledQuestions[currentQuestion].pergunta}
            </div>
          </div>
        )}
        {showOptions && (
          <div className="answer-section">
            {shuffleAnswers(shuffledQuestions[currentQuestion].opcoes).map((option) => (
              <button
                key={option}
                onClick={() =>
                  handleAnswerOptionClick(
                    option === shuffledQuestions[currentQuestion].resposta,
                    option
                  )
                }
              >
                {option}
              </button>
            ))}
          </div>
        )}
        {answerStatus && (
          <div className="answer-status">
            <p className="resposta">{answerStatus}</p>

            <div className="answer-explanation">
              <p className="explicacao">
                {shuffledQuestions[currentQuestion - 1].explicacao}
              </p>
            </div>

            <button onClick={handleNextQuestionClick}>Próxima Pergunta</button>
          </div>
        )}
      </div>
 
    </div>
  );
}

export default Quiz;