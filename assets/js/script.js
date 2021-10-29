/**The structure for the quiz
 * the question, score keeping 
 */

let startButton = document.getElementById('start-button');
let quizDiv = document.getElementById('quiz');
let questionDiv = document.getElementById('question');
let answerButtons = document.getElementById('answer');
let randomQuestion, currentQuestionIndex

startButton.addEventListener('click', goGame);


//The quiz game function
function goGame() {
    console.log('started')
    randomQuestion = question.sort(() => Math.random() - .5);
    currentQuestionIndex = 0;
    setNextQuestion();
}

//Setting the next question
function setNextQuestion() {
    viewQuestion(randomQuestion[currentQuestionIndex]);
}

//Showing the question
function viewQuestion(question) {
    questionDiv.innerText = question.question
    question.answers.forEach(answer => {
        let button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('btn')
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click', selectAnswer)
    });
}

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