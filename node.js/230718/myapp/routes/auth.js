const express = require('express');
const router = express.Router();
const authLib = require('libs/auth')

router.get('/login', function(req, res, next) {
  res.render('auth/login');
});

router.post('/login', function(req, res, next) {
    const login = req.body.login;
    const pwd = req.body.pwd;

    const result = authLib.check(login, pwd);
    res.json(result);
});

router.get('/signup', function(req, res, next) {
    res.render('auth/signup');
});

module.exports = router;