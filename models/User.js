// models/usermodel.js
// https://poiemaweb.com/mongoose


const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name:{
        type: String,
        maxlength: 50
    },
    email:{
        type: String,
        
        // trim은 공백을 제거
        trim: true,

        unique: true
    },
    password: {
        type: String,
        minlength: 5
    },
    lastname: {
        type: String,
        maxlength: 50
    },
    role: {
        type: Number,
        default: 0
    },
    image: String,

    // 유효성 관리
    token: {
        type: String
    },

    // 토큰 유효기간 저장
    tokenExp: {
        type: Number
    }
});


const User = mongoose.model('User', userSchema);

module.exports = { User };