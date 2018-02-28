(() => {
  console.log('hangman script fired!');

  //create an array to hold the words to be guessed (MDN -> arrays, MDN const)
  const words = ["animals", "food", "music genres", "movie character", "countries", "popular movies"];

//set up a variable stack

  let currentWord = null,
  wordHint = document.querySelector('.current-word'),
  GuessBox = document.querySelector(.'guess'),
  wrongGuesses = 0;
    wordHint.textContent = currentWord.split("").map(letter => letter = ("__")).join(" ");
  //when we start the game, or restart it, do these things
  function takeGuess()
  {
    //MDN -> 'this' keyword
    console.log(this.value);

    // if there's no letter, exit the game loop -> MDN 'or'
    if (this.value = "" || this.value.length < 1 )
  }

  //set up the path through the app
//inside the round brackets, check for a condition
if (currentWord.indexOf(this.value < 0)) {
  //the person chose a wrong letter, track the wrong answer
  // an index of less than 0 means the letter isn't in the word
  if (wrongGuesses >= 5){
    console.log('you lose, loser!');
    //show losing sceen
    // create an overlay dive with a reset button => turn it on when the user loses
  } else {
    document.querySelector(`.wrong${wrongGuesses}`).classList.add('show-piece');

    // increment the wrong guess count, show a piece of the HANGMAN
    wrongGuesses++; // this will be the last step
  }

} else {
  //the person chose a letter that matches, guess again
}
      //generate a random number and grab the word that corresponds to it in the word array
    var random = Math.random();
    debugger;
  }
  init();
})();
