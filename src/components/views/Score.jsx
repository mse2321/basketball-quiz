const Score = (props) => {
    const { 
        newScore,
        startOverFunc 
    } = props;

    return (
        <div id="score">
            <div id="scoreboard">
                <span id="scoreTitle">Your Score</span>
                <div className="scoreDisplay" id="actualScore">{newScore}</div>
                <button id="restart" onClick={() => startOverFunc()}>Start Over?</button>
            </div>
        </div>
    );
};
  
export default Score;
  