$(document).ready(function () {

	var question = [{question:'What is my name', correct: 'A', answers: ['A', 'B', 'C', 'D']}];

	// Show intro section
	$("#intro").show();
	$("#quiz").hide();

	// Starts the quiz
	$("#quiz-start").click(showQuiz);

	// Question Handler
	$("#question").html(showQuestion);

	function showQuiz() {
		$("#intro").hide();
		$("#quiz").show();
	}

	function showQuestion() {
	  	var questions = [
	    {question:'What is your name?', correct: 'Marcus', answers:['Marcus', 'Agustin', 'Billy', 'Maya']},
	    {question:'What is your country?', correct: 'USA', answers:['USA', 'AR', 'UK', 'EU']},
	    {question:'What is your state?', correct: 'MA', answers:['TX', 'MA', 'NC', 'CA']},
	    {question:'What is your city?', correct: 'Acushnet', answers:['New Bedford', 'Fairhaven', 'Acushnet', 'Dartmouth']},
	    {question:'What is your favorite color?', correct: 'Blue', answers:['Red', 'White', 'Green', 'Blue']}
	    ];
	    
	    var currentQuestion = 0;
	    var points = 0;
		var progress = 0;
	    
	    function showQuestion (index) {
	      $('#currentQuestion').html("Question " + (index + 1));
	      $('#question').html(questions[index].question);
	      questions[index].answers.forEach(function (item, index) {
	        $('#answer' + (index + 1)).attr('value', item);
	        $('#value' + (index + 1)).html(item);
	      });
	    }
	    
	    $('#questionAnswer').on('click', 'input[type="radio"]', function () {
	      	if ( $(this)[0].value === questions[currentQuestion].correct){
	          	points += 20;
	          	progress += 20;
	        } else {
	        	progress += 20;
	        }

			    // Clean all input radio buttons
			    $('#questionAnswer')[0].reset();

			    if (currentQuestion < 4) {
			    	currentQuestion += 1;
				} else {
					currentQuestion = 5;
				}
	    		progressMade(progress, points);
	    		showQuestion(currentQuestion);
	    });
	    
	    function init () {
	      showQuestion(0);
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
			$("#actualScore").html(finalScore);
		}
	    
	    init();
	}

});
