const Item = require("../models/Item");
const Collection = require("../models/Collection");

const addItem = async (req, res, next) => {
  const collectionId = req.body.collectionId;

  const newItem = new Item({
    userId: req.user.id,
    ...req.body,
  });
  try {
    const savedItem = await newItem.save();
    await Collection.findByIdAndUpdate(collectionId, {
      $inc: { collectionItems: 1 },
    });
    res
      .status(200)
      .json({ item: savedItem, message: "The item was successfully added!" });
  } catch (err) {
    // next(err);
    res.status(500).json({ message: "Something went wrong, try again!" });
  }
};

const getItems = async (req, res, next) => {
  try {
    const items = await Item.find({ collectionId: req.params.collectionId });
    res.status(200).json(items);
  } catch (error) {
    res.status(500).json({ message: "Something went wrong, try again!" });
  }
};

const getLatestItems = async (req, res, next) => {
  try {
    const items = await Item.find().sort({ createdAt: -1 });
    res.status(200).json(items);
  } catch (error) {
    res.status(500).json({ message: "Something went wrong, try again!" });
  }
};

const getItem = async (req, res, next) => {
  try {
    const item = await Item.findById(req.params.id);
    res.status(200).json(item);
  } catch (error) {
    res.status(500).json({ message: "Something went wrong, try again!" });
  }
};

// const updateItem = async (req, res, next) => {
//   console.log("update");
//   try {
//     const item = await Item.findById(req.params.id);
//     if (!collection)
//       return res.status(404).json({ message: "Item not found!" });
//     if (req.user.id === item.userId) {
//       const updatedItem = await Item.findByIdAndUpdate(
//         req.params.id,
//         {
//           $set: req.body,
//         },
//         { new: true }
//       );
//       res.status(200).json(updatedItem);
//     } else {
//       return res
//         .status(403)
//         .json({ message: "You can update only your item!" });
//     }
//     ollec;
//   } catch (err) {
//     res.status(500).json({ message: "Something went wrong, try again!" });
//   }
// };

const deleteItem = async (req, res, next) => {
  try {
    const item = await Item.findById(req.params.id);
    if (!item) return res.status(404).json({ message: "Item not found!" });
    if (req.user.id === item.userId) {
      await Item.findByIdAndDelete(req.params.id);
      res.status(200).json({ message: "The item has been deleted." });
    } else {
      return res
        .status(403)
        .json({ message: "You can delete only your item!" });
    }
  } catch (err) {
    res.status(500).json({ message: "Something went wrong, try again!" });
  }
};

module.exports = {
  addItem,
  getItems,
  getItem,
  deleteItem,
  getLatestItems,
};
