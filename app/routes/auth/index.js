// routes.js
const express = require('express');
const router = express.Router();
const loginController = require("../../controller/auth/login");
const logoutController = require("../../controller/auth/logoutController");
const registerController = require('../../controller/auth/register');


//authentecation register POST request
router.post('/register', registerController);


//authentecation login POST request
router.post('/login', loginController);


//authentecation logout POST request
router.delete('/logout', logoutController);




module.exports = router;
