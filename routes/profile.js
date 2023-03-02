const { Router } = require("express");
const router = Router();
const { verifyUser } = require("../middlewars/verifyUser");
const {
  getUser,
  updateUser,
  deleteUser,
  likeItem,
} = require("../controllers/profile");
const { verifyToken } = require("../middlewars/verifyToken");
//like collection item
router.put("/like/:itemId", verifyToken, likeItem);

//get user
router.get("/:id", verifyUser, getUser);

//update user
router.put("/:id", verifyUser, updateUser);

//delete user
router.delete("/:id", verifyUser, deleteUser);

module.exports = router;
