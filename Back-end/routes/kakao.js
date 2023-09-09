const router = require("express").Router();
const { kakaoLogin } = require("../controllers/kakao");

router.post("/kakao", kakaoLogin);

module.exports = router;
