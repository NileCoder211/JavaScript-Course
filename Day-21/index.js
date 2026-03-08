
const quizData = [
    {
        question: "What does DOM stand for?",
        options: [
            "Document Order Model",
            "Document Object Model",
            "Data Object Method",
            "Direct Object Management"
        ],
        correct: 1
    },
    {
        question: "Which keyword is used to declare a variable in JavaScript?",
        options: [
            "var",
            "int",
            "string",
            "float"
        ],
        correct: 0
    },
    {
        question: "Which method converts a JSON string into a JavaScript object?",
        options: [
            "JSON.stringify()",
            "JSON.parse()",
            "JSON.convert()",
            "JSON.toObject()"
        ],
        correct: 1
    },
    {
        question: "Which symbol is used for single-line comments in JavaScript?",
        options: [
            "<!-- -->",
            "#",
            "//",
            "/* */"
        ],
        correct: 2
    },
    {
        question: "Which company developed JavaScript?",
        options: [
            "Microsoft",
            "Netscape",
            "Google",
            "Oracle"
        ],
        correct: 1
    },
    {
        question: "What is the result of 2 + '2' in JavaScript?",
        options: [
            "4",
            "22",
            "NaN",
            "undefined"
        ],
        correct: 1
    },
    {
        question: "Which method adds an element to the end of an array?",
        options: [
            "push()",
            "pop()",
            "shift()",
            "unshift()"
        ],
        correct: 0
    },
    {
        question: "Which keyword is used to define a constant in JavaScript?",
        options: [
            "let",
            "var",
            "constant",
            "const"
        ],
        correct: 3
    },
    {
        question: "What does '===' compare?",
        options: [
            "Value only",
            "Type only",
            "Value and type",
            "Neither value nor type"
        ],
        correct: 2
    },
    {
        question: "Which method removes the last element from an array?",
        options: [
            "shift()",
            "pop()",
            "splice()",
            "remove()"
        ],
        correct: 1
    }
];



let questions = [...quizData].sort(()=>Math.random() -0.5);
let currentQuestion = 0;
let score = 0;
let timer;
let timeLeft;

const questionEl =document.getElementById("question");
const optionsEl =document.getElementById("options");
const nextBtn =document.getElementById("next-btn");
const timerEl =document.getElementById("timer");
const resultEl =document.getElementById("result");


function  loadQuestion(){


    clearInterval(timer);
    timeLeft = 15;
    updateTimer();
    timer = setInterval(countdown, 1000);

    const q = questions[currentQuestion];
    questionEl.textContent = `Q${currentQuestion + 1}, ${q.question}`
    optionsEl.innerHTML = "";

    q.options.forEach((option, index)=>{
        const btn = document.createElement("button");
        btn.textContent = option;
        btn.classList.add("option-btn");
        btn.addEventListener("click", () => selectAnswer(index, true))
        optionsEl.appendChild(btn);
    });

    nextBtn.style.display = "none"
}



function countdown(){
    timeLeft--;
    updateTimer();
    
    if(timeLeft === 0){
        clearInterval(timer);
        selectAnswer(questions[currentQuestion]?.correct, false)
    }
}




function updateTimer(){
    timerEl.textContent = `🕒 ${timeLeft}`;
}


function selectAnswer(index, shouldScore){
    clearInterval(timer);
    const q = questions[currentQuestion];
    const buttons = document.querySelectorAll(".option-btn");

    buttons.forEach(btn => btn.disabled = true);

    if(index === q.correct){
        shouldScore && score++;
        buttons[index].classList.add("correct")
    }else{
         buttons[index].classList.add("wrong");
          buttons[q.correct].classList.add("correct");
    }
     nextBtn.style.display = "inline-block";
}


nextBtn.addEventListener("click", ()=>{
    currentQuestion++;
    if(currentQuestion< questions.length){
        loadQuestion();
    }else{
        // show results
        showResult();
        
    }
});


function showResult(){
      nextBtn.style.display = "none";
    const highScore = localStorage.getItem("quizHighScore") || 0;

    const isNew = score > highScore;

    if(isNew){
        localStorage.setItem("quizHighScore", score)
    }

    resultEl.innerHTML = `
    <h2>Hurray!!! Quiz Completed</h2>
    <p>You have Scored ${score} out of ${questions.length} questions</p>
    <p>Highest Score: ${Math.max(score, highScore)}</p>
    ${isNew ? "<p>Hey, New High Score!${score}</p>" : ""}
    <button onclick="location.reload()"> Restart Quiz</button>
    `
}

loadQuestion();
