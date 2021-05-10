
const Quiz = () => {
    return (
        <div id="quiz" ng-init="showQuestions()">
            <div class="container">
                <progress id="progressBar" value="10" max="100"></progress> 
        
                <h4 id="currentQuestion"></h4>
                <p id="question"></p>
        
                <ul id="answers">
                    <li ng-repeat="item in currentAnswers">
                        <input type="radio" name="answer" value="{{ item }}" ng-click="quizAnswers()">&nbsp;{{ item }}
                    </li>
                </ul>
                <h3 id="result" ng-show="showResult"></h3>
                <a href="#/score"><button id="checkScore" ng-show="showScore">View Score</button></a>
            </div>
        </div>
    );
};
  
export default Quiz;
  