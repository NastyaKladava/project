const User = require("../models/User");
const Item = require("../models/Item");

const getUser = async (req, res, next) => {
  try {
    const id = req.params.id;
    const user = await User.findById(id);
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json({ message: "Something went wrong, try again!" });
  }
};

const updateUser = async (req, res, next) => {
  if (req.params.id === req.user.id) {
    try {
      const updatedUser = await User.findByIdAndUpdate(
        req.params.id,
        {
          $set: req.body,
        },
        { new: true }
      );
      res.status(200).json(updatedUser);
    } catch (err) {
      res.status(500).json({ message: "Something went wrong, try again!" });
    }
  } else {
    return res
      .status(403)
      .json({ message: "You can update only your account!" });
  }
};

const deleteUser = async (req, res, next) => {
  if (req.params.id === req.user.id) {
    try {
      await User.findByIdAndDelete(req.params.id);
      res.status(200).json("User has been deleted.");
    } catch (err) {
      res.status(500).json({ message: "Something went wrong, try again!" });
    }
  } else {
    return res
      .status(403)
      .json({ message: "You can delete only your account!" });
  }
};

const likeItem = async (req, res, next) => {
  const id = req.user.id;
  const itemId = req.params.itemId;
  try {
    const item = await Item.findById(itemId);
    if (item.likes.indexOf(id) === -1) {
      await item.update({
        $addToSet: { likes: id },
      });
      res.status(200).json({ message: "The item has been liked!" });
    } else {
      res.status(403).json({ message: "Sorry, you can like item only once!" });
    }
  } catch (err) {
    res.status(500).json({ message: "Something went wrong, try again!" });
  }
};

module.exports = {
  getUser,
  updateUser,
  deleteUser,
  likeItem,
};
