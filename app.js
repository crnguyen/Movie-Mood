require("dotenv").config()

const express = require('express');
const axios = require('axios');
const app = express();
const ejsLayouts = require('express-ejs-layouts');
const port = 3000;

let API_KEY = process.env.API_KEY //using nv to hide API key
// Enables EJS Layouts middleware
app.use(ejsLayouts);

// axios call to get movies
app.set("view engine", "ejs")
//using ejs as the view engine for rendering ejs files
// app.use(express.static("static"))
// express using static to access CSS
app.use(express.static('static'));
// app.use(express.static(__dirname + '/static'));

app.get("/", (req, res) => {
    res.render("home");
    console.log("homepage")
  });

app.get("/about", (req, res) => {
    res.render("about");
    console.log("about")
});

app.get('/allmovies', (req, res) => {
    // 
    // let movie = req.query.Scary
    axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=27|53&page=1`)
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

app.get('/allmovies2', (req, res) => {
    axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=27|53&page=2`)
    .then((response) => {
        let moviestwo = response.data.results
        res.render("allmovies2", {moviestwo});
        console.log("2nd PAGE:", moviestwo)
    })
    .catch(err => {
        console.log(err);
    })
})

app.get('/allmovies3', (req, res) => {
    axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=27|53&page=3`)
    .then((response) => {
        let moviesthree = response.data.results
        res.render('allmovies3', {moviesthree});
        console.log("3rd page", moviesthree)
    })
    .catch(err => {
        console.log(err);
    })
})

app.get('/allmovies4', (req, res) => {
    axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=27|53&page=4`)
    .then((response) => {
        let moviesfour = response.data.results
        res.render('allmovies4', {moviesfour});
        console.log("4th page", moviesfour)
    })
    .catch(err => {
        console.log(err);
    })
})

app.get('/allmovies5', (req, res) => {
    axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=27|53&page=5`)
    .then((response) => {
        let moviesfive = response.data.results
        res.render('allmovies5', {moviesfive});
        console.log("5th page", moviesfive)
    })
    .catch(err => {
        console.log(err);
    })
})

app.listen(port, () => {
    console.log(`You are on ${port}`)
  })

// 