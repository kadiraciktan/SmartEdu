const express = require('express');
const authController = require('../controllers/authController');

const router = express.Router();

router.route('/signup').post(authController.createUser); // localhost/users/signup
router.route('/login').post(authController.loginUser); // localhost/users/login

module.exports = router;
