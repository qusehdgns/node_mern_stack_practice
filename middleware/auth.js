const { User } = require("../models/User");

// 인증 처리
let auth = (req, res, next) => {
    // 클라이언트 쿠키에서 Token을 가져옴
    let token = req.cookies.x_auth;

    // Token 복호화 한후 유저 탐색
    User.findByToken(token, (err, user) => {
        if (err) throw err;

        // 유저 탐색 실패 시 거부
        if (!user) return res.json({ isAuth : false, error : true });

        // 유저 탐색 성공 시 이증
        req.token = token;
        req.user = user;
        next();
    });
}

module.exports = { auth };