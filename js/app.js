$(document).ready(function () {

	/*var questions = {

		question: "text",
		answers: [],
		correctAnswer: answers,
	}*/

	// Show intro section
	$("#intro").show();
	$("#quiz").hide();

	// Starts the quiz
	$("#quiz-start").click(showQuiz);

	// Question Handler
	$("#question").html(showQuestion);

	// Answers Handler
	$("#answerA").html(showAnswers);

	// User Answer Handler
	$("button").click(UserAnswer);


	function showQuiz() {
		$("#intro").hide();
		$("#quiz").show();
	}

	function UserAnswer() {
		var answer = $('#answers-list li').val();
		var points = 0;
		var progress = 0;

		function showRightAnswer() {

			//highlights the correct answer
			if (answer === correctAnswer) {
				$("#answerC").addClass(".rightAnswer");
				$("#answer-button-C").addClass(".rightAnswerButton");
				points += points
			}
		}

		progress += 20;


	}

	var question = [{question:'What is my name', correct: 'A', answers: ['A', 'B', 'C', 'D']}];

	function showQuestion() {

		var quiz = [question1, question2, question3, question4, question5];
		var nextQuestion = quiz[0];

		function questionOne () {
			var question1 = Object.create(questions);

			question1.question = "Which of the teams below has not won more than 2 NBA Championship?";
			question1.answers = ["Boston Celtics", "Los Angeles Lakers", "Orlando Magic", "Miami Heat"];
			question1.correct = question1.answers[2];

			return question1;

			console.log(question1.question);
		}

		function questionTwo () {
			var question2 = Object.create(questions);

			question2.question = "test2";
			question2.answers = ["this2", "this2", "this2", "this2"];
			question2.correctAnswer = question2.answer[0];

			return question2;

			console.log(question2);
		}

		function questionThree () {
			var question3 = Object.create(questions);

			question3.question = "test3";
			question3.answers = ["this3", "this3", "this3", "this3"];
			question3.correctAnswer = question3.answer[0];

			return question3;

			console.log(question3);
		}

		function questionFour () {
			var question4 = Object.create(questions);

			question4.question = "test4";
			question4.answers = ["this4", "this4", "this4", "this4"];
			question4.correctAnswer = question4.answer[0];

			return question4;

			console.log(question4);
		}

		function questionFive () {
			var question5 = Object.create(questions);

			question5.question = "test5";
			question5.answers = ["this5", "this5", "this5", "this5"];
			question5.correctAnswer = question5.answer[0];

			return question5;

			console.log(question5);
		}

		return nextQuestion;
	}
	

	function progressMade(progress) {

		if(progress === 0) {
			alert("please answer a question.")
		} else if (progress === 20) {
			$("progress").html("value = '20'");
		} else if (progress === 40) {
			$("progress").html("value = '40'");
		} else if (progress === 60) {
			$("progress").html("value = '60'");
		} else if (progress === 80) {
			$("progress").html("value = '80'");
		} else if (progress === 100) {
			$("progress").html("value = '100'");
			showScore(progress);
		}
	}

	function showScore(points) {
		//shows the user there score
		//var finalScore = score + points;
		var finalScore = points;
		$("#actualScore").html(finalScore);
	}

});


/* $(function () {
  var questions = [
    {question:'What is your name?', correct: 'Marcus', answers:['Marcus', 'Agustin', 'Billy', 'Maya']},
    {question:'What is your country?', correct: 'USA', answers:['USA', 'AR', 'UK', 'EU']}
    ];
    
    var currentQuestion = 0;
    
    function showQuestion (index) {
      $('#currentQuestion').html(index+1);
      $('#question').html(questions[index].question);
      questions[index].answers.forEach(function (item, index) {
        $('#answer' + (index + 1)).attr('value', item);
        $('#value' + (index + 1)).html(item);
      });
    }
    
    $('#questionAnswer').on('click', 'input[type="radio"]', function () {
      if ( $(this)[0].value === questions[currentQuestion].correct){
          console.log('You are rig
    // Clean all input radio buttons
    $('#questionAnswer')[0].reset();
    currentQuestion += 1;
    showQuestion(currentQuestion);ht buddy!');
      }
    });
    
    function init () {
      showQuestion(0);
    }
    
    init();
}); */