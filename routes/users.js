const express = require('express');
const router = express.Router();
// const csrf = require('csurf')
// const { csrfProtection, asyncHandler } = require('./utils');
const { User } = require('../db/models/user')
const asyncHandler = (handler) => (req, res, next) => handler(req, res, next).catch(next)

router.get('/user/signup', (req, res) => {
  // const user = User.create();
  res.render('user-signup')
})


/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
