const { Router } = require("express");
const router = Router();
const { verifyToken } = require("../middlewars/verifyToken");
const { verifyUser } = require("../middlewars/verifyUser");
const { addComment, getComments } = require("../controllers/comment");

//get item comments
router.get("/:itemId", getComments);

//add item comment
router.post("/", verifyToken, addComment);

module.exports = router;
