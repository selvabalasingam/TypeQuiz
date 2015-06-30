$(document).ready(function(){

var Quiz = function(questions) {
    this.questions = questions; // array of Questions.
};

// Begin counter at 1 and score at 0
Quiz.prototype = {
    getScore: function() {
        var total = this.questions.length;
        var correct = this.getTotalCorrect();
        $('.scorePercentage').text(correct / total * 100);
    },
    getTotalCorrect: function() {
        return this.questions.filter(function(q) {
            return q.isCorrect();
        $('.questionCount').text(total);
        }).length;
    }
};

// Questions
var Question = function(options) {
    this.a = options.a; //transform font type for letter "a"
    this.lorem = options.lorem; // transform font type for the lorem ipsum text
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

// Details for each question
var typeface = new Array(); //GARAMOND
typeface[0] = new Font(
    ".garamond",
    ".garamond",
    ["Verdana", "Garamond", "Monotype"],
    "Garamond"
);
console.log(typeface);

typeface[1] = new Font(  //HELVETICA
    ".helvetica",
    ".helvetica",
    ["Baskerville", "Sans-serif", "Helvetica"],
    "Helvetica"
);
console.log(typeface);

typeface[2] = new Font( //TIMES
    ".times",
    ".times",
    ["Goudy Old Style", "Serifa", "Times"],
    "Times"
);
console.log(typeface);

typeface[3] = new Font( //VERDANA
    ".verdana",
    ".verdana",
    ["Verdana", "Verdy", "Script"],
    "Verdana"
);
console.log(typeface);

typeface[4] = new Font( //ARIAL
    ".arial",
    ".arial",
    ["Comic Sans", "Trade Gothic", "Arial"],
    "Arial"
);
console.log(typeface);

// buttons
var choices = quiz.questions[0].choices;
$('button.choice').each(function(i) {
    $(this).text(choices[i]);
}); 

$('button.choice').click(function(e) {
    var choice = $(e.target).text();
});

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
    total = 0;
    correct = 0;
    introLine(); //Replaces current header
});

});