const express = require('express');
const router = express.Router();
const { Movie, Review } = require('../db/models');
const { asyncHandler } = require('../routes/utils')


const db = require('../db/models');

router.get('/all', asyncHandler (async(req, res) =>{
    const movies = await Movie.findAll()
    res.render('movies', {movies})
}))

module.exports = router;

//create individual movie page /:id
//req.params.id

router.get('/:id(\\d+)'), asyncHandler (async (req, res) => {
    const movieId = req.params.id;
    const movie = await Movie.findbyPk(movieId);

    res.render('movie', { movie })
})

///unseed
///unmigrate
//add taglines in models x migrations
//add in seeding info
//remigrate
//reseed
