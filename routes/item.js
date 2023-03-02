const { Router } = require("express");
const {
  addItem,
  getItems,
  getItem,
  updateItem,
  deleteItem,
  getLatestItems,
} = require("../controllers/item");
const { verifyUser } = require("../middlewars/verifyUser");

const router = Router();

//get items for special collection
router.get("/all/:collectionId", verifyUser, getItems);

//get the latest items
router.get("/latest", getLatestItems);

//get item
router.get("/:id", verifyUser, getItem);

//delete item
router.delete("/delete/:id", verifyUser, deleteItem);

//add item
router.post("/", verifyUser, addItem);

//update item
// router.post("/", verifyUser, updateItem);

module.exports = router;
