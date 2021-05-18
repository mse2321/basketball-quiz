import React , { useState } from "react";
import _ from 'lodash';
import { useStateContext } from '../../context/state';

const Quiz = (props) => {
    const { 
        setNewScore,
        toggleQuiz,
        toggleScore
    } = props;

    const {
        currentQuestion, 
        setCurrentQuestion, 
        questions 
    } = useStateContext();

    const [gotRightAnswer, setGotRightAnswer] = useState();
    const [showAnswerFeedback, setShowAnswerFeedback] = useState(false);
    const [newIndex, setNewIndex] = useState(0);
    const [progress, setProgress] = useState(0);

     // TODO - need to figure out why I'm not getting the latest version of currentQuestion

    const showNextQuestion = () => {
        newIndex < questions.length && setNewIndex(newIndex + 1);
        setCurrentQuestion(questions[newIndex]);
        setShowAnswerFeedback(false);
    }

    const quizAnswers = (e, correctAnswer) => {
        const answer = e.target.value;
        
        !_.isEmpty(answer) && setGotRightAnswer(answer === correctAnswer ? true : false); 
        progress < 100 && setProgress(progress + 10);
        setShowAnswerFeedback(true);

        return answer;
    }

    const viewScore = () => {
        setNewScore(100);
        toggleQuiz(false);
        toggleScore(true);
    }

    return (
        <div id="quiz">
            <div className="container">
                <progress id="progressBar" value={progress} max="100"></progress> 
                <div className="quiz-content">
                    {
                        <React.Fragment>
                            <h4 id="currentQuestion">{'Question ' + (newIndex + 1)}</h4>
                            <p id="question">{currentQuestion.question}</p>
                        
                            <ul id="answers">
                                {
                                    (currentQuestion.answers).map((answer, index) => {
                                        return <li key={index}>
                                            <label>{answer}</label>
                                            <input 
                                                type="radio" 
                                                name="answer" 
                                                value={answer} 
                                                onClick={(e) => quizAnswers(e, currentQuestion.correctAnswer)} />
                                        </li>
                                    })
                                }
                            </ul>
                        </React.Fragment>
                    }
                </div>
                <h3 id="result">
                    {
                       showAnswerFeedback && (gotRightAnswer ? <span className="correct">Correct</span> : 
                            <span className="wrong">Wrong</span>)
                    }
                </h3>
                <button onClick={() => showNextQuestion()}>Next Question</button>
                {
                    newIndex === questions.length && <button id="checkScore" onClick={() => viewScore()}>View Score</button>
                }
            </div>
        </div>
    );
};
  
export default Quiz;
  