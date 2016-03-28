$(document).ready(function () {

	var question = [{question:'What is my name', correct: 'A', answers: ['A', 'B', 'C', 'D']}];

	$("#restart").click(startOver);

	// Show intro section and score heading
	$("#intro").show();
	$("#quiz").hide();


	// Starts the quiz
	$("#quiz-start").click(showQuiz);

	// Question Handler
	$("#question").html(showQuestion);

	function startOver() {
		window.location.reload();
	}

	function showQuiz() {
		$("#intro").hide();
		$("#quiz").show();
		$("#restart").show();
	}

	function showQuestion() {
	  	var questions = [
	    {question:'Which of this teams has NOT won an NBA Champion?', correct: 'A - Orlando Magic', answers:['A - Orlando Magic', 'B - Boston Celtics', 'C - Houston Rockets', 'D - Dallas Mavericks']},
	    {question:'What NBA player was the sillouette for their logo?', correct: 'C - Jerry West', answers:['A - Wilt Chamberlain', 'B - Michael Jordan', 'C - Jerry West', 'D - Julius Erving']},
	    {question:'What company makes the official NBA basketball?', correct: 'B - Spalding', answers:['A - Champion', 'B - Spalding', 'C - Nike', 'D - Franklin Sports']},
	    {question:'What NBA team plays their games in Chicago?', correct: 'C - Bulls', answers:['A - Kings', 'B - Bucks', 'C - Bulls', 'D - Pistons']},
	    {question:'Which team has won the most NBA Championships?', correct: 'D - Boston Celtics', answers:['A - Los Angeles Lakers', 'B - San Antonio Spurs', 'C - New York Knicks', 'D - Boston Celtics']}
	    ];
	    
	    var currentQuestion = 0;
	    var points = 0;
		var progress = 0;
	    
	    function showQuestions (index) {
	      $('#currentQuestion').html("Question " + (index + 1));
	      $('#question').html(questions[index].question);
	      questions[index].answers.forEach(function (item, index) {
	        $('#answer' + (index + 1)).attr('value', item);
	        if(($(window).width()) < "700") {
		        $('button#answer' + (index + 1)).html(item);
		        $('ul#answers').hide();
		        $('span#value' + (index + 1)).append("<br />");
	    	} else {
	    		$('li#value' + (index + 1)).html(item);
		        $('.mobileAnswers').hide();
	    	}
	      });
	    }
	    
	    $('#questionAnswers').on('click', 'button[name="answer"]', function () {
	      	if ( $(this)[0].value === questions[currentQuestion].correct){
	          	points += 20;
	          	progress += 20;
	          	$("#result").html("Correct!");
	          	$("#result").css("color", "green");
	        } else {
	        	progress += 20;
	        	$("#result").html("Wrong!");
	        	$("#result").css("color", "red");
	        }
			    //Clean all input radio buttons
			   //$('#questionAnswers')[0].reset();

			    if (currentQuestion < 4) {
			    	currentQuestion += 1;
				} else {
					currentQuestion = 4;
				}
	    		progressMade(progress, points);
	    		showQuestions(currentQuestion);
	    });
	    
	    function init () {
	      showQuestions(0);
	    }
	    
	    function progressMade() {

			if (progress === 20) {
				$("#progressBar").attr("value", "20");
			} else if (progress === 40) {
				$("#progressBar").attr("value", "40");
			} else if (progress === 60) {
				$("#progressBar").attr("value", "60");
			} else if (progress === 80) {
				$("#progressBar").attr("value", "80");
			} else if (progress === 100) {
				$("#progressBar").attr("value", "100");
				showScore(points);
			}
		}

		function showScore() {
			//shows the user there final score
			var finalScore = points;
			$("#scoreboard").show();
			$("#actualScore").html(finalScore);
		}

	   
	    init();
	}

});
