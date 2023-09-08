const router = require("express").Router();
const { getInstitutions } = require("../controllers/institution");

router.get("/names", getInstitutions);

module.exports = router;
