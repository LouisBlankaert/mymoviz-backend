var express = require("express");
var router = express.Router();

const fetch = require("node-fetch");

const TMBD_API_KEY = process.env.TMBD_API_KEY;

router.get("/movies", (req, res) => {
  const url = `https://api.themoviedb.org/3/discover/movie?api_key=${TMBD_API_KEY}`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      res.json({ movies: data });
    });
});

module.exports = router;
