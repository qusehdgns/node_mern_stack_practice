// routes/View_index.js
// url 매핑 역할 Django urls.py 역할

const router = require("express").Router();
const controller = require("../controllers/controller");
const { auth } = require("../middleware/auth");

// Api

// View
router.get("/", controller.mainview);

// react Connect Test
router.get('/api/hello', controller.hello);

// 회원가입
router.post("/api/users/register", controller.usersregister);

// login
router.post("/api/users/login", controller.userslogin);

// Auth 기능
router.get("/api/users/auth", auth, controller.usersauth);

// logout
router.get("/api/users/logout", auth, controller.userslogout);

module.exports = router;