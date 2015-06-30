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

////// beginning matthew //////

var Quiz = function(questions) {
    this.questions = questions; // array of Questions.
};

Quiz.prototype = {
    getScore: function() {
        var total = this.questions.length;
        var correct = this.getTotalCorrect();

        return correct / total;
    },
    getTotalCorrect: function() {
        return this.questions.filter(function(q) {
            return q.isCorrect();
        }).length;
    }
};

    
var Question = function(options) {
    this.question = options.question; // question
    this.choices = options.choices; // choices
    this.correctChoice = options.correctChoice; // this correct
    this.answer = null; // this what the user chooses
};

Question.prototype = {
    answer: function(choice) {
        this.answer = choice;
    },
    isCorrect: function() {
        return this.answer == this.correctChoice;
    }
};

/////////////////////////////////
var questions = [
    new Question({
        question: 'What font is this?',
        choices: ['arial', 'times', 'helvetica'],
        correct: 'arial'
    }),
    new Question({
        question: 'What font is this?',
        choices: ['arial', 'times', 'helvetica'],
        correct: 'arial'
    })
    //, ...

];
var quiz = new Quiz(questions);

/// buttons

var choices = quiz.questions[0].choices;
$('button.choice').each(function(i) {
    $(this).text(choices[i]);
}); 

$('button.choice').click(function(e) {
    var choice = $(e.target).text();
});

///// end matthew ///////

var typeface = new Array(); //GARAMOND
typeface[1] = new Font(
    ".garamond",
    ".garamond",
    ["Verdana", "Garamond", "Monotype"],
    "Garamond"
);
console.log(typeface);

typeface[2] = new Font(  //HELVETICA
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