(() => {
  // variables always go at the top of the files
  var words = ["animals", "food", "music genres", "movie character", "countries", "popular movies"];

  let currentWord = words[Math.floor(Math.random()*words.length)],
  wordHint = document.querySelector('.current-word'),
  guessBox = document.querySelector('.letter-guess');

  wordHint.textContent = currentWord.split("").map(letter => letter = ("__")).join(" ");

  //unctions go in the middle (logic, etc)
  function makeGuess() {
    //debugger;
    console.log(this.value);
  }

  // event handling goes at the bottom
guessBox.addEventListener('keyup', makeGuess);

  // storing the random workd in a variable

  //when we start the game, or restart it, do these things
  function init() {
    //generate a random number and grab the word that corresponds to it in the word array
    var random = Math.random();
    debugger;
  }
  init();
})();
