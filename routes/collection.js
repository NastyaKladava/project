const { Router } = require("express");
const {
  addCollection,
  getCollections,
  getCollection,
  deleteCollection,
  updateCollection,
  getTrendCollections,
} = require("../controllers/collection");
const { verifyToken } = require("../middlewars/verifyToken");
const { verifyUser } = require("../middlewars/verifyUser");

const router = Router();

//get collections
router.get("/", verifyUser, getCollections);
// router.get("/", getCollections);

//trend collections with more items
router.get("/trend", getTrendCollections);

//get collection
router.get("/:id", getCollection);

//add collection
router.post("/", verifyUser, addCollection);

//delete collection
router.delete("/delete/:id", verifyUser, deleteCollection);

//update collection
router.post("/:id", verifyUser, updateCollection);

module.exports = router;
