$(document).ready(function () {

    var area = $("#trivia-area");
    var timer;
    // var correct = 0; /* correct */
    // var incorrect = 0;
    var game = {
        correct: 0,  /* game.correct */
        incorrect: 0,
        counter: 60
    }

    var questions = [{
        question: "What was Batman's primary vehicle?",
        choices: ["Batcycle", "Batcopter", "Batmobile", "Batplane"],
        answer: "Batmobile"
    }, {
        question: "Who's Batman's worst enemy?",
        choices: ["Penguin", "Joker", "Catwoman", "Two-Face"],
        answer: "Joker"
    }, {
        question: "Where is Batman's established headquarters?",
        choices: ["Gotham Police Station", "Wayne Enterprises", "In a Cave", "In the Sky"],
        answer: "In a Cave"
    }, {
        question: "When Batman gets injured, who takes care of him?",
        choices: ["Robin", "Alfred", "Commissioner Gordon", "Batman Self-heals"],
        answer: "Alfred"
    }, {
        question: "What gadget is NOT in Batman's arsenal?",
        choices: ["Remote-Controlled Batarang", "Line-Launcher", "Smoke Pellets", "Personal Firearm"],
        answer: "Personal Firearm"
    }, {
        question: "What year did Batman make his first movie debut?",
        choices: ["1955", "1966", "1974", "1979"],
        answer: "1966"
    }, {
        question: "The Batsuit has evolved over they years how many times?",
        choices: ["4", "7", "10", "12"],
        answer: "10"
    }];


    $("#start").click(function () {
        start();
        check();
        result();
    });


    function start() {
        $("#start").remove();
        timer = setInterval(timer, 3000);
        $("#trivia-area").prepend("<h2>Time: <span id='counter-number'>30</span> Seconds</h2>");
        for (var i = 0; i < questions.length; i++) {
            area.append("<h2>" + questions[i].question + "</h2>");
            for (var j = 0; j < questions[j].choices.length; j++) {
                area.append("<input type='radio' name='question-" + i +
                    "' value='" + questions[i].choices[j] + "''>" + questions[i].choices[j]);
            }
            // create a submit button 
        };
        if (timer === 0) {
            check();
            result();
        }
    }


    // use submit button ID event listener to kick off the check function
    function check() {
        var inputs = are.children("input:checked");
        for (var i = 0; i < inputs.length; i++) {
            if ($(inputs[i]).val() === questions[i].correctAnswer) {
                game.correct++;
            } else {
                game.incorrect++;
            }
        }
    }

    function result() {
        clearInterval(timer);
        $("#quiz-area").remove();
        $("#quiz-area").html("<h2>All Done!</h2>");
        $("#quiz-area").append("<h3>Correct choices: " + correct + "</h3>");
        $("#quiz-area").append("<h3>Incorrect choices: " + incorrect + "</h3>");
    }


});

