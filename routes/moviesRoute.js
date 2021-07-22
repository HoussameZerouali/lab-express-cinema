const express = require('express');
const router = express.Router();
const Movie = require('../models/Movie.model')

router.get('/movies', (req, res) => {
    
    Movie.find()
        .then((movieDocuments) => {
            console.log(movieDocuments);
            res.render('movies.hbs', {
                css: ["moviesStyle.css"],
                movies: movieDocuments,
            })
        })
            .catch((error) => {
                console.log(error)
            })
    
})

module.exports = router;