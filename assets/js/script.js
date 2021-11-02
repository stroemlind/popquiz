/* jshint esversion: 8 */

/**The username registration form
 * called when the user registrer their username 
 * and starts the game
 */

/*let form = document.getElementById('username');

let usernameList = JSON.parse(localStorage.getItem('usernameList')) || [];

form.addEventListener('submit', addUser);

function addUser(e) {
    event.preventDefault();

    let text = (this.element('[name=user]')).value;
    let user = {
        text
    }

    usernameList.push(user);
    this.reset();
}

function populateList(users = [], form) {
    users.map((name, i) => {
        return;
    }).join('');

    localStorage.setItem('usernameList', JSON.stringify(users));
}*/
 
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

/*if (location.href === "game.html") {
    all the game functionality;
} else {
    all the index functionality;
}*/

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
        randomNumber = Math.floor(Math.random() * 10);

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