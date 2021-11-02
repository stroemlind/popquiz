/**The username registration form
 * called when the user registrer their username 
 * and starts the game
 */

/*let form = document.getElementById('form');
let buttonStartGame = document.getElementById('showtime-btn');
let usernameList = [];

buttonStartGame.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
    event.preventDefault();

    let username = docuemnt.getElementById('username').value;
        
    if(usernameList.includes(username)) {
            alert(`Please choose a username`);
    } else {
            usernameList.push(username);
            form.submit();
            console.log(usernameList);
    }


    localStorage.setItem();
}

console.log(usernameList);*/
 
 /*//When submit button clicked, take user to the game 
 // When the user click the button to submit username and start the quiz
 let buttons = document.getElementsByTagName('button');
 
 for (let button of buttons) {
     button.addEventListener('click', function () {
         if (this.getAttribute('data-type') === 'submit') {
             form.submit();
         }
     });
 }
 
 // When user press "Enter"-key to submit username and start the quiz
 document.getElementsByClassName('username').addEventListener('keydown', function(event) {
     if (event.key === 'Enter') {
         form.submit();
     }
 });*/
 

/**The structure for the quiz with
 * the question, 
 * game functions, 
 * score keeping and
 * showing final result
 */

//Getting elements from the game.html file
let startButton = document.getElementById('start-button');
let nextButton = document.getElementById('submitQuiz');
let submitButton = document.getElementById('done');
let controlButtons = document.getElementById('control-btns');
let quizDiv = document.getElementById('quiz');
let questionDiv = document.getElementById('question');
let answerButtons = document.getElementById('answer');
let trackScore = document.getElementById('score-tracking');
let resultDiv = document.getElementById('result');
let resetButton = document.getElementById('reset');
let randomNumber;
let usedQuestions = [];

answerButtons.classList.add('hide');

 //The question for the quiz
 let quizQuestion = [
    {
        question: 'Who is the hit-making producer behind Britney Spears song “... Baby One More Time”?',
        answers: [
            {text: 'Max Martin', correct: true},
            {text: 'Rick Rubin', correct: false},
            {text: 'Mark Ronson', correct: false}
        ],
    },
    {
        question: 'Which of the following songs is not a song released by the group EXO?',
        answers: [
            {text: 'Growl', correct: false},
            {text: 'Wolf', correct: false},
            {text: 'Howl', correct: true}
        ],
    },
    {
        question: 'What year did ABBA release their song “Dancing Queen”?',
        answers: [
            {text: '1974', correct: false},
            {text: '1976', correct: true},
            {text: '1979', correct: false}
        ],
    },
    {
        question: 'On which album did Prince release the song “Let’s Go Crazy”?',
        answers: [
            {text: 'Parade', correct: false},
            {text: 'Purple Rain', correct: true},
            {text: 'Around the World in a Day', correct: false}
        ],
    },
    {
        question: 'What’s the name of Harry Styles debut song?',
        answers: [
            {text: 'Sign of the Times', correct: true},
            {text: 'Sweet Creature', correct: false},
            {text: 'Lights Up', correct: false}
        ],
    },
    {
        question: 'Which artist wants us all to live a “Lush life”?',
        answers: [
            {text: 'Dua Lipa', correct: false},
            {text: 'Taylor Swift', correct: false},
            {text: 'Zara Larsson', correct: true}
        ],
    },
    {
        question: 'With a music video that got as much attention as their hit song “Take On Me”, in 1985, A-HA gained international recognition. Do you know which country they are from?',
        answers: [
            {text: 'Sweden', correct: false},
            {text: 'Norway', correct: true},
            {text: 'Denmark', correct: false}
        ],
    },
    {
        question: 'Coldplay released a song together with BTS. What\'s the name of that song?',
        answers: [
            {text: 'Univers', correct: true},
            {text: 'Army', correct: false},
            {text: 'Butter', correct: false}
        ],
    },
    {
        question: 'Before being a solo artist, Camila Cabello was in a group, which group?',
        answers: [
            {text: 'Little Mix', correct: false},
            {text: 'Fifth Harmony', correct: true},
            {text: 'Blackpink', correct: false}
        ],
    },
    {
        question: 'Which year did the group Backstreet Boys form?',
        answers: [
            {text: '1995', correct: false},
            {text: '1993', correct: true},
            {text: '1996', correct: false}
        ],
    }
];

let quizCopy = quizQuestion.slice();


//Game buttons calling event

startButton.addEventListener('click', goGame);
nextButton.addEventListener('click', checkAnswer);
submitButton.addEventListener('click', checkAnswer);
resetButton.addEventListener('click', reset);

//The quiz game functions

//Picks a random question everytime someone starts the game
function pickQuestion() {

    if(quizQuestion.length == 1) {
        submitButton.classList.remove('hide');
        nextButton.classList.add('hide');
    } else if(quizQuestion.length == 0) {
        endGame();
    }

    //Show a random question everytime the quiz starts
    if(quizQuestion.length !== 0) {
        randomNumber = Math.floor(Math.random() * quizQuestion.length);

        document.getElementById('question').innerHTML = quizQuestion[randomNumber].question;
        document.getElementById('a1').innerText = quizQuestion[randomNumber].answers[0].text;
        document.getElementById('a2').innerText = quizQuestion[randomNumber].answers[1].text;
        document.getElementById('a3').innerText = quizQuestion[randomNumber].answers[2].text;
    
        console.log('First');

        usedQuestions.push(quizQuestion[randomNumber]);
        quizQuestion.splice(randomNumber, 1);
    }
    
}

//Checks if the answer is correct or incorrect
function checkAnswer() {
    let answer = document.getElementsByName('answer');
    for(let i = 0; i < answer.length; i++) {
        if(answer[i].checked) {
            if(quizCopy[randomNumber].answers[i].correct) {
                quizCopy.splice(randomNumber, 1);
                incrementScore();
            } else {
                quizCopy.splice(randomNumber, 1);
                wrongScore();
            }
        }
    }
}

//Score tracking 
function incrementScore() {
    let oldScore = parseInt(document.getElementById('correct').innerText);
    document.getElementById('correct').innerText = ++oldScore;
    pickQuestion();
}

function wrongScore() {
    let oldScore = parseInt(document.getElementById('wrong').innerText);
    document.getElementById('wrong').innerText = ++oldScore;
    pickQuestion();
}

//When all questions has been answered 
function endGame() {
    //Add and remove class hide to only show user result
    quizDiv.classList.add('hide');
    questionDiv.classList.add('hide');
    answerButtons.classList.add('hide');
    controlButtons.classList.add('hide');
    resultDiv.classList.remove('hide');

    //Get the users correct answered score and show with username
    let yourResult = document.getElementById('your-score');

    yourResult.innerText = `is a total of `+ parseInt(document.getElementById('correct').innerText) + ` correct answers`;

    console.log('result');

}

//Reset to a new game
function reset() {
    location.reload();
}

//Starts the game
function goGame() {
    console.log('started');
    answerButtons.classList.remove('hide');
    startButton.classList.add('hide');
    nextButton.classList.remove('hide');
    pickQuestion();
}