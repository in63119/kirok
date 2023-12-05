const router = require("express").Router();

const {
  getParentStatus,
  postKidInfos
} = require("../controllers/parent");

router.get("/status", getParentStatus);
router.post("/register-kids", postKidInfos);

module.exports = router;
