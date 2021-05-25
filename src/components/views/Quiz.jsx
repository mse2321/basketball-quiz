import React , { useState, useEffect } from "react";
import _ from 'lodash';
import { useStateContext } from '../../context/state';
import { Button, ProgressBar, Form  } from 'react-bootstrap';

const Quiz = (props) => {
    const { 
        toggleQuiz,
        toggleScore
    } = props;

    const {
        currentQuestion, 
        setCurrentQuestion, 
        questions,
        setScore,
        score 
    } = useStateContext();


    const [gotRightAnswer, setGotRightAnswer] = useState();
    const [showAnswerFeedback, setShowAnswerFeedback] = useState(false);
    const [newIndex, setNewIndex] = useState(0);
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        setCurrentQuestion(questions[newIndex]);
    }, [currentQuestion, newIndex, questions, setCurrentQuestion]);

    const showNextQuestion = () => {
        const updatedIndex = newIndex + 1;
        if(newIndex < questions.length) {
            setNewIndex(updatedIndex);
            // TODO - do I really need this?
            setCurrentQuestion(questions[newIndex]);
        }  

        setShowAnswerFeedback(false);
        document.querySelector('input:checked').checked = false;
    }

    const quizAnswers = (e, correctAnswer) => {
        const answer = e.target.value;
        
        if(!_.isEmpty(answer) && (answer === correctAnswer)){
            setScore(score + 10);
            setGotRightAnswer(true); 
        } else {
            setGotRightAnswer(false); 
        };

        progress < 100 && setProgress(progress + 10);
        setShowAnswerFeedback(true);

        return answer;
    }

    const viewScore = () => {
        toggleQuiz(false);
        toggleScore(true);
    }

    return (
        <div id="quiz">
            <div className="quiz-container">
                <ProgressBar id="progressBar" now={progress} max="100" srOnly variant="warning" /> 
                <div className="quiz-content">
                    {
                        <React.Fragment>
                            <h3 id="currentQuestion">{'Question ' + (newIndex + 1)}</h3>
                            <p id="question">{currentQuestion.question}</p>

                            <Form>
                                <ul id="answers">
                                    {
                                        (currentQuestion.answers).map((answer, index) => {
                                            return <li key={index}>
                                                <Form.Check 
                                                    inline
                                                    type="radio"
                                                    label={answer} 
                                                    name={'question_' + (newIndex + 1)} 
                                                    className="answers"
                                                    value={answer} 
                                                    onClick={(e) => quizAnswers(e, currentQuestion.correctAnswer)} />
                                            </li>
                                        })
                                    }
                                </ul>
                            </Form>
                        </React.Fragment>
                    }
                </div>
                
                    {
                       showAnswerFeedback && (gotRightAnswer ? <h3 id="result"><span className="correct">Correct</span></h3> : 
                       <div id="result"><span className="wrong">Wrong</span></div>)
                    }
                {
                    newIndex === (questions.length - 1) && showAnswerFeedback ? 
                        <Button id="checkScore" onClick={() => viewScore()}>View Score</Button> :
                        <Button onClick={() => showNextQuestion()}>Next Question</Button>
                }
            </div>
        </div>
    );
};
  
export default Quiz;
  