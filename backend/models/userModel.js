const mongoose = require('mongoose');

let userSchema = mongoose.Schema({
    firstName : {
        type:String,
        required : [true, 'Please Enter a Name']
    },
    lastName : {
        type:String,
        required : [true, 'Please Enter a Name']
    },
    email : {
        type:String,
        required : [true, 'Please Enter a Name']
    },
    password : {
        type:String,
        required : [true, 'Please Enter a Name']
    }
});

let user = mongoose.model('User', userSchema);

module.exports = user