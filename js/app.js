$(document).ready(function(){

// Begin counter at 1 and score at 0
var counter;
var score;
var resetCounters = function () {
    counter = 1; // the empty quotes add an extra space infront of the 1 (so all text is not squished together)
    $('.questionCount').text(counter);
    score = 0;
    $('.scorePercentage').text(score);
}
resetCounters();

// Questions and answers (Make each question text change font and buttons)
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
    ["Verdana", "Garamond", "Monotype"],
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

var typeface = new Array(); //TIMES
typeface[3] = new Font(
    ".times",
    ".times",
    ["Goudy Old Style", "Serifa", "Times"],
    "Times"
);
console.log(typeface);

var typeface = new Array(); //VERDANA
typeface[4] = new Font(
    ".verdana",
    ".verdana",
    ["Verdana", "Verdy", "Script"],
    "Verdana"
);
console.log(typeface);

var typeface = new Array(); //ARIAL
typeface[5] = new Font(
    ".arial",
    ".arial",
    ["Comic Sans", "Trade Gothic", "Arial"],
    "Arial"
);
console.log(typeface);

// Question Count updated per each question
var guessNumber = function() {
    counter += 1; 
    $('.questionCount').text(counter);
};

// Score updated per each question
var addPoints = function() {
    score += 20; /* means counter = counter + amount; (increment by 20) */
    $('.scorePercentage').text(score);
};

// Feedback
var correct = function(text, color){ /*--- to change the feedback everytime user enters number ---*/
    $(".feedback").text("Correct!");
}

var wrong = function(text, color){ /*--- to change the feedback everytime user enters number ---*/
    $(".feedback").text("Wrong!");
}

var introLine = function(text, color){ /*--- to change the feedback everytime user enters number ---*/
    $(".feedback").text("Let the games begin!");
}

// Restart button
$(".restartGame").click(function(){
    counter = 1;
    score = 0;
    introLine(); //Replaces current header
});

// last page (empty) shows only final score + Final comment + Restart button (in big bold letters)


});