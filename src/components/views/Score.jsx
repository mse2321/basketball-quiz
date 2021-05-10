
const Score = () => {
    return (
        <div id="score">
            <div id="mobile_menu">
                <h4 id="scoreTitle">Your Score</h4>
                <div class="container scoreDisplay" id="actualScore"><p>{{ scoreTotal }}</p></div>
                <a id="restart" ng-click="startOver()">Start Over?</a>
            </div>
        </div>
    );
};
  
export default Score;
  