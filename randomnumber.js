/* RANDOM NUMBER GENERATOR 

Here's a simple exercise on random number generation. The user is prompted to enter in a number, after which this
program selects a randomly-generated number between 0 and the number the user provided. */


  // Initial prompt asking the user to enter a number.

var userInput = prompt("Please type in a number.");

  // I want to make sure the number the user gave is an integer, so here's a function to adjust the number.  

var roundedNumber = parseInt(userInput);

  // Here's where the random number's generated based on that input.

var randomNumber = Math.floor(Math.random()*roundedNumber)+1;

  // The randomly-generated number is then shown in an alert dialog box.
  
alert("Your randomly-generated number is " + randomNumber + "."); 
