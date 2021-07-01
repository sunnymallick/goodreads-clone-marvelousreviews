const express = require('express');
const router = express.Router();
const { Movie, Review, User, LikesDislike } = require('../db/models');
const { asyncHandler, csrfProtection } = require('../routes/utils')
const { check } = require('express-validator')


const db = require('../db/models');

const reviewValidator = [
    check("review")
      .exists({ checkFalsy: true })
      .withMessage("Please provide a review!")
  ]



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

router.post('/:id(\\d+)', reviewValidator, asyncHandler(async (req, res, next) => {
    const { review, likeDislike } = req.body
    const isLiked = likeDislike === 'true'
    const movieId = req.params.id;
    const movie = await Movie.findByPk(movieId);
    const userId = req.session.auth.userId;
    const newLike = await LikesDislike.create({
        user_id: userId,
        rating: isLiked
    })

    await Review.create({
        movie_id: movieId,
        user_id: userId,
        review: review,
        likeDislikes_id: newLike.id
    })
    res.redirect(`/movies/${movie.id}`)
}))


module.exports = router;
///unseed
///unmigrate
//add taglines in models x migrations
//add in seeding info
//remigrate
//reseed
