
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


demo.controller('ctrl', function($scope){

	$scope.questions = [
		{question:'Which of this teams has NOT won an NBA Champion?', correct: 'Orlando Magic', answers:['Orlando Magic', 'Boston Celtics', 'Houston Rockets', 'Dallas Mavericks']},
		{question:'What NBA player was the sillouette for their logo?', correct: 'Jerry West', answers:['Wilt Chamberlain', 'Michael Jordan', 'Jerry West', 'Julius Erving']},
		{question:'What company makes the official NBA basketball?', correct: 'Spalding', answers:['Champion', 'Spalding', 'Nike', 'Franklin Sports']},
		{question:'What NBA team plays their games in Chicago?', correct: 'Bulls', answers:['Kings', 'Bucks', 'Bulls', 'Pistons']},
		{question:'Which team has won the most NBA Championships?', correct: 'Boston Celtics', answers:['Los Angeles Lakers', 'San Antonio Spurs', 'New York Knicks', 'Boston Celtics']}
	];

	$scope.currentQuestion = 0;

	$scope.currentAnswers = $scope.questions[$scope.currentQuestion].answers;

	$scope.startOver = function() {
		window.location.reload();
	};

	$scope.showQuestions = function() {

	    $('#currentQuestion').html("Question " + ($scope.currentQuestion + 1));
	    $('#question').html($scope.questions[$scope.currentQuestion].question);
	};

	$scope.quizAnswers = function() {

		//$scope.answer = $('[name="answer"]').val();
		//console.log($scope.answer);

		$scope.points = 0;
		$scope.progress = 0;

	    $("#result").show();

	    if ( $scope.answer === $scope.questions[$scope.currentQuestion].correct){
	        $scope.points += 20;
	        $scope.progress += 20;
	        $("#result").html("Correct!");
	        $("#result").css("color", "green");
	    } else {
	        $scope.progress += 20;
	        $("#result").html("Wrong!");
	        $("#result").css("color", "red");
	    }
		//Clean all input radio buttons
		//$('#questionAnswers')[0].reset();

		if ($scope.currentQuestion < 4) {
			$scope.currentQuestion += 1;
		} else {
			$scope.currentQuestion = 4;
		}
	    $scope.progressMade($scope.progress, $scope.points);
	    $scope.showQuestions($scope.currentQuestion);
	};

	$scope.progressMade = function(progress, points) {

			if ($scope.progress === 20) {
				$("#progressBar").attr("value", "20");
			} else if ($scope.progress === 40) {
				$("#progressBar").attr("value", "40");
			} else if ($scope.progress === 60) {
				$("#progressBar").attr("value", "60");
			} else if ($scope.progress === 80) {
				$("#progressBar").attr("value", "80");
			} else if ($scope.progress === 100) {
				$("#progressBar").attr("value", "100");
				$scope.showScore($scope.points);
			}
	};

	$scope.showScore = function(points) {
		//shows the user there final score
		$scope.finalScore = $scope.points;
		$("#mobile_menu").show();
		$("#scoreboard").show();
		$("#actualScore").html($scope.finalScore);
		$("#restart").show();
			
	};

});

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
