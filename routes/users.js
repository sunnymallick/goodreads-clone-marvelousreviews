const express = require('express');
const router = express.Router();
const { csrfProtection, asyncHandler } = require('./utils');
const { User } = require('../db/models');
const bcrypt = require('bcryptjs');
const { check, validationResult } = require('express-validator');

const signInValidators = [
  check('username')
    .exists({ checkFalsy: true })
    .withMessage('Please provide a User Name')
    .isLength({ max: 50 })
    .withMessage('User name must not be more than 50 characters long'),
  check('email')
    .exists({ checkFalsy: true })
    .withMessage('Please provide an Email')
    .isEmail()
    .withMessage('Not a valid Email Address'),
  check('password')
    .exists({ checkFalsy: true })
    .withMessage('Please provide a valid Password'),
];

router.get('/signup', csrfProtection, (req, res) => {
  res.render('user-signup', { token: req.csrfToken() })
})

router.post('/signup', csrfProtection, signInValidators, asyncHandler(async (req, res) => {
  const { username, email, password } = req.body
  const user = User.build({ username, email, password })

  const validatorErrors = validationResult(req);

  if (validatorErrors.isEmpty()) {
    const hashedPassword = await bcrypt.hash(password, 10);
    user.password = hashedPassword;
    await user.save();
    res.redirect('/user/profile')
  } else {
    const errors = validatorErrors.array().map((error) => error.msg);
    res.render('user-signup', {
      user,
      errors,
      token: req.csrfToken(),
    })
  }
}));

router.get('/login', csrfProtection, (req, res) => {
  res.render('user-login', { token: req.csrfToken() })
})

const loginValidators = [
  check('email')
    .exists({ checkFalsy: true })
    .withMessage('Please provide an Email'),
  check('password')
    .exists({ checkFalsy: true })
    .withMessage('Please provide a Password')
];

router.post('/login', csrfProtection, loginValidators, asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  let errors = [];
  const validatorErrors = validationResult(req);

  if (validatorErrors.isEmpty()) {
    const user = await User.findOne({ where: { email: req.body.email } })

    if (user !== null) {
      const isPassword = await bcrypt.compare(password, user.password.toString());

      if (isPassword) {
        res.redirect('/user/profile')
      }
    }
    errors.push('log-in failed for the provided email and password')
  } else {
    errors = validatorErrors.array().map((error) => error.msg);
  }

  res.render('user-login', {
    email,
    errors,
    token: req.csrfToken(),
  });
}));

router.get('/logout', (req, res) => {
  delete req.session.user
  res.redirect('/')
})


/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});

router.get('/profile', (req, res) => {
  res.send("Welcome to the user's profile!")
})

module.exports = router;
