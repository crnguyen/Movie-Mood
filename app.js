require("dotenv").config()

const express = require('express');
const axios = require('axios');
const app = express();

let API_KEY = process.env.API_KEY //using nv to hide API key

// axios call to get movies
app.set("view engine", "ejs")
//using ejs as the view engine for rendering ejs files
app.use(express.static("static"))
// express using static to access CSS
app.get('/', (req, res) => {
    let qs = {
        params: {
            s: 'halloween',
            apikey: API_KEY
        }
    }
    axios.get('https://api.themoviedb.org/27/movie/horror', qs)
    .then((response) => {
        console.log(response.data)
        let movies = response.data.Search //setting a variable to our data
        res.render("home", {movies}); //render home with the data
    })
    .catch(err => {
        console.log(err);
    })
})
app.listen(3000);

// 