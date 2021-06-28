const express = require('express');
const router = express.Router();
const { csrfProtection, asyncHandler } = require('./utils');
const { User } = require('../db/models')

router.get('/user/signup', csrfProtection, (req, res) => {
  res.render('user-signup', { token: req.csrfToken() })
})

router.post('/user/signup', csrfProtection, asyncHandler( async (req, res) => {
  const { username, email, password } = req.body
  const user = await User.create({
    username,
    email,
    password,
  })
  res.render('/user/profile', { user })
}))

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/user/profile', (req, res) => {
  res.send("Welcome to the user's profile!")
})

module.exports = router;
