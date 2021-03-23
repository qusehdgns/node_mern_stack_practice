// models/usermodel.js
// https://poiemaweb.com/mongoose


const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const saltRounds = 10


const userSchema = mongoose.Schema({
    name: {
        type: String,
        maxlength: 50
    },
    email: {
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

// UserSchema Save 진행 전에 수행
userSchema.pre('save', function (next) {
    var user = this;

    // Password가 변경될 시에만 수행
    if (user.isModified('password')) {
        // 비밀번호 암호화
        bcrypt.genSalt(saltRounds, function(err, salt) {
            if (err) return next(err);
            bcrypt.hash(user.password, salt, function(err, hash) {
                if (err) return next(err);

                user.password = hash;
                next();
            });
        });
    } else {
        next();
    }
});


const User = mongoose.model('User', userSchema);

module.exports = { User };