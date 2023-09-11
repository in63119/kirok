const router = require("express").Router();
const { getAllUsersId } = require("../controllers/user");

router.get("/ids", getAllUsersId);

module.exports = router;
