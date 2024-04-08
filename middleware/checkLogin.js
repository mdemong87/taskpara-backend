const jwt = require('jsonwebtoken');

function chechLogin(req, res, next) {


    const cookie = req.headers; // Accessing the 'Cookie' header
    const tokenValue = cookie.cookievalue;

    try {
        const decoad = jwt.verify(tokenValue, process.env.NEXT_PUBLIC_JWT_SECRECT);
        const { userId, email } = decoad;
        req.userId = userId;
        req.email = email;
        next();
    } catch (err) {

        next("Authentication Failed");

    }
}

module.exports = chechLogin;