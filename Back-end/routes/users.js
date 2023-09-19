const router = require("express").Router();
const { getAllUsersId, setUserKids } = require("../controllers/user");

router.get("/ids", getAllUsersId);
router.post("/kid", setUserKids);

module.exports = router;
