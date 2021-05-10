
var demo = angular.module('demo', ['ngRoute']);

demo.config(['$routeProvider', function($routeProvider){
    $routeProvider.when('/', {
        templateUrl: 'intro.html',
        controller: 'ctrl'
    })
    .when('/quiz', {
        templateUrl: 'quiz.html',
        controller: 'ctrl'
    })
    .when('/score', {
        templateUrl: 'score.html',
        controller: 'ctrl'
    })
    .otherwise('/error',  {
        template: '<p>Error - Page Not Found</p>'
    });
}])// end of promises and routes
demo.factory('score_total', function() {
	//shows the user there final score
	return {
		data: {
			final_score: 0
		}
	}
}) // end of factory
demo.controller('ctrl', function($scope, score_total){
	$scope.questions = [
		{question:'Which of this teams has NOT won an NBA Championship?', correct: 'Orlando Magic', answers:['Orlando Magic', 'Boston Celtics', 'Houston Rockets', 'Dallas Mavericks']},
		{question:'What NBA player was the sillouette for their logo?', correct: 'Jerry West', answers:['Wilt Chamberlain', 'Michael Jordan', 'Jerry West', 'Julius Erving']},
		{question:'What company makes the official NBA basketball?', correct: 'Spalding', answers:['Champion', 'Spalding', 'Nike', 'Franklin Sports']},
		{question:'Which NBA team plays their games in Chicago?', correct: 'Bulls', answers:['Kings', 'Bucks', 'Bulls', 'Pistons']},
		{question:"What basketball shot was seen as insulting to other players in the 1940s and 1950s?", correct: 'Slam Dunk', answers:['Three Point Shot', 'Slam Dunk', 'Layup', 'Free Throw']},
		{question:'Which NBA player scored 100 points in one game?', correct: 'Wilt Chamberlain', answers:['Michael Jordan', 'Kobe Bryant', 'Bill Russell', 'Wilt Chamberlain']},
		{question:'What is the maximum amount of games that can be played during the NBA finals?', correct: '7', answers:['4', '5', '6', '7']},
		{question:'Which of these teams were originally based in Minnesota before relocating?', correct: 'Los Angeles Lakers', answers:['Los Angeles Lakers', 'Washington Wizards', 'New York Knicks', 'Memphis Grizzlies']},
		{question:'How many teams are in the NBA currently?', correct: '30', answers:['26', '30', '32', '28']},
		{question:'What other basketball league did the NBA merge with in 1976?', correct: 'ABA', answers:['NBDL', 'ABA', 'CBA', 'BSN']}
	];
	$scope.currentQuestion = 0;
	$scope.points = 0;
	$scope.scoreTotal = score_total.data.final_score;
	$scope.showResult = false;
	$scope.showScore = false;
	$scope.progressTracker = 10;

	$scope.startOver = function() {
		window.location.assign('/basketball-quiz/index.html#/quiz');
	};

	$scope.showQuestions = function(currentQuestion) {
	    if ($scope.currentQuestion <= 9) {
	    	document.querySelector("#currentQuestion").innerText = "Question " + ($scope.currentQuestion + 1) + "";
	    } else {
	    	document.querySelector("#currentQuestion").innerText = "Question " + $scope.currentQuestion + "";
	    };
	   	document.querySelector("#question").innerText = $scope.questions[$scope.currentQuestion].question;
	   	$scope.currentAnswers = $scope.questions[$scope.currentQuestion].answers;
	};

	//remove jQuery
	$scope.quizAnswers = function() {
		$scope.answer = this["item"];
		$scope.quizLength = $scope.questions.length - 1;
		$scope.selectResult = document.querySelector("#result");
		$scope.correctAnswer = $scope.questions[$scope.currentQuestion].correct;
		$scope.test = $scope.questions[$scope.currentQuestion].correct;
	   	$scope.showResult = true;
	    
	    if ($scope.answer === $scope.correctAnswer){
	        $scope.points += 10;
	        $scope.selectResult.innerText = "Correct!";
	        $scope.selectResult.style.color = "green";
	    } else {
	    	$scope.points += 0;
	        $scope.selectResult.innerText = "Wrong!";
	        $scope.selectResult.style.color = "red";
	    };
		if ($scope.currentQuestion < $scope.quizLength) {
			$scope.currentQuestion += 1;
			$scope.answerCounter = $scope.currentQuestion;
			$scope.showQuestions($scope.currentQuestion);
		} else {
			$scope.answerCounter = $scope.quizLength + 1;
		};
	    $scope.progressMade($scope.answerCounter, $scope.points);
	};

	$scope.progressMade = function(answerCounter, points) {
		for(i = 0; i < $scope.answerCounter; i++){
			if(($scope.answerCounter - i) > 1) {
				i = $scope.answerCounter - 1;
			}
			$scope.progressTracker += 10;
			document.querySelector("#progressBar").setAttribute("value", $scope.progressTracker);
			console.log($scope.progressTracker);
		};
		if ($scope.answerCounter === 10) {
			$scope.showScore = true;
			$scope.score($scope.points);
		};
		
	};

	$scope.score = function(points) {
		score_total.data.final_score = $scope.points;
	};

});
