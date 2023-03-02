const { Schema, model, Types } = require("mongoose");

const schema = new Schema(
  {
    userId: { type: String, required: true },
    collectionTitle: { type: String, required: true },
    collectionTopic: { type: String, required: true },
    collectionDescr: { type: String, required: true },
    collectionTags: { type: [String], required: true },
    collectionAuthor: { type: [String], required: true },
    collectionMail: { type: [String], required: true },
    collectionFields: {
      type: [
        {
          title: { type: String, required: true },
          type: { type: String, required: true },
          firstLetter: { type: String },
        },
      ],
      required: true,
    },
    // collectionItems: [{ type: Types.ObjectId, ref: "Item" }],
    collectionItems: { type: Number, default: 0 },
    collectionImageUrl: { type: String, required: true },
  },
  { timestamps: true }
);

module.exports = model("Collection", schema);
