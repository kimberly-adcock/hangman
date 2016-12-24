//prompt for input
//take input and turn it into letters (array)
//random comupter guess (less any guesses already made)
//if in word, then show in correct space
//if not in word tally 1 wrong guess
//do over and over until word is completely guessed  OR x amount of tallys wrong
//show user that a word is guessed by alerting the word, or alert them that they won
//ask to play

var userWantsToPlay = prompt("Do you want to play hangman?");
var yessir = ["yes", "ok", "sure", "yup", "k", "why not"];

//random computer guess
function generateLetterGuess(guessedLetters) {
    var alphabet = "abcdefghijklmnopqrstuvwxyz";
    var alphabetLetters = alphabet.split("");
    var letters = removeLettersGuessed(alphabetLetters, guessedLetters);
    var index = Math.floor(Math.random() * letters.length);
    return letters[index];
}

//remove already guessed letters from the next random computer choice
function removeLettersGuessed(alphabetLetters, guessedLetters) {
    var index = 0;
    while (index < guessedLetters.length) {
        var letter = guessedLetters[index]
        var letterIndex = alphabetLetters.indexOf(letter)
        alphabetLetters.splice(letterIndex, 1);
        index++
    }
    return alphabetLetters;
}

function showGuesses(userLetters, guessedLetters) {
    var index = 0;
    var word = '';
    while (index < userLetters.length) {
        var letter = userLetters[index];
        if (guessedLetters.includes(letter)) {
            word += letter;
        } else {
            word += '*';
        }
        index++
    }
    return word;
}

//if user agrees to play, prompts for word choice and creates array out of word that the user choice -- if user says no, allows user to exit
if (yessir.includes(userWantsToPlay.toLowerCase())) {
    var userWord = prompt("Great, please choose your word, and I will try to guess it!")
    var userLetters = userWord.split("")
    var computerGuesses = [];
    var word = '*';
    var i = 26;
    while (word.indexOf('*') !== -1) {
        var computerChoice = generateLetterGuess(computerGuesses);
        computerGuesses.push(computerChoice);
        console.log('Computer guessed: ' + computerChoice);
        console.log('Computer guesses: ' + computerGuesses);
        word = showGuesses(userLetters, computerGuesses);
        console.log('Remaining: ' + word);
    }
    console.log('Computer guessed the word in ' + computerGuesses.length + ' tries');
}
else { alert("Maybe next time! Click Cancel to Exit") }
