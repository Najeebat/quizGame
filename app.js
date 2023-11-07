let questions = [
    {
        question: "Who is the father of HTML?",
        answers: [
            { text: "Rasmus Lerdorf", correct: false },
            { text: "Tim Berners-Lee", correct: true },
            { text: "Brendan Eich", correct: false },
            { text: "Sergey Brin", correct: false },
        ]
    },

    {
        question: "HTML stands for __________ ?",
        answers: [
            { text: " HyperText Markup Language", correct: true },
            { text: "HyperText Machine Language", correct: false },
            { text: "HyperText Marking Language", correct: false },
            { text: "HighText Marking Language", correct: false },
        ]
    },

    {
        question: "In which part of the HTML metadata is contained?",
        answers: [
            { text: " head tag", correct: true },
            { text: "title tag", correct: false },
            { text: "html tag", correct: false },
            { text: "body tag", correct: false},
        ]
    },

    {
        question: " Which of the following is used to read an HTML page and render it?",       
         answers: [
            { text: "Web server", correct: false },
            { text: "Web network", correct: false },
            { text: "Web browser", correct: true },
            { text: "Web matrix", correct: false },
        ]
    },
];

let questionElement = document.getElementById("question");
let answerButtonElement = document.getElementById("answerButtons");
let startButton = document.getElementById("startButton");
let nextButton = document.getElementById("nextButton");
let playAgainButton = document.getElementById("playAgainButton");

let currentQuestionIndex = 0;
let score = 0;

startButton.addEventListener("click", startQuiz);
nextButton.addEventListener("click", nextQuiz);
playAgainButton.addEventListener("click", startQuiz);

nextButton.addEventListener("click", () => {
    currentQuestionIndex;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        // Display the score or perform other actions when the quiz ends.
    }
});


 

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
    startButton.style.display = "none";
    playAgainButton.style.display ="none" //hide display button at start

    answerButtonElement.style.display = "block"
}

function showQuestion() {
    let currentQuestion = questions[currentQuestionIndex];
    let questionNumber = currentQuestionIndex +1;
    questionElement.innerHTML = questionNumber + ". " + currentQuestion.question;

    while (answerButtonElement.firstChild) {
        answerButtonElement.removeChild(answerButtonElement.firstChild);
    }

    // this will clear the previous answer in the buttons and 
   // replace it with the current question and answer in app.js
    // answerButtonElement.innerHTML = "";

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtonElement.appendChild(button);

        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);

        
    });
    nextButton.style.display = "none";
}
function selectAnswer(e) {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";

    if (isCorrect) {
        selectedBtn.classList.add("correct");
        score += 1; //increase score by one of the correct answer
    } else {
        selectedBtn.classList.add("incorrect");
    }

    Array.from(answerButtonElement.children).forEach(button => {
        if (button.dataset.correct === "true") {
            button.classList.add("correct");
        }
        button.disabled = true;
    });

    
    nextButton.style.display = "block"; // Display the "Next" button
}


function showScore() {
    const percentageScore = Math.round((score / questions.length) * 100);
    questionElement.innerHTML = `You scored ${percentageScore}% !`;
    nextButton.style.display = "none";
    answerButtonElement.style.display = "none"
    nextButton.innerHTML = "Play Again";
    playAgainButton.style.display = "block"; //show the play again button
}




function nextQuiz(){
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length){
        showQuestion();
    } else {
        showScore();
    }

}


startQuiz();


