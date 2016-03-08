var quotes = [{
  author: "Javik (Mass Effect)",
  quote: "Stand in the ashes of a trillion dead souls and ask the ghosts if honor matters. The silence is your answer."
}, {
  author: "Kreia (KOTORII)",
  quote: "Direct action is not always the best way. It is a far greater victory to make another see through your eyes than to close theirs forever."
}, {
  author: "Spiderman",
  quote: "You're a wizard, Harry"
}, {
  author: "Anthony",
  quote: "Hey guys"
}, {
  author: "Amanda the Panda",
  quote: "I love Anthony!"
}];

var prevNum = 0;
var currentQuote;
var currentAuthor;
//picks a new quote and changes current quote text and author
function getNewQuote() {
  var randNum = Math.floor(Math.random() * quotes.length);
  while (randNum === prevNum) {
    randNum = Math.floor(Math.random() * quotes.length);
  }
  prevNum = randNum;
  $('#quote').text(quotes[randNum]["quote"]);
  $('#author').text(quotes[randNum]["author"]);
}

// Need to fix the very first quote shared to twitter when the random quote button hasn't been pressed before
function tweet() {
  window.open('https://twitter.com/intent/tweet?hashtags= freecodecamp&text=' + encodeURIComponent(quotes[prevNum]["quote"] + ' -' + (quotes[prevNum]["author"])));
}

$(document).ready(function() {
  $('#newQuote').on('click', getNewQuote);
  $('#twitter-share-button').on('click', tweet)
});