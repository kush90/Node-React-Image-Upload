const mongoose = require('mongoose');
const UserSchema = new mongoose.Schema({

    username :{
        type:String,
        required:true,
        trim:true
    },
    phone_no:{
        type:String,
        required:true,
        trim:true,
    },
    password:{
        type:String,
        required:true,
        trim:true
    },
    role:{
        type:String,
        required:true,
        trim:true
    }
});

const User = mongoose.model('User',UserSchema,'User');
module.exports = User;