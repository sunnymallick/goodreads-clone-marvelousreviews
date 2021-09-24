const express = require('express');
const router = express.Router();
const { Movie, Review, User, LikesDislike, MovieShelf } = require('../db/models');
const { asyncHandler, csrfProtection } = require('../routes/utils')
const { check, validationResult } = require('express-validator');


const db = require('../db/models');

const reviewValidator = [
    check("review")
      .exists({ checkFalsy: true })
      .withMessage("Please provide a review!")
  ]



router.get('/all', asyncHandler (async(req, res) =>{
    const movies = await Movie.findAll()
    const movieShelf = await MovieShelf.findAll()
    res.render('movies', {movies, movieShelf})
}))



//create individual movie page /:id
//req.params.id

router.get('/:id(\\d+)', csrfProtection, asyncHandler (async (req, res) => {
    const movieId = req.params.id;
    const movie = await Movie.findByPk(movieId);
    const reviews = await Review.findAll({
        where: { 'movie_id': movie.id },
        include: ['Movie', 'User', 'LikesDislike']
    })
    res.render('movie', { movie, reviews, token: req.csrfToken() })
}));

//adding review to movie page
router.post('/:id(\\d+)', reviewValidator, csrfProtection, asyncHandler(async (req, res, next) => {
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
    });

    res.redirect(`/movies/${movie.id}`)
}))

//delete review from movie page
router.post('/:id(\\d+)/delete', asyncHandler(async(req, res, next) => {
    const reviewId = req.params.id;
    const review = await Review.findByPk(reviewId);
    const movieId = review.movie_id
    await review.destroy()
    res.redirect(`/movies/${movieId}`)
}))



//add to movieshelf
router.post('/:id(\\d+)/movieShelf', asyncHandler(async(req, res, next) => {
    const movieId = req.params.id;
    const movie = await Movie.findByPk(movieId);
    console.log(req.session.auth)
    const userId = req.session.auth.userId;
    const movieImage = movie.movieImg;
    const existsInMovieshelf = await MovieShelf.findOne({
        where: {
            user_id: userId,
            movie_id: movieId,
        },
    })
    if (!existsInMovieshelf) {
        await MovieShelf.create({
            user_id: userId,
            movie_id: movieId,
            movieImg: movieImage
        })
        res.redirect('/user/profile')
    } else {
        res.redirect('/')
    }

}));

module.exports = router;
///unseed
///unmigrate
//add taglines in models x migrations
//add in seeding info
//remigrate
//reseed
