$(document).ready(function(){

var Quiz = function(questions) {
    this.questions = questions; // array of Questions.
    this.current = 0;
};
//
// $('.questionCount').text(total);
// $('.scorePercentage').text(correct / total * 100);

// Begin counter at 1 and score at 0
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

// buttons
var renderChoices = function(question) {
    $('button.choice').each(function(i) {
        $(this).text(question.choices[i]);
    });
};

var renderText = function(question) {
<<<<<<< HEAD
    this.fontStyle = question.fontStyle; // need to add the font-face style to the div.text element 
    this.loremText = question.loremText; // (we already have the lorem text there... and we can remove all those )
    $(".text").text(question); // section tags you have in your html
};
=======
    // need to add the font-face style to the div.text element 
    // (we already have the lorem text there... and we can remove all those )
    // section tags you have in your html
};

>>>>>>> 1eef972af8a8cdd3143d4515668f1d064612a237

$('button.choice').click(function(e) {
    var choice = $(e.target).text();
    var question = quiz.getCurrentQuestion();
    // set the answer on the question object
    // then go to the next question
    // then render the buttons and set the text font face
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

// render the button choices and set the text font-face


});
