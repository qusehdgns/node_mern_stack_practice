// routes/View_index.js
// url 매핑 역할 Django urls.py 역할

const Arouter = require("express").Router();
const Acontroller = require("../controllers/Api_controller");

// Api

// View
Arouter.get("/", Acontroller.mainview);

// 회원가입
Arouter.post("/register", Acontroller.register);

// login
Arouter.post("/login", Acontroller.login);


module.exports = Arouter;