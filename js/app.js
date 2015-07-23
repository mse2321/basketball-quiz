$(document).ready(function () {

	function questionAnswered() {
		//determines the question progress
		if () {

		} else {
			
		}
	}

	function rightAnswer() {
		//determines the question is correct
		if () {
			//do this
		} else {
			//do this
		}
	}

	function showScore() {
		//shows the user there score
		var finalScore = score + points;
	}

	var quiz = [question1, question2, question3, question4, question5];

	var questions = {
		question: text,
		answers: ["this", "this", "this", "this"]
	}

	function questionOne () {
		var question1 = Object.create(questions);

		question1.question = "";
		question1.answer = ["this1", "this1", "this1", "this1"];
	}

	function questionTwo () {
		var question2 = Object.create(questions);

		question2.question = "";
		question2.answer = ["this2", "this2", "this2", "this2"];
	}

	function questionThree () {
		var question3 = Object.create(questions);

		question3.question = "";
		question3.answer = ["this3", "this3", "this3", "this3"];
	}

	function questionFour () {
		var question4 = Object.create(questions);

		question4.question = "";
		question4.answer = ["this4", "this4", "this4", "this4"];
	}

	function questionFive () {
		var question5 = Object.create(questions);

		question5.question = "";
		question5.answer = ["this5", "this5", "this5", "this5"];
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