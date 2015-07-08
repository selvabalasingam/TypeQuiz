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
        if (this.current < this.questions.length - 1) {
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
};

// Button
var renderButtons = function(question) { // set the answer on the question object
    var choices = question.choices; 
    $('button.choice').each(function(i) {
        $(this).text(choices[i]);
    });
};

$('button.choice').click(function(e) {
    var choice = $(e.target).text();
    var question = quiz.getCurrentQuestion(); 
    // check if the answer is right and update question number and score
    question.setAnswer(choice); // pass the user's choice to the question object
    $('.questionCount').text(quiz.getTotalCorrect());
    $('.scorePercentage').text(quiz.getScore());
    question = quiz.getNextQuestion(); // load the next question
    renderText(question); // render new font
    renderButtons(question); // render new button
});

// Restart button
$(".restartGame").click(function(){
    $('.questionCount').text("1");
    $('.scorePercentage').text("0");
    quiz.reset();
    //Reset First question to Garamond
    renderText(quiz.getCurrentQuestion());
    renderButtons(quiz.getCurrentQuestion());
});

// initialize
renderText(quiz.getCurrentQuestion());
renderButtons(quiz.getCurrentQuestion());

});
