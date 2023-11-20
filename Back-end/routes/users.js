const router = require("express").Router();
const {
  getAllUsersId,
  setUserKids,
  updateUserKids,
} = require("../controllers/user");

router.get("/ids", getAllUsersId);
router.post("/kid", setUserKids);
router.patch("/:kakaoId/kid", updateUserKids);

module.exports = router;
