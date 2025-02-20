"use strict";

const express = require("express");
const app = express();
const path = require("path");
const port = 1776;

require("dotenv").config();
const cors = require("cors")

app.use(cors());


// Serves the front-end content in the public directory
app.use("", express.static(path.join(__dirname, "./public")));

app.use(express.json());
app.use(express.urlencoded({extended: false}));

async function getRandomPhoto() {
  const url = `https://api.unsplash.com/photos/random/?client_id=${process.env.CLIENT_ID}`;
  try {
    const response = await fetch(url);
    const data = await response.json()
    const recievedPhoto = data.urls.regular

    return recievedPhoto;
  } catch (error) {
    console.log(error)
  }
}

app.get("/api/getRandomImage", (request, response) => {
  getRandomPhoto().then((returnedData) => {
    response.status(200).json({
      status: 200,
      data: returnedData,
  });

  })
});

// Serves the whole app
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
  console.log(`Press Ctrl+C to end this process...`);
})