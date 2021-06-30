const express = require('express');
const router = express.Router();
const { Movie, Review, User } = require('../db/models');
const { asyncHandler } = require('../routes/utils')


const db = require('../db/models');

router.get('/all', asyncHandler (async(req, res) =>{
    const movies = await Movie.findAll()
    res.render('movies', {movies})
}))



//create individual movie page /:id
//req.params.id

router.get('/:id(\\d+)', asyncHandler (async (req, res) => {
    const movieId = req.params.id;
    const movie = await Movie.findByPk(movieId);
    const reviews = await Review.findAll({
        where: { 'movie_id': movie.id },
        include: ['Movie', 'User', 'LikesDislike']
    })
    res.render('movie', { movie, reviews })
}));




module.exports = router;
///unseed
///unmigrate
//add taglines in models x migrations
//add in seeding info
//remigrate
//reseed
