// routes/Api_controller.js

// Model 미활용 CRUD 구성
// https://medium.com/@feedbotstar/node-js-%EB%A1%9C-crud-%EB%A7%8C%EB%93%A4%EC%96%B4-%EB%B3%B4%EA%B8%B0-cdcbaf7174a7

// Model 활용 CRUD 구성
// https://poiemaweb.com/mongoose


const { User } = require("../models/User");


// 새로운 정보 입력
exports.postNewuser = (req, res) => {
    // 회원가입
    let user = new User(req.body);

    // save는 몽고 디비 함수
    user.save((err, userInfo) => {
        if(err) return res.json({ success: false, err });
        return res.status(200).json({ success : true });
    });
}

// 모든 정보 요청
exports.getAllusers = (req, res) => {
}

// 특정 id 정보 요청
exports.getSelectluser = (req, res) => {
}

// 특정 id 정보 갱신
exports.putSelectuser = (req, res) => {
}

// 특정 id 정보 삭제
exports.deleteSelectuser = (req, res) => {
}