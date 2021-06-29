const express = require('express');
const router = express.Router();
const { csrfProtection, asyncHandler } = require('./utils');
const { User } = require('../db/models')
const bcrypt = require('bcryptjs')

async function loginUser(req, res, user) {
  req.session.user = {username: user.username, userId: user.id}
}


router.get('/signup', csrfProtection, (req, res) => {
  res.render('user-signup', { token: req.csrfToken() })
})

router.post('/signup', csrfProtection, asyncHandler( async (req, res) => {
  const { username, email, password } = req.body
  const hashedPassword = await bcrypt.hash(password, 10)
    const user = await User.create({
    username,
    email,
    password: hashedPassword,
      })
    res.redirect('/user/profile')
}))

router.get('/login', csrfProtection, (req, res) => {
  res.render('user-login', {token: req.csrfToken()})
})

router.post('/login', csrfProtection, asyncHandler(async(req, res) => {
  const user = await User.findOne({
    where:{email: req.body.email}
  })
  const isPassword = await bcrypt.compare(req.body.password, user.password.toString())

  //console.log(isPassword)
  if(isPassword){
    console.log('Success!')
    req.session.user = {username: user.username, userId:user.id}
    return res.redirect('/user/profile')
  } else {
    console.log('Failure!')
  }
}))

router.get('/logout', (req, res) =>{
  delete req.session.user
  res.redirect('/')
})

//DEMO USER
// router.get('/login/demo', csrfProtection, asyncHandler(async(req, res) => {
//   res.redirect('/user/profile')
// }))

router.post('/login/demo', csrfProtection, asyncHandler(async(req, res) => {
  const username = 'demouser'
  const user = await User.findOne({ where: { username } })
  req.session.user = {username: username}
  loginUser(req, res, user);
  res.redirect('/user/profile')
}))


/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/profile', (req, res) => {
  res.send("Welcome to the user's profile!")
})

module.exports = router;
