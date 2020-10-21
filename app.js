require("dotenv").config()

const express = require('express');
const axios = require('axios');
const app = express();
// const ejsLayouts = require('express-ejs-layouts');
const port = 3000;

let API_KEY = process.env.API_KEY //using nv to hide API key
// Enables EJS Layouts middleware
// app.use(ejsLayouts);

// axios call to get movies
app.set("view engine", "ejs")
//using ejs as the view engine for rendering ejs files
// app.use(express.static("static"))
// express using static to access CSS
app.use(express.static(__dirname + '/static'));

app.get("/", (req, res) => {
    res.render("home");
  });

app.get('/allmovies', (req, res) => {
    // 
    // let movie = req.query.Scary
    axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=27`)
    .then((response) => {
        // console.log("******RESPONSE:", response)
        // console.log(response.data)
        let movies = response.data.results //setting a variable to our data
        res.render("allmovies", {movies}); //render allmovies page with the data
        console.log(movies); //
    })
    .catch(err => {
        console.log(err);
    })
})

app.listen(port, () => {
    console.log(`You are on ${port}`)
  })

// 