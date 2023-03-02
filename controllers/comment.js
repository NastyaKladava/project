const Comment = require("../models/Comment");
const Item = require("../models/Item");

const getComments = async (req, res, next) => {
  try {
    const comments = await Comment.find({ itemId: req.params.itemId });
    res.status(200).json(comments);
  } catch (err) {
    // next(err);
    res.status(500).json({ message: "Something went wrong, try again!" });
  }
};

const addComment = async (req, res, next) => {
  const newComment = new Comment({ userId: req.user.id, ...req.body });
  console.log(newComment);
  try {
    const savedComment = await newComment.save();
    await Item.findByIdAndUpdate(req.body.itemId, {
      $push: {
        comments: {
          userId: req.user.id,
          itemId: savedComment.itemId,
          // collectionId:{ type: String},
          commentDescription: savedComment.commentDescription,
          commentAuthor: savedComment.commentAuthor,
          createdAt: savedComment.createdAt,
        },
      },
    });
    res
      .status(200)
      .json({
        comment: savedComment,
        message: "Your comment was successfully added!",
      });
  } catch (err) {
    // next(err);
    console.log(err);
    res.status(500).json({ message: "Something went wrong, try again!" });
  }
};

module.exports = {
  addComment,
  getComments,
};
