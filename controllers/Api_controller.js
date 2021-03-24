// routes/Api_controller.js

// Model 미활용 CRUD 구성
// https://medium.com/@feedbotstar/node-js-%EB%A1%9C-crud-%EB%A7%8C%EB%93%A4%EC%96%B4-%EB%B3%B4%EA%B8%B0-cdcbaf7174a7

// Model 활용 CRUD 구성
// https://poiemaweb.com/mongoose

const { User } = require("../models/User");


exports.mainview = function (req, res) {
    res.send("Hello World!");
}

// 새로운 정보 입력
exports.usersregister = (req, res) => {
    // 회원가입
    let user = new User(req.body);

    // save는 몽고 디비 함수
    user.save((err, userInfo) => {
        if(err) return res.json({ success: false, err });
        return res.status(200).json({ success : true });
    });
}

exports.userslogin = (req, res) => {
    // 요청된 이메일 데이터베이스 검색
    User.findOne({ email : req.body.email }, (err, user) => {
        if(!user) return res.json({ loginSuccess : false, message : "해당 이메일의 유저가 없습니다. "});

        // 요청된 이메일이 데이터베이스에 존재 시 비밀번호 확인
        user.comparePassword(req.body.password, (err, isMatch) => {
            if(!isMatch) return res.json({ loginSuccess : false, message : "비밀번호가 틀렸습니다." });
            
            // 로그인 성공 시 Token 생성
            user.generateToken((err, user) => {
                if(err) return res.status(400).send(err);
                
                // token을 저장 (쿠키, 로컬스토리지, ...) 가능, 쿠키에 저장
                res.cookie("x_auth", user.token).status(200).json({ loginSuccess : true, userId : user._id});
            });
        });
    });
}

// role 0 -> 일반 유저  role !0 -> 어드민
exports.usersauth = (req, res) => {
    // auth 미들웨어 통과 성공 시 수행, 유저에게 권한이 있음
    res.status(200).json({
        _id : req.user._id,
        isAdmin : req.user.role === 0 ? false : true,
        isAuth : true,
        email : req.user.email,
        name : req.user.name,
        lastname : req.user.lastname,
        role : req.user.role,
        image : req.user.image
    });
}