require("dotenv").config()

const express = require('express');
const axios = require('axios');
const app = express();

let API_KEY = process.env.API_KEY //using nv to hide API key


// axios call to get movies

// 