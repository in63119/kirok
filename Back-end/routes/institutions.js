const router = require("express").Router();
const {
  getInstitutions,
  institutionLogin,
} = require("../controllers/institution");

router.get("/names", getInstitutions);
router.get("/login", institutionLogin);

module.exports = router;
