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

router.get('/movies/:id', (req, res) => {
    
    Movie.findById(req.params.id)
        .then((result) => {
            res.render('movieDetails.hbs', {
                css: ["detailsStyle.css"],
                movie: result,
            })
        })
            .catch((error) => {
                console.log(error)
            })
    
})

module.exports = router;