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
    answer: function(choice) {
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
var choices = quiz.questions[0].choices; // set the answer on the question object
$('button.choice').each(function(i) {
    $(this).text(choices[i]);
}); 

$('button.choice').click(function(e) {
    var choice = $(e.target).text();
    var question = quiz.getCurrentQuestion(); 
    // check if the answer is right and update question number and score
    if (Question.answer == choice) {
        getTotalCorrect = $('.questionCount').text(getTotalCorrect+1); 
        getScore = $('.scorePercentage').text(getScore);
    }
    else {
        getTotalCorrect = $('.questionCount').text(getTotalCorrect+0); 
        getScore = $('.scorePercentage').text(getScore);
    }
    // then go to the next question
    getNextQuestion();
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
    // reset the quiz
    introLine(); //Replaces current header
});



});
