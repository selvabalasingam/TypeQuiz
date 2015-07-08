$(document).ready(function(){

var Quiz = function(questions) {
    this.questions = questions; // array of Questions.
    this.current = 0;
};

// Begin counter at 1 and score at 0
Quiz.prototype = {
    getScore: function() {
        var total = this.questions.length;
        var correct = this.getTotalCorrect();
        return correct / total * 100;
    },
    getTotalCorrect: function() {
        return this.questions.filter(function(q) {
            return q.isCorrect();
        }).length;
    },
    getCurrentQuestion: function() {
        return this.questions[this.current];
    },
    reset: function() {
        this.current = 0;
        this.questions.forEach(function(q) {
            q.answer = null; 
        });
    },
    getNextQuestion: function() {
        // only increment the counter if there is another question
        if (this.current < this.questions.length) {
            this.current++;
        }
        return this.questions[this.current];
    }
};

// Questions
var Question = function(options) {
    this.choices = options.choices; // choices
    this.correctChoice = options.correctChoice; // this correct
    this.answer = null; // this what the user chooses
};

Question.prototype = {
    setAnswer: function(choice) {
        this.answer = choice;
    },
    isCorrect: function() {
        return this.answer == this.correctChoice;
    }
};

var quiz = new Quiz([
    new Question({
        choices: ["Verdana", "Garamond", "Monotype"],
        correctChoice: "Garamond"
    }),
    new Question({
        choices: ["Baskerville", "Sans-serif", "Helvetica"],
        correctChoice: "Helvetica"
    }),
    new Question({
        choices: ["Goudy Old Style", "Serifa", "Times"],
        correctChoice: "Times"
    }),
    new Question({
        choices: ["Verdana", "Verdy", "Script"],
        correctChoice: "Verdana"
    }),
    new Question({
        choices: ["Comic Sans", "Trade Gothic", "Arial"],
        correctChoice: "Arial"
    })
]);

// Render font for each question
var renderText = function(question) {
    $('.text').css('font-family', question.correctChoice);
        renderText(quiz.getCurrentQuestion());
};

// Button
var renderButtons = function(question) { // set the answer on the question object
    $('button.choice').each(function(i) {
        $(this).text(choices[i]);
        renderButtons(quiz.getCurrentQuestion());
    });
};

$('button.choice').click(function(e) {
    var choice = $(e.target).text();
    var question = quiz.getCurrentQuestion(); 
    // check if the answer is right and update question number and score
    question.answer = choice; // pass the user's choice to the question object
    $('.questionCount').text(quiz.getTotalCorrect());
    $('.scorePercentage').text(quiz.getScore());
    quiz.getNextQuestion(); // load the next question
    renderText(quiz.getCurrentQuestion()); // render the new font
});

// Feedback


var wrong = function(text, color){ /*--- to change the feedback everytime user enters number ---*/
    $(".feedback").text("Wrong!");
}

var introLine = function(text, color){ /*--- to change the feedback everytime user enters number ---*/
    $(".feedback").text("Let the games begin!");
}

// Restart button
$(".restartGame").click(function(){
    $('.questionCount').text("1");
    $('.scorePercentage').text("0");
    //Reset First question to Garamond
});

});
