"use strict";

const el = {
  quote: document.getElementById("quote"),
  author: document.getElementById("author")
}

const quotes = [
  {
    quote: "You have to dig it to dig it. You Dig?",
    author: "Thelonious Monk",
  },

  {
    quote: "There is no life I know to compare with pure imagination.",
    author: "Willie Wonka",
  },

  {
    quote: "I'd walk through hell in a gasoline suit to play baseball",
    author: "Pete Rose",
  },

  {
    quote: "He who would learn to fly one day must first learn to stand and walk and run and climb and dance; one cannot fly into flying.",
    author: "Friedrich Nietzsche",
  },
];
function loopThroughQuotes() {
  let currentIndex = 0;
  setInterval(() => {
    if (currentIndex < quotes.length) {
      el.quote.innerText = quotes[currentIndex].quote;
      el.author.innerText = quotes[currentIndex].author;
      currentIndex++;
    } else {
      currentIndex = 0;
    }
  }, 6000);
}

setTimeout(loopThroughQuotes, 6000);