const Score = (props) => {
    const { 
        newScore,
        startOverFunc 
    } = props;

    return (
        <div id="score">
            <div id="mobile_menu">
                <h4 id="scoreTitle">Your Score</h4>
                <div className="container scoreDisplay" id="actualScore"><p>{newScore}</p></div>
                <button id="restart" onClick={() => startOverFunc()}>Start Over?</button>
            </div>
        </div>
    );
};
  
export default Score;
  