const quiz = [
    {
        question: "Q1: What is the answer?",
        a: "Answer 1",
        b: "Answer 2",
        c: "Answer 3",
        d: "Answer 4",
        ans: "ans1"
    },
    {
        question: "Q2: What is the answer?",
        a: "Answer 1",
        b: "Answer 2",
        c: "Answer 3",
        d: "Answer 4",
        ans: "ans2"
    },
    {
        question: "Q3: What is the answer?",
        a: "Answer 1",
        b: "Answer 2",
        c: "Answer 3",
        d: "Answer 4",
        ans: "ans3"
    },
    {
        question: "Q4: What is the answer?",
        a: "Answer 1",
        b: "Answer 2",
        c: "Answer 3",
        d: "Answer 4",
        ans: "ans4"
    },
]
const question = document.querySelector('.question');
const option1 = document.querySelector('#option1');
const option2 = document.querySelector('#option2');
const option3 = document.querySelector('#option3');
const option4 = document.querySelector('#option4');
const submit = document.querySelector('#submit');
const answers = document.querySelectorAll('.answer');
const showscore = document.querySelector('#showscore');
const scoresecured = document.querySelector('#score');

let questionCount = 0;
let score = 0;

const loadQuestion = () =>{
    question.innerText = quiz[questionCount].question;
    option1.innerText =  quiz[questionCount].a;
    option2.innerText =  quiz[questionCount].b;
    option3.innerText =  quiz[questionCount].c;
    option4.innerText =  quiz[questionCount].d;
};
loadQuestion();

const getCheckAnswer = () => {
    let answer;
    answers.forEach((curAns)=>{
        if(curAns.checked){
            answer = curAns.id;
        }
    })
    return answer;
};

const deselectAll = ()=>{
    answers.forEach((curAns) => {
        curAns.checked = false;
    })
};

submit.addEventListener('click', () => {
    const checkAnwer = getCheckAnswer();
    console.log(checkAnwer);

    if(checkAnwer === quiz[questionCount].ans){
        score++;
    };

    questionCount++;

    deselectAll();

    if(questionCount < quiz.length){
        loadQuestion();
    }else{
        scoresecured.innerText = score;
        showscore.classList.remove('scorearea');
    }
});
