$(document).ready(function(){

// Begin counter at 1 and score at 0
var counter;
var score;
var resetCounters = function () {
	counter = 1;
	$('.questionCount').text(counter);
	score = 0;
	$('.scorePercentage').text(score);
}
resetCounters();

// Questions and answers
function Font (minisculeA, loremText, answers, correct) {
    this.minisculeA = minisculeA;
    this.loremText = loremText;
    this.answers = answers;
    this.correct = correct;
}

var typeface = new Array(); //GARAMOND
typeface[1] = new Font(
    ".garamond",
    ".garamond",
    ["Verdana", "Garamond", "Helvetica"],
    "Garamond"
);
console.log(typeface);

var typeface = new Array(); //HELVETICA
typeface[2] = new Font(
    ".helvetica",
    ".helvetica",
    ["Baskerville", "Sans-serif", "Helvetica"],
    "Helvetica"
);
console.log(typeface);



// Make each question text change font and buttons
// Question Count updated per each question
// Score updated per each question
// Restart button
// last page (empty) shows only final score + Final comment + Restart button (in big bold letters)


});




