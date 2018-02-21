(() => {
  var words = ["animals", "food", "music genres", "movie character", "countries", "popular movies"];

  let currentWord = words[Math.floor(Math.random()*words.length)],
  wordHint = document.querySelector('.current-word');

  wordHint.textContent = currentWord.split("").map(letter => letter = ("__")).join(" ");

  debugger;

  // storing the random workd in a variable

  //when we start the game, or restart it, do these things
  function init() {
    //generate a random number and grab the word that corresponds to it in the word array
    var random = Math.random();
    debugger;
  }
  init();
})();
