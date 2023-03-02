const { Schema, model, Types } = require("mongoose");

const schema = new Schema(
  {
    userId: { type: String, required: true },
    // collectionId: { type: String, required: true },
    itemId: { type: String, required: true },
    commentDescription: { type: String, required: true },
    commentAuthor: { type: String, required: true },
    item: { type: Types.ObjectId, ref: "Item" },
  },
  { timestamps: true }
);

module.exports = model("Comment", schema);
