var Letter = require("./Letter");

function Word(word) {

  this.letters = word.split("").map(function(char) {
    return new Letter(char);
  });
}


Word.prototype.getSolution = function() {
  return this.letters.map(function(letter) { // iterate over each letter
    return letter.getSolution(); // return the solution for each to form an array of solved letters
  }).join(""); // create a string from the array of solved letters
};


Word.prototype.toString = function() {
  return this.letters.join(" "); // see Letter.prototype.toString in Letter.js
};

Word.prototype.guessLetter = function(char) {
  
  var foundLetter = false;
  this.letters.forEach(function(letter) {
    if (letter.guess(char)) {
      foundLetter = true;
    }
  });

  console.log("\n" + this + "\n");
  
  return foundLetter;
};


Word.prototype.guessedCorrectly = function() {
 
  return this.letters.every(function(letter) {
    return letter.visible;
  });
};

module.exports = Word;
