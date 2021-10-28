/**The username registration form
 * called when the user registrer their username 
 * and starts the game
 */

let form = document.getElementsByClassName('username-form');
form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
    event.preventDefault();

    let username = [];

    for (let name in username) {
        name = document.getElementsByClassName('username').value;
        username.push(name);
    }

    form.submit();

    console.log(username);
}

//When submit button clicked, take user to the game 
// When the user click the button to submit username and start the quiz
let buttons = document.getElementsByTagName('button');

for (let button of buttons) {
    button.addEventListener('click', function () {
        if (this.getAttribute('data-type') === 'submit') {
            goQuiz();
        }
    });
}

// When user press "Enter"-key to submit username and start the quiz
document.getElementsByClassName('username').addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        GoQuiz();
    }
});

/**The structure for the quiz
 * the question, score keeping 
 */

//The question form the quiz
let quizQuestion = [
    {
        question: 'Who is the hit-making producer behind Britney Spears song “... Baby One More Time”?',
        answers: {
            a: 'Max Martin',
            b: 'Rick Rubin',
            c: 'Mark Ronson'
        },
        correctAnswer: 'a'
    },
    {
        question: 'Which of the following songs is not a song released by the group EXO?',
        answers: {
            a: 'Growl',
            b: 'Wolf',
            c: 'Howl'
        },
        correctAnswer: 'c'
    },
    {
        question: 'What year did ABBA release their song “Dancing Queen”?',
        answers: {
            a: '1974',
            b: '1976',
            c: '1979'
        },
        correctAnswer: 'b'
    },
    {
        question: 'On which album did Prince release the song “Let’s Go Crazy”?',
        answers: {
            a: 'Parade',
            b: 'Purple Rain',
            c: 'Around the World in a Day'
        },
        correctAnswer: 'b'
    },
    {
        question: 'What’s the name of Harry Styles debut song?',
        answers: {
            a: 'Sign of the Times',
            b: 'Sweet Creature',
            c: 'Lights Up'
        },
        correctAnswer: 'a'
    },
    {
        question: 'Which artist wants us all to live a “Lush life”?',
        answers: {
            a: 'Dua Lipa',
            b: 'Taylor Swift',
            c: 'Zara Larsson'
        },
        correctAnswer: 'c'
    },
    {
        question: 'With a music video that got as much attention as their hit song “Take On Me”, in 1985, A-HA gained international recognition. Do you know which country they are from?',
        answers: {
            a: 'Sweden',
            b: 'Norway',
            c: 'Denmark'
        },
        correctAnswer: 'b'
    },
    {
        question: 'Coldplay released a song together with BTS. What\'s the name of that song?',
        answers: {
            a: 'Univers',
            b: 'Army',
            c: 'Butter'
        },
        correctAnswer: 'a'
    },
    {
        question: 'Before being a solo artist, Camila Cabello was in a group, which group?',
        answers: {
            a: 'Little Mix',
            b: 'Fifth Harmony',
            c: 'Blackpink'
        },
        correctAnswer: 'b'
    },
    {
        question: 'Which year did the group Backstreet Boys form?',
        answers: {
            a: '1995',
            b: '1993',
            c: '1996'
        },
        correctAnswer: 'b'
    }
]