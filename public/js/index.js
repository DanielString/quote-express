"use strict";

const el = {
  quote: document.getElementById("quote"),
  author: document.getElementById("author")
};

//API Callout

//https://api.unsplash.com/photos/!client_id=yowF489jYmvy_0eVWJW5ClELc7mYi_LNJKLjNN3A2no

async function getRandomPhoto() {
  const url = "https://api.unsplash.com/photos/random/?client_id=yowF489jYmvy_0eVWJW5ClELc7mYi_LNJKLjNN3A2no";
  try {
    const response = await fetch(url);
    const data = await response.json()
    const recievedPhoto = data.urls.regular

    const imgDiv = document.querySelector(".back-img")
    imgDiv.style.backgroundImage = `url($(recievedPhoto))`
  } catch (error) {
    console.log(error)
  }
}
getRandomPhoto();
// const quotes = [
  // {
    // quote: "You have to dig it to dig it. You Dig?",
    // author: "Thelonious Monk",
  // },

  // {
    // quote: "There is no life I know to compare with pure imagination.",
    // author: "Willie Wonka",
  // },

  // {
    // quote: "I'd walk through hell in a gasoline suit to play baseball",
    // author: "Pete Rose",
  // },

  // {
    // quote: "He who would learn to fly one day must first learn to stand and walk and run and climb and dance; one cannot fly into flying.",
    // author: "Friedrich Nietzsche",
  // },
// ];
// function loopThroughQuotes() {
  // let currentIndex = 0;
  // setInterval(() => {
    // if (currentIndex < quotes.length) {
      // el.quote.innerText = quotes[currentIndex].quote;
      // el.author.innerText = quotes[currentIndex].author;
      // currentIndex++;
    // } else {
      // currentIndex = 0;
    // }
  // }, 4000);
// }

// setTimeout(loopThroughQuotes, 4000);
