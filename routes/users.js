const { Router } = require("express");
const router = Router();
const { verifyAdmin } = require("../middlewars/verifyAdmin");
const { getUsers } = require("../controllers/users");

router.get("/", verifyAdmin, getUsers);

module.exports = router;
