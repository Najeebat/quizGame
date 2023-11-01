const questions = [
    {
        question: "Which is the largest animal in the world",
        answers: [
            { text: "Shark", correct: false },
            { text: "Blue whale", correct: true },
            { text: "Elephant", correct: false },
            { text: "Giraffe", correct: false },
        ]
    },

    {
        question: "Which is the smallest country in the world",
        answers: [
            { text: "Shark", correct: false },
            { text: "Blue whale", correct: true },
            { text: "Elephant", correct: false },
            { text: "Giraffe", correct: false },
        ]
    },

    {
        question: "Which is the largest animal in the world",
        answers: [
            { text: "Shark", correct: false },
            { text: "Blue whale", correct: true },
            { text: "Elephant", correct: false },
            { text: "Giraffe", correct: false },
        ]
    },

    {
        question: "Which is the largest animal in the world",        answers: [
            { text: "Shark", correct: false },
            { text: "Blue whale", correct: true },
            { text: "Elephant", correct: false },
            { text: "Giraffe", correct: false },
        ]
    },
];

const questionElement = document.getElementById("question");
const answerButtonElement = document.getElementById("answerButtons");
const nextButton = document.getElementById("nextButton");
// const scoreBoard = document.getElementById("score-board");

let currentQuestionIndex = 0;
let score = 0;

nextButton.addEventListener("click", () => {
    currentQuestionIndex++;
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
}

function showQuestion() {
    let currentQuestion = questions[currentQuestionIndex];
    let questionNumber = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNumber + ". " + currentQuestion.question;

    // this will clear the previous answer in the buttons and 
   // replace it with the current question and answer in app.js
    answerButtonElement.innerHTML = "";

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtonElement.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);


        button.addEventListener("click", () => {
            if (answer.correct) {
                score += 10;
            }
        });
        // answerButtonElement.appendChild(button);
    });
}
function selectAnswer(e) {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";

    if (isCorrect) {
        selectedBtn.classList.add("correct");
        score += 10;
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
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
}



function handleNextButton() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length ) {
        showQuestion();
    } else {
        showScore();
    }
}




nextButton.addEventListener("click", () => {
    if (currentQuestionIndex < questions.length) {
        handleNextButton();
    } else {
        startQuiz();
    }
});

startQuiz();

