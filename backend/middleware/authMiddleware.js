const jwt = require('jsonwebtoken');
const User = require('../models/userModel')
const asyncHandler = require('express-async-handler')

const protect = asyncHandler(async(req, res, next) => {
let token;
//Checks if token is in headers
if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
    try {
        // Get token from Header
        token = req.headers.authorization.split(' ')[1]
        //Verify token
        let decodedToken = jwt.verify(token, process.env.SECRET_JWT)
        //Get User from token
        req.user = await User.findById(decodedToken.id).select('-password')
        next()
    } catch (error) {
        res.status(401)
        throw Error('Not Authorised')
    }
} else {
    res.status(401)
    throw Error('Not Authorised, No Token')
}
})

module.exports = { protect }