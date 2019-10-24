// how to set attempts to appear as 12 instead of 11?
// options of letters to choose from
var letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
// need function that increases wins when a won is achieved 
var wins = 0;
// var that increases when loss is achieved 
var losses = 0;
// need function that shows guesses left 
var guessesleft = 12;
// need function that shows letters guessed 
var lettersguessed = [];

var mainletter = mainletter;
// getting random word from possiblewords 
mainletter = letters[Math.floor(Math.random() * letters.length)];
console.log(mainletter);
// checks to make sure computer chose a letters, works finally yay 

function generator() {
    mainletter = letters[Math.floor(Math.random() * letters.length)];
    console.log(mainletter);

}
generator

// capturing the letters pressed by the player 

document.onkeyup = function (event) {
    var playerguess = event.key;
    console.log(playerguess);
    // if player wins
    if (playerguess === mainletter) {
        wins++;
        guessesleft = 12;
        lettersguessed = [];

    }
    if (playerguess !== mainletter) {
        guessesleft--;
    }
}

    // 1. [Watch the demo](https://youtu.be/qTc45Lox97g).

    // 2. You're going to make a game just like the one in the video. Essentially, the app randomly picks a letter, and the user has to guess which letter the app chose. Put the following text on your page:

    // 3. Guess what letter I'm thinking of

    // 4. Wins: (# of times the user has guessed the letter correctly)

    // 5. Losses: (# of times the user has failed to guess the letter correctly after exhausting all guesses)

    // 6. Guesses Left: (# of guesses left. This will update)

    // 7. Your Guesses So Far: (the specific letters that the user typed. Display these until the user either wins or loses.)

    // 8. When the player wins, increase the Wins counter and start the game over again (without refreshing the page).

    // 9. When the player loses, increase the Losses counter and restart the game without a page refresh (just like when the user wins).