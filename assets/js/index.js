/* jshint esversion: 8 */

/**The username registration form
     * called when the user registrer their username 
     * and starts the game
     */

    //Adds username to local storage 
    let form = document.querySelector('.username-form');

    function addUser(event) {
        event.preventDefault();

        localStorage.setItem('username', this.querySelector('[name=username]').value);

        window.location = 'game.html';
    }

    form.addEventListener('submit', addUser);