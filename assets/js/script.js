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

