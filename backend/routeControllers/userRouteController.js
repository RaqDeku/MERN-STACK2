require('dotenv').config()
const User = require('../models/userModel');
const asyncHandler = require('express-async-handler');
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

//Function for register Users
const register = asyncHandler(async (req, res) => {
    const { name, email, password } = req.body;
    // Checking if all field are filled
    if(!name || !email || !password){
        res.status(400);
        throw new Error('Please fill all fields');
    }
    //Checking if user already exist
    let userExist = await User.findOne({email});
    if(userExist) {
        res.status(400);
        throw Error('User Exist')
    }

    //Encrypting Password
    let salt = await bcrypt.genSalt(10);
    let hashedPassword = await bcrypt.hash(password, salt);

    // Creating User
    let user = await User.create({
        name,
        email,
        password:hashedPassword
    })

    if(user) {
        res.status(200).json({
            __id:user.id,
            email:user.email,
            token:generateToken(user.id)
        })
    } else {
        res.status(400);
        throw Error('Invalid Details');
    }
})

// Function for logging In user
const login = asyncHandler(async (req, res) => {
    const { email, password } = req.body;
    // Checks if user filled all fields
    if (!email || !password) {
        res.status(400)
        throw Error('Please fill all fields')
    }
    //Logging User in
    let user = await User.findOne({email})

    //Checks if users exist and comparing passwords
    if (user) {
        if (bcrypt.compareSync(password, user.password)) {
            return (
                res.status(200).json({
                    __id:user.id,
                    token:generateToken(user.id)
                })
            )
        } else {
            res.status(401)
            throw Error('Invalid email or password')
        }
    } else {
        res.status(404)
        throw Error('User not Found')
    }
        
});


// Function for getting user Data
const getUserData = asyncHandler(async (req, res) => {
    res.status(200).json(req.user)
})

const generateToken = (id) => {
    return jwt.sign({id}, process.env.SECRET_JWT, {
        expiresIn:'2d'
    })
}

module.exports = {
    register, login, getUserData
};
