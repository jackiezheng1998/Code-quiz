var timeEl = document.querySelector(".time");

var mainEl = document.getElementById("main");

var secondsLeft = 60;

function setTime() {

  var timerInterval = setInterval(function () {
    secondsLeft--;
    timeEl.textContent = secondsLeft + " seconds left";
    if (secondsLeft === 0) {
      clearInterval(timerInterval);
      alert("Time's Up!");
      sendMessage();
    }
  }, 1000)
}

setTime();


var myQuestions = [
    {
        question: "What element is a container for all the head elements, and may include the document title, scripts, styles, meta information, and more?",
        answers: {
            a: '<body></body>',
            b: '<br></br>',
            c: '<head></head>',
            d: '<title></title>'
        },
        correctAnswer: 'b'    
    },
    {
        question: "What tag defines the body of the HTML document, and usually includes all the contents such as the text, hyperlinks, images, tables, lists, and more?",
        answers: {
            a: '<body></body>',
            b: '<title></title>',
            c: '<head></head>',
            d: '<br></br>'
        },
        correctAnswer: 'a' 
    },
    {
        question: "What tag is used to define a container for an external app or plug-in?",
        answers: {
            a: '<caption>',
            b: '<!DOCTYPE>',
            c: '<embed>',
            d: '<code>'
        },
        correctAnswer: 'c' 
    },
    {
        question: "What tag is used to define a table or image notation (caption)?",
        answers: {
            a: '<code>',
            b: '<embed>',
            c: '<caption>',
            d: '<!DOCTYPE>'
        },
        correctAnswer: 'c' 
    },
    {
        question: "What tag is used to render or transform text into an emphasized (italics) version?",
        answers: {
            a: '<strong>',
            b: '<em>',
            c: '<a>',
            d: '<blockquote>'
        },
        correctAnswer: 'b' 
    },
    {
        question: "What tag is used to underline a word or line of text?",
        answers: {
            a: '<li>',
            b: '<u>',
            c: '<s>',
            d: '<ul>'
        },
        correctAnswer: 'b' 
    },
    {
        question: "What tag is used to specify a section of text that provides an example of computer code?",
        answers: {
            a: '<!DOCTYPE>',
            b: '<caption>',
            c: '<code>',
            d: '<embed>'
        },
        correctAnswer: 'c' 
    },
    {
        question: "What tag is used to specify a section of text that has been quoted from another source?",
        answers: {
            a: '<blockquote>',
            b: '<em>',
            c: '<strong>',
            d: '<a>'
        },
        correctAnswer: 'a' 
    },
    {
        question: "What tag is used to define an unordered list that is bulleted?",
        answers: {
            a: '<ul>',
            b: '<u>',
            c: '<s>',
            d: '<li>'
        },
        correctAnswer: 'a' 
    },
];   
