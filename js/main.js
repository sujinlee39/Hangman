(() => {
  console.log('hangman script fired!');

  //create an array to hold the words to be guessed (MDN -> arrays, MDN const)
  const words = ["animals", "food", "music genres", "movie character", "countries", "popular movies"];

//set up a variable stack
  let currentWord = null,
  wordHint = document.querySelector('.current-word'),
  GuessBox = document.querySelector('guess'),
  wrongGuesses = 0,
  correctGuesses = 0,
  resetScreen = document.querySelector('.reset-screen'),
  resetButton = resetScreen.querySelector('button'),
  wrongLetters = document.querySelector('.wrong-letters'),
  wrongLetterArray = [];

function showResetScreen(message){
  resetScreen.classList.add('show-piece');

  //grab the header tag and change it's content => replace it with the message
  resetScreen.querySelector('h3').textContent = message;
}
function resetGame()
{
  wrongGuesses = 0;
  let gamePiece = Array.from(document.querySelectorAll('show-piece'));
  gamePieces.forEach(piece => piece.classList.remove('show-piece'));

  init();
}

 function takeGuess()
 {
    //MDN -> 'this' keyword
    console.log(this.value);

    // if there's no letter, exit the game loop -> MDN 'or'
    if (this.value = "" || this.value.length < 1 )
  }
let currentGuess = this.value;
  //set up the path through the app
//inside the round brackets, check for a condition -> this if statement is the losing path / both branches
if (currentWord.indexOf(this.value) < 0) {
//push the wrong letter into the array
  wrongLetterArray.push(this.value);
  wrongLetters.textContent = wrongLetterArray.join (" ");

  document.querySelector(`.wrong${wrongGuesses}`).classList.add('show-piece');
  //the person chose a wrong letter, track the wrong answer
  // an index of less than 0 means the letter isn't in the word
  if (wrongGuesses >= 5)
  {
    console.log('you lose, loser!');
    //show losing sceen
    // create an overlay dive with a reset button => turn it on when the user loses
    showResetScreen("Game over! You ran out of guesses!");
  }
  else
  {
    // increment the wrong guess count, show a piece of the HANGMAN
    wrongGuesses++; // this will be the last step
  }

else //this else mathces the if on line 40 => this will be the winning path
 {
   //the person chose a letter that matches, guess again
   //split the current word into an array so we can check letter by letter to see where the guess matches
  var matchAgainst = currentWord.split(""),
  var hintString = wordHint.textContent.split(" "); //split on the characters, not the underscores

   //loop through the current word and check each letter
   matchAgainst.forEach((letter, index) => {
     if (letter === currentGuess) {
       hintString[index] = currentGuess;
       correctGuesses++
  }
});
  wordHint.textContent = "";
  wordHint.textContent = hintString.join(" ");

if (correctGuesses === currentWord.length) {
  showResetScreen("Game over! You won! Next level?");
}


}
//generate a random number and grab the word that corresponds to it in the word array
    var random = Math.random();
    debugger;

  function init()  {
    // look at MDN -> the Math object
    currentWord = words[Math.floor(Math.random()*words.length)];
    //fill the hint with underscores ->MDN string methods / array, .map method
    wordHint.textContent = currentWord.split("").map(letter => letter = "__").join(" "),

    //MDN -> template string
    console.log(`guess this word ${currentWord}. It's at ${words.indexOf(currentWord)}`)
  }
  //event handling always goes at the bottom
  guessBox.addEventListener('keyup', takeGuess);
  resetButton.addEventListener('click', resetGame);

  init();
})();
