const Score = (props) => {
    const { 
        newScore,
        startOverFunc 
    } = props;

    return (
        <div id="score">
            <div id="mobile_menu">
                <span id="scoreTitle">Your Score</span>
                <div className="scoreDisplay" id="actualScore">{newScore}</div>
                <button id="restart" onClick={() => startOverFunc()}>Start Over?</button>
            </div>
        </div>
    );
};
  
export default Score;
  