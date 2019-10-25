// array of letters to choose from
var letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

// wins begin at 0
var wins = 0;

// losses begins at 0
var losses = 0;

// guesses left starts at 12
var guessesleft = 12;

// letters guessed empty array 
var lettersguessed = [];

// var mainletter = mainletter;

// getting random word from possiblewords 
mainletter = letters[Math.floor(Math.random() * letters.length)];
console.log(mainletter);

// generator function to call random letter

function generator() {
    mainletter = letters[Math.floor(Math.random() * letters.length)];
    console.log(mainletter);
}

// capturing the letters pressed by the player 

document.onkeyup = function (event) {
    var playerguess = event.key;
    console.log(playerguess);

    // if player guesses right, wins score+1, the game is reset, updates instructions
    if (playerguess === mainletter) {
        wins++;
        guessesleft = 12;
        lettersguessed = [];
        document.getElementById('instructions').innerHTML = "Wowz you guessed it!";
        generator()
    }
    // if player guesses wrong they lose a guess, add a letter to lettersguessed array, updates instructions
    if (playerguess !== mainletter) {
        guessesleft--;
        lettersguessed.push(playerguess);
        document.getElementById('lettersguessed').innerHTML = lettersguessed;
        document.getElementById('instructions').innerHTML = "Keep smashing the keyboard!";
        console.log(lettersguessed);
    }
    // if player loses by guesses left lowering to 0, game is reset, losses +1, documents the computer-chosen letter in the mainletterx div, updates instructions, resets game with my generator function
    if (guessesleft == 0) {
        losses++;
        lettersguessed = [];
        guessesleft = 12;
        document.getElementById('mainletterx').innerHTML = mainletter;
        document.getElementById('instructions').innerHTML = "You destroyed the keyboard. Smash another one!";
        generator()
    }


    // updates the wins, losses, guessesleft divs  
    document.getElementById("wins").innerHTML = wins;
    document.getElementById("losses").innerHTML = losses;
    document.getElementById("guessesleft").innerHTML = guessesleft;

}

