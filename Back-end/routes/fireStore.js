const router = require("express").Router();
const { test } = require("../controllers/conFireStore");

router.get("/test", test);

module.exports = router;
