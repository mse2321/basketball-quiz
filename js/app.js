$(document).ready(function () {

	var question = [{question:'What is my name', correct: 'A', answers: ['A', 'B', 'C', 'D']}];

	// Show intro section and score heading
	/* $("#intro").show();
	$("#quiz").hide();
	$("#scoreTitle").hide(); */

	// for testing only
	$("#intro").hide();
	$("#quiz").show();
	$("#scoreTitle").hide();

	// Starts the quiz
	//$("#quiz-start").click(showQuiz);

	// Question Handler
	$("#question").html(showQuestion);

	function showQuiz() {
		$("#intro").hide();
		$("#quiz").show();
	}

	function showQuestion() {
	  	var questions = [
	    {question:'What is your name?', correct: 'A - Marcus', answers:['A - Marcus', 'B - Agustin', 'C - Billy', 'D - Maya']},
	    {question:'What is your country?', correct: 'A - USA', answers:['A - USA', 'B - AR', 'C - UK', 'D - EU']},
	    {question:'What is your state?', correct: 'B - MA', answers:['A - TX', 'B - MA', 'C - NC', 'D - CA']},
	    {question:'What is your city?', correct: 'C - Acushnet', answers:['A - New Bedford', 'B - Fairhaven', 'C - Acushnet', 'D - Dartmouth']},
	    {question:'What is your favorite color?', correct: 'D - Blue', answers:['A - Red', 'B - White', 'C - Green', 'D - Blue']}
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
	        } else {
	        	progress += 20;
	        	$("#result").html("Wrong!");
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
			$("#scoreTitle").show();
			$("#actualScore").html(finalScore);
		}
	    

	    init();
	}

});
