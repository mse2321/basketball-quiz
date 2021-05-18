
const Intro = (props) => {
  const { 
    toggleIntro,
    toggleQuiz 
  } = props;

  const startQuiz = () => {
    toggleIntro(false);
    toggleQuiz(true);
  }

  return (
    <div id="intro">
        <div className="container">
            <h2>Get ready to take the quiz!</h2>
            <p>See how much you know about the NBA. Click below to see how you do.</p>
            <button id="quiz-start" onClick={() => startQuiz()}>Start</button>
        </div>
    </div>
  );
}

export default Intro;
