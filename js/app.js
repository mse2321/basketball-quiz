$(document).ready(function () {

	var questions = {

		question: "text",
		answers: [],
		correctAnswer: answers,
	}

	// Question Handler
	$("#question").html(showQuestion);

	// Answers Handler
	$("#answerA").html(showAnswers);

	// User Answer Handler
	$("button").click(rightAnswerCheck);


	function rightAnswerCheck() {
		var answer = something;

		//determines the question is correct
		if (answer === correctAnswer) {
			//do this
		} else {
			//do this
		}
	}

	function showScore() {
		//shows the user there score
		//var finalScore = score + points;
		var finalScore = 100;
		$("#actualScore").html(finalScore);
	}

	function showQuestion() {

		var quiz = [question1, question2, question3, question4, question5];
		var nextQuestion = quiz[0];

		function questionOne () {
			var question1 = Object.create(questions);

			question1.question = "Which of the teams below has not won more than 2 NBA Championship?";
			question1.answers = ["Boston Celtics", "Los Angeles Lakers", "Orlando Magic", "Miami Heat"];
			question1.correctAnswer = question1.answers[2];

			return question1;

			console.log(question1.question);
		}

		function questionTwo () {
			var question2 = Object.create(questions);

			question2.question = "";
			question2.answers = ["this2", "this2", "this2", "this2"];
			question2.correctAnswer = question2.answer[0];

			return question2;

			console.log(question2);
		}

		function questionThree () {
			var question3 = Object.create(questions);

			question3.question = "";
			question3.answers = ["this3", "this3", "this3", "this3"];
			question3.correctAnswer = question3.answer[0];

			return question3;

			console.log(question3);
		}

		function questionFour () {
			var question4 = Object.create(questions);

			question4.question = "";
			question4.answers = ["this4", "this4", "this4", "this4"];
			question4.correctAnswer = question4.answer[0];

			return question4;

			console.log(question4);
		}

		function questionFive () {
			var question5 = Object.create(questions);

			question5.question = "";
			question5.answers = ["this5", "this5", "this5", "this5"];
			question5.correctAnswer = question5.answer[0];

			return question5;

			console.log(question5);
		}

		return nextQuestion;
	}
	

	function progressMade() {
		progress = numberOfAnswers;

		if(progress === 0) {
			alert("please answer a question.")
		} else if (progress === 20) {
			value = 20;
		} else if (progress === 40) {
			value = 40;
		} else if (progress === 60) {
			value = 60;
		} else if (progress === 80) {
			value = 80;
		} else if (progress === 100) {
			value = 100;
		}
	}

});