const { Router } = require('express');
const router = Router();
const authControler = require('../controlers/authcontrolers.js');

router.get('/signup',authControler.signup_get);

router.post('/signup',authControler.signup_post);

router.get('/login',authControler.login_get);

router.post('/login',authControler.login_post);

router.get('/logout', authControler.logout_get);

module.exports = router;
