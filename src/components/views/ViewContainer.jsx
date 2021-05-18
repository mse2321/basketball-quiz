import React , { useState } from "react";
import Intro from './Intro';
import Quiz from './Quiz';
import Score from './Score';
import { useStateContext } from '../../context/state';

const ViewContainer = () => {
  const [score, setNewScore] = useState(0);
  const [showIntro, toggleIntro] = useState(true);
  const [showQuiz, toggleQuiz] = useState(false);
  const [showScore, toggleScore] = useState(false);
  const { setCurrentQuestion, questions } = useStateContext();

  const resetQuiz = () => {
    setCurrentQuestion(questions[0]);
    toggleQuiz(true);
    toggleScore(false);
    toggleIntro(false);
  }

  return (
    <React.Fragment>
        { showIntro && <Intro toggleIntro={toggleIntro} toggleQuiz={toggleQuiz} /> }
        { showQuiz && <Quiz setNewScore={setNewScore} toggleQuiz={toggleQuiz} toggleScore={toggleScore} /> }
        { showScore && <Score newScore={score} startOverFunc={resetQuiz} toggleScore={toggleScore} /> }
    </React.Fragment>
  );
}

export default ViewContainer;