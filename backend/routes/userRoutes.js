const express = require('express');
const { register, login, getUserData } = require('../routeControllers/userRouteController');
const { protect } = require('../middleware/authMiddleware')


const app = express.Router();

app.post('/register', register);
app.post('/login', login);
// app.get('/getuser', protect, getUserData);


module.exports = app




