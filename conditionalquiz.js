/* CONDITIONAL QUIZ

A small quiz designed to practice using conditional statements. */


	// Initial total variable, set at 0 to begin.

var correctAnswers = 0;

	// QUESTION 1
	// Asks user first question. 

var questionOne = prompt("What color is an apple?");

	// Conditional statement evaluates their response to see if it's valid. 

if (questionOne.toUpperCase() === "RED") {
	correctAnswers += 1;
}

	// Other questions follow--
	// QUESTION 2

var questionTwo = prompt("What color is a banana?");

if (questionTwo.toUpperCase() === "YELLOW") {
	correctAnswers += 1;
}

	// QUESTION 3

var questionThree = prompt("What color is a kiwi?");

if (questionThree.toUpperCase() === "GREEN") {
	correctAnswers += 1;
}


	// QUESTION 4

var questionFour = prompt("What color is an eggplant?");

if (questionFour.toUpperCase() === "PURPLE") {
	correctAnswers += 1;
}

	// QUESTION 5

var questionFive = prompt("What color is an artichoke?");

if (questionFive.toUpperCase() === "GREEN") {
	correctAnswers += 1;
}



alert("You got " + correctAnswers + " correct!");

