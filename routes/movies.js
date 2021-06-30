const express = require('express');
const router = express.Router();
const { Movie } = require('../db/models');
const { asyncHandler } = require('../routes/utils')

const db = require('../db/models');

router.get('/all', asyncHandler (async(req, res) =>{
    const movies = await Movie.findAll()
    res.render('movies', {movies})
}))

module.exports = router;