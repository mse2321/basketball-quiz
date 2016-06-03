
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
}]); // end of promises and routes

demo.factory('scoreTotal', ['points', function(points) {
		//shows the user there final score
		$scope.finalScore = $scope.points;
		return $scope.finalScore;
}]); // end of factory


demo.controller('ctrl', ['$scope', 'scoreTotal', function($scope, scoreTotal){

	$scope.questions = [
		{question:'Which of this teams has NOT won an NBA Champion?', correct: 'Orlando Magic', answers:['Orlando Magic', 'Boston Celtics', 'Houston Rockets', 'Dallas Mavericks']},
		{question:'What NBA player was the sillouette for their logo?', correct: 'Jerry West', answers:['Wilt Chamberlain', 'Michael Jordan', 'Jerry West', 'Julius Erving']},
		{question:'What company makes the official NBA basketball?', correct: 'Spalding', answers:['Champion', 'Spalding', 'Nike', 'Franklin Sports']},
		{question:'What NBA team plays their games in Chicago?', correct: 'Bulls', answers:['Kings', 'Bucks', 'Bulls', 'Pistons']},
		{question:'Which team has won the most NBA Championships?', correct: 'Boston Celtics', answers:['Los Angeles Lakers', 'San Antonio Spurs', 'New York Knicks', 'Boston Celtics']}
	];

	$scope.currentQuestion = 0;
	$scope.points = 0;

	//console.log($scope.currentAnswers);

	$scope.startOver = function() {
		//window.location.reload();
		window.location.assign('http://localhost:8080/basketball-quiz/index.html#/quiz');
	};

	$scope.showQuestions = function(currentQuestion) {

	    if ($scope.currentQuestion <= 4) {
	    	$('#currentQuestion').html("Question " + ($scope.currentQuestion + 1));
	    } else {
	    	$('#currentQuestion').html("Question " + $scope.currentQuestion);
	    };

	    $('#question').html($scope.questions[$scope.currentQuestion].question);
	    $scope.currentAnswers = $scope.questions[$scope.currentQuestion].answers;
	    console.log($scope.currentAnswers);
	    console.log($scope.currentQuestion);
	};

	$scope.quizAnswers = function() {

		$scope.answer = $(this).prop("item");
		$scope.quizLength = $scope.questions.length - 1;
		$scope.correctAnswer = $scope.questions[$scope.currentQuestion].correct;
		console.log($scope.answer);
		$scope.test = $scope.questions[$scope.currentQuestion].correct;
		console.log($scope.test);

	    $("#result").show();

	    // need to figure out how to add points if answer is correct
	    if ($scope.answer === $scope.correctAnswer){
	        $scope.points += 20;
	        console.log($scope.points);
	        $("#result").html("Correct!");
	        $("#result").css("color", "green");
	    } else {
	    	$scope.points += 0;
	        $("#result").html("Wrong!");
	        $("#result").css("color", "red");
	    };

		if ($scope.currentQuestion < $scope.quizLength) {
			$scope.currentQuestion += 1;
			$scope.answerCounter = $scope.currentQuestion;
			$scope.showQuestions($scope.currentQuestion);
		} else {
			$scope.answerCounter = $scope.quizLength + 1;
		}

		console.log($scope.points);
		console.log($scope.answerCounter);
	    $scope.progressMade($scope.answerCounter, $scope.points);
	};

	$scope.progressMade = function(answerCounter, points) {

			if ($scope.answerCounter === 1) {
				$("#progressBar").attr("value", "20");
			} else if ($scope.answerCounter === 2) {
				$("#progressBar").attr("value", "40");
			} else if ($scope.answerCounter === 3) {
				$("#progressBar").attr("value", "60");
			} else if ($scope.answerCounter === 4) {
				$("#progressBar").attr("value", "80");
			} else if ($scope.answerCounter === 5) {
				$("#progressBar").attr("value", "100");
				scoreTotal($scope.points);
				$("#checkScore").show();
			}
	};

}]);

/*

// gets country listing
demo.factory('list', function($http){
            return function(){
              return $http ({ 
                cache: true,
                method: 'JSONP', 
                url: 'http://api.geonames.org/countryInfoJSON?username=mse2335',
                params: {callback: 'JSON_CALLBACK'}
              })
            };
}); // end of list


*/
