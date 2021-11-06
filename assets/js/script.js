/* jshint esversion: 8 */

if (location.pathname === '/popquiz/' || location.pathname === '/popquiz/index.html') {
    /**
     * The username registration form
     * called when the user registrer their username
     * and starts the game
     */

    // Adds username to local storage
    let form = document.querySelector('.username-form');

    function addUser(event) {
        event.preventDefault(); // prevent the form from submitting
        localStorage.setItem('username', this.querySelector('[name=username]').value); // save the username
        window.location = '/popquiz/game.html'; // direct user to the game page
    }

    form.addEventListener('submit', addUser);

} else {

    /**
     * The structure for the quiz with
     * the question,
     * game functions,
     * score keeping and
     * showing final result
     */

    // Getting elements from the game.html file
    let startButton = document.getElementById('start-button');
    let nextButton = document.getElementById('submitQuiz');
    let submitButton = document.getElementById('done');
    let controlButtons = document.getElementById('control-btns');
    let quizDiv = document.getElementById('quiz');
    let questionDiv = document.getElementById('question');
    let answerButtons = document.getElementById('answer');
    let answers = document.querySelectorAll("input[name='answer']");
    let resultDiv = document.getElementById('result');
    let resetButton = document.getElementById('reset');
    let randomNumber;
    let usedQuestions = [];

    let quizCopy = quizQuestion.slice();

    document.getElementById("answer").classList.add('hide');

    // Game buttons calling event
    startButton.addEventListener('click', goGame);
    nextButton.addEventListener('click', checkAnswer);
    submitButton.addEventListener('click', checkAnswer);
    resetButton.addEventListener('click', reset);

    // The quiz game functions

    // Picks a random question everytime someone starts the game
    function pickQuestion() {

        // Unchecks radio input when going to the next question
        answers.forEach(answer => {
            // remove the previous true/false answer classes
            answer.classList.remove("true", "false");
            if (answer.checked) {
                answer.checked = false;
            }
        });

        //Statement to only show 10 questions each game
        if (quizQuestion.length === 7) {
            submitButton.classList.remove('hide');
            nextButton.classList.add('hide');
        } else if (quizQuestion.length === 0 || quizQuestion.length <= 6) {
            endGame();
        }

        //Show a random question everytime the quiz starts
        if (quizQuestion.length !== 0) {
            randomNumber = Math.floor(Math.random() * quizQuestion.length);

            // add the question to HTML
            document.getElementById('question').innerHTML = quizQuestion[randomNumber].question;

            // add the answer choices to the HTML
            document.getElementById('a1').innerText = quizQuestion[randomNumber].answers[0].text;
            document.getElementById('a2').innerText = quizQuestion[randomNumber].answers[1].text;
            document.getElementById('a3').innerText = quizQuestion[randomNumber].answers[2].text;

            // add the appropriate class if the answer is correct (true) or incorrect (false)
            document.querySelector("input[value='a1']").classList.add(quizQuestion[randomNumber].answers[0].correct);
            document.querySelector("input[value='a2']").classList.add(quizQuestion[randomNumber].answers[1].correct);
            document.querySelector("input[value='a3']").classList.add(quizQuestion[randomNumber].answers[2].correct);

            usedQuestions.push(quizQuestion[randomNumber]);
            quizQuestion.splice(randomNumber, 1);
        }
    }

    //Checks if the answer is correct or incorrect
    function checkAnswer() {
        answers.forEach(answer => {
            // check if the radio button is "checked"
            if (answer.checked) {
                // check if it contains "true" as the class
                if (answer.classList.contains("true")) {
                    incrementScore();
                } else {
                    wrongScore();
                }
                // remove this question from the options (avoid duplicates)
                quizCopy.splice(randomNumber, 1);
            }
        });
    }

    // Score tracking
    // Code taken from Code Institute Love Math Project
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

    // When all questions has been answered
    function endGame() {
        // Add and remove class hide to only show user result
        quizDiv.classList.add('hide');
        questionDiv.classList.add('hide');
        answerButtons.classList.add('hide');
        controlButtons.classList.add('hide');
        resultDiv.classList.remove('hide');

        // Get the users correct answered score and show with username
        let yourResult = document.getElementById('your-score');

        yourResult.innerText = localStorage.getItem('username') + ` you got a total of ` + parseInt(document.getElementById('correct').innerText) + ` correct answers`;
    }

    // Reset to a new game
    function reset() {
        location.reload();
    }

    // Starts the game
    function goGame() {
        document.getElementById("answer").classList.remove('hide');
        //answerButtons.classList.remove('hide');
        //startButton.classList.add('hide');
        document.getElementById('start-button').classList.add('hide');
        //nextButton.classList.remove('hide');
        document.getElementById('submitQuiz').classList.remove('hide');
        pickQuestion();
    }
}