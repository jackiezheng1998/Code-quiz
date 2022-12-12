// GIVEN I am taking a code quiz
// WHEN I click the start button
// THEN a timer starts and I am presented with a question
// WHEN I answer a question
// THEN I am presented with another question
// WHEN I answer a question incorrectly
// THEN time is subtracted from the clock
// WHEN all questions are answered or the timer reaches 0
// THEN the game is over
// WHEN the game is over
// THEN I can save my initials and score

// My array of questions for the quiz.
var questions = [
    {
        question: "What element is a container for all the head elements, and may include the document title, scripts, styles, meta information, and more?",
        choices: [
            "a: <body></body>",
            "b: <br></br>",
            "c: '<head></head>",
            "d: '<title></title>"],
            answer: "b: <br></br>"
        },
           
    {
        question: "What tag defines the body of the HTML document, and usually includes all the contents such as the text, hyperlinks, images, tables, lists, and more?",
        choices: [
            "a: <body></body>",
            "b: <title></title>",
            "c: <head></head>",
            "d: <br></br>"],
            answer: "a: <body></body>"
        },
        
    {
        question: "What tag is used to define a container for an external app or plug-in?",
        choices: [
            "a: <caption>",
            "b: <!DOCTYPE>",
            "c: <embed>",
            "d: <code>"],
            answer: "c: <embed>" 
        },
        
    {
        question: "What tag is used to define a table or image notation (caption)?",
        choices: [
           " a: <code>",
            "b: <embed>",
            "c: <caption>",
            "d: <!DOCTYPE>"],
            answer: "c: <caption>" 
        },
        
    {
        question: "What tag is used to render or transform text into an emphasized (italics) version?",
        choices: [
            "a: <strong>",
            "b: <em>",
            "c: <a>",
            "d: <blockquote>"],
            answer: 'answers.b'
        },
         
    {
        question: "What tag is used to underline a word or line of text?",
        choices: [
            "a: <li>",
            "b: <u>",
            "c: <s>",
            "d: <ul>"],
            answer: "b: <u>"
        },
         
    {
        question: "What tag is used to specify a section of text that provides an example of computer code?",
        choices: [
            "a: <!DOCTYPE>",
            "b: <caption>",
            "c: <code>",
            "d: <embed>"],
            answer: "c: <code>" 
        },
        
    {
        question: "What tag is used to specify a section of text that has been quoted from another source?",
        choices: [
            "a: <blockquote>",
            "b: <em>",
            "c: <strong>",
            "d: <a>"],
            answer: "a: <blockquote>"
        },
         
    {
        question: "What tag is used to define an unordered list that is bulleted?",
        choices: [
            "a: <ul>",
            "b: <u>",
            "c: <s>",
            "d: <li>"],
            answer: "a: <ul>"
        },    
];   


// grab references to elements
var timer = document.getElementById("timer");
var timeLeft = document.getElementById("timeLeft");
var timesUp = document.getElementById("timesUp");

var startDiv = document.getElementById("start");
var startQuizBtn = document.getElementById("start-quiz-button");

var questionDiv = document.getElementById("questionDiv");
var questionTitle = document.getElementById("questionTitle");
var choiceA = document.getElementById("btn0");
var choiceB = document.getElementById("btn1");
var choiceC = document.getElementById("btn2");
var choiceD = document.getElementById("btn3");
var answerCheck = document.getElementById("answerCheck");

var summary = document.getElementById("summary");
var submitInitialBtn = document.getElementById("submitInitialBtn");
var initialInput = document.getElementById("initialInput");
var everything = document.getElementById("everything");

var highScoreSection = document.getElementById("highScoreSection");
var finalScore = document.getElementById("finalScore");

var goBackBtn = document.getElementById("goBackBtn");
var clearHighScoreBtn = document.getElementById("clearHighScoreBtn"); 
var viewHighScore = document.getElementById("viewHighScore");
var listOfHighScores = document.getElementById("listOfHighScores");

// define other variables
var correctAns = 0;
var questionNum = 0;
var scoreResult;
var questionIndex = 0;


// Whenver I click the start button, the timer starts
var totalTime = 99;
function newQuiz() {
    questionIndex = 0;
    totalTime = 100;
    timeLeft.textContent = totalTime;
    initialInput.textContent = "";

    startDiv.style.display = "none";
    questionDiv.style.display = "block";
    timer.style.display = "block";
    timesUp.style.display = "none";

    var startTimer = setInterval(function() {
        totalTime--;
        timeLeft.textContent = totalTime;
        if(totalTime <= 0) {
            clearInterval(startTimer);
            if (questionIndex < questions.length - 1) {
                gameOver();
            }
        }
    },1000);

    showQuiz();
};

// Show the quiz
function showQuiz() {
    nextQuestion();
}

function nextQuestion() {
    questionTitle.textContent = questions[questionIndex].question;
    choiceA.textContent = questions[questionIndex].choices[0];
    choiceB.textContent = questions[questionIndex].choices[1];
    choiceC.textContent = questions[questionIndex].choices[2];
    choiceD.textContent = questions[questionIndex].choices[3];
}

// Checks the question if its right or wrong.
function checkAnswer(answer) {

    var lineBreak = document.getElementById("lineBreak");
    lineBreak.style.display = "block";
    answerCheck.style.display = "block";

    if (questions[questionIndex].answer === questions[questionIndex].choices[answer]) {
        // Adds 1 point if user answers correctly
        correctAns++;
        // console.log(correctAns);
        answerCheck.textContent = "Correct!";
    } else {
        // Removes 10 seconds if user answers incorrectly
        totalTime -= 10;
        timeLeft.textContent = totalTime;
        answerCheck.textContent = "Incorrect! The correct answer is: " + questions[questionIndex].answer;
    }

    questionIndex++;
    // Repeats the process for rest of questions 
    if (questionIndex < questions.length) {
        nextQuestion();
    } else {
        // Ends the quiz when there is no more questions
        gameOver();
    }
}

function chooseA() { checkAnswer(0); }

function chooseB() { checkAnswer(1); }

function chooseC() { checkAnswer(2); }

function chooseD() { checkAnswer(3); }

// Runes the game over function when time or questions run out
function gameOver() {
    summary.style.display = "block";
    timesUp.style.display = "block";

    // Reveals final score
    finalScore.textContent = correctAns;
}

// Enter initals for scoreboard
function storeHighScores(event) {
    event.preventDefault();

    // Put initals here with default message saying to enter intials
    if (initialInput.value === "") {
        alert("Please enter your initials!");
        return;
    }  

    // Puts info into the local storage
    var savedHighScores = localStorage.getItem("high scores");
    var scoresArray;

    if (savedHighScores === null) {
        scoresArray = [];
    } else {
        scoresArray = JSON.parse(savedHighScores)
    }

    var userScore = {
        initials: initialInput.value,
        score: finalScore.textContent
    };

    console.log(userScore);
    scoresArray.push(userScore);

    // How to store the local storage, ASK ABOUT THIS, CONFUSING.
    var scoresArrayString = JSON.stringify(scoresArray);
    window.localStorage.setItem("high scores", scoresArrayString);
    
    // Shoes the high score.
    showHighScores();
}

// function to show high scores
var i = 0;
function showHighScores() {

    highScoreSection.style.display = "block";

    var savedHighScores = localStorage.getItem("high scores");

    // Check if there is info in local storage or not ASK ABOUT THIS AS WELL, VERY CONFUSING EVEN WITH TUTOR EXPLANATION
    if (savedHighScores === null) {
        return;
    }
    console.log(savedHighScores);

    var storedHighScores = JSON.parse(savedHighScores);

    for (; i < storedHighScores.length; i++) {
        var eachNewHighScore = document.createElement("p");
        eachNewHighScore.innerHTML = storedHighScores[i].initials + ": " + storedHighScores[i].score;
        listOfHighScores.appendChild(eachNewHighScore);
    }
}

startQuizBtn.addEventListener("click", newQuiz);
choiceA.addEventListener("click", chooseA);
choiceB.addEventListener("click", chooseB);
choiceC.addEventListener("click", chooseC);
choiceD.addEventListener("click", chooseD);

submitInitialBtn.addEventListener("click", function(event){ 
    storeHighScores(event);
});

viewHighScore.addEventListener("click", function(event) { 
    showHighScores(event);
});

clearHighScoreBtn.addEventListener("click", function(){
    window.localStorage.removeItem("high scores");
    listOfHighScores.innerHTML = "High Scores Cleared!";
    listOfHighScores.setAttribute("style", "font-family: 'Archivo', sans-serif; font-style: italic;")
});