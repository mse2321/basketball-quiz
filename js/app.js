$(document).ready(function () {

	var questions = {

		question: "text",
		answers: ["this", "this", "this", "this"],
		correctAnswer: answers[0]
	}

	// Question Handler
	$("#question").html(showQuestion);

	// Answers Handler
	$("#answerA").html(showAnswers);

	// User Answer Handler
	$("button").click(rightAnswerCheck);


	function userAnswer() {
		var answer = something;

		if (answer === something) {

		} else {
			
		}
	}

	function questionAnswered() {
		//determines the question progress
		if (answer !== NULL) {

		} else {
			
		}
	}

	function rightAnswerCheck() {
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
		var quiz = [question1.question, question2.question, question3.question, question4.question, question5.question];
		var nextQuestion = quiz[0];

		return nextQuestion;
	}

	function showAnswers() {
		var nextQuestionAnswers = [question1.answers, question2.answers, question3.answers, question4.answers, question5.answers];

		return nextQuestionAnswers;
	}

	function questionOne () {
		var question1 = Object.create(questions);

		question1.question = "Which of the teams below has not won more than 2 NBA Championship?",
		question1.answers = ["Boston Celtics", "Los Angeles Lakers", "Orlando Magic", "Miami Heat"];
		question1.correctAnswer = question1.answers[2]
	}

	function questionTwo () {
		var question2 = Object.create(questions);

		question2.question = "",
		question2.answers = ["this2", "this2", "this2", "this2"];
		question2.correctAnswer = question2.answer[0]
	}

	function questionThree () {
		var question3 = Object.create(questions);

		question3.question = "",
		question3.answers = ["this3", "this3", "this3", "this3"];
		question3.correctAnswer = question3.answer[0]
	}

	function questionFour () {
		var question4 = Object.create(questions);

		question4.question = "",
		question4.answers = ["this4", "this4", "this4", "this4"];
		question4.correctAnswer = question4.answer[0]
	}

	function questionFive () {
		var question5 = Object.create(questions);

		question5.question = "",
		question5.answers = ["this5", "this5", "this5", "this5"];
		question5.correctAnswer = question5.answer[0]
	}

	function progressMade() {
		progress = "something"

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