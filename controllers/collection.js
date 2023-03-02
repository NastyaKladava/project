const Collection = require("../models/Collection");

const addCollection = async (req, res, next) => {
  const newCollection = new Collection({ userId: req.user.id, ...req.body });
  // console.log(req.body);
  try {
    const savedCollection = await newCollection.save();
    res.status(200).json({
      collection: savedCollection,
      message: "Collection was successfully added!",
    });
  } catch (err) {
    // next(err);
    console.log("err", err);
    res.status(500).json({ message: "Something went wrong, try again!" });
  }
};

const getCollections = async (req, res, next) => {
  try {
    const collections = await Collection.find({ userId: req.user.id });
    res.status(200).json(collections);
  } catch (error) {
    res.status(500).json({ message: "Something went wrong, try again!" });
  }
};

const getCollection = async (req, res, next) => {
  try {
    const collection = await Collection.findById(req.params.id);
    res.status(200).json(collection);
  } catch (error) {
    res.status(500).json({ message: "Something went wrong, try again!" });
  }
};

const updateCollection = async (req, res, next) => {
  try {
    const collection = await Collection.findById(req.params.id);
    if (!collection)
      return res.status(404).json({ message: "Collection isn't found!" });
    if (req.user.id === collection.userId) {
      const updatedCollection = await Collection.findByIdAndUpdate(
        req.params.id,
        {
          $set: req.body,
        },
        { new: true }
      );
      res.status(200).json({
        collection: updatedCollection,
        message: "Collection was successfully updated!",
      });
    } else {
      return res
        .status(403)
        .json({ message: "You can update only your collection!" });
    }
  } catch (err) {
    res.status(500).json({ message: "Something went wrong, try again!" });
  }
};

const deleteCollection = async (req, res, next) => {
  try {
    const collection = await Collection.findById(req.params.id);
    if (!collection)
      return res.status(404).json({ message: "Collection not found!" });
    if (req.user.id === collection.userId) {
      await Collection.findByIdAndDelete(req.params.id);
      res.status(200).json({ message: "The collection has been deleted." });
    } else {
      return res
        .status(403)
        .json({ message: "You can delete only your collection!" });
    }
  } catch (err) {
    res.status(500).json({ message: "Something went wrong, try again!" });
  }
};

const getTrendCollections = async (req, res, next) => {
  try {
    const collections = await Collection.find().sort({ collectionItems: -1 });
    res.status(200).json(collections);
  } catch (error) {
    res.status(500).json({ message: "Something went wrong, try again!" });
  }
};

module.exports = {
  addCollection,
  getCollections,
  getCollection,
  updateCollection,
  deleteCollection,
  getTrendCollections,
};
