// routes/View_index.js
// url 매핑 역할 Django urls.py 역할

const Arouter = require("express").Router();
const Acontroller = require("../controllers/Api_controller");
const { auth } = require("../middleware/auth");

// Api

// View
Arouter.get("/", Acontroller.mainview);

// 회원가입
Arouter.post("/api/users/register", Acontroller.usersregister);

// login
Arouter.post("/api/users/login", Acontroller.userslogin);

// Auth 기능
Arouter.post("/api/users/auth", auth, Acontroller.usersauth);

// logout
Arouter.get("/api/users/logout", auth, Acontroller.userslogout);

module.exports = Arouter;