const { Schema, model, Types } = require("mongoose");

const schema = new Schema(
  {
    userId: { type: String, required: true },
    collectionId: { type: String, required: true },
    itemTitle: { type: String, required: true },
    itemTags: { type: [String], required: true },
    itemAuthor: { type: [String], required: true },
    fromCollection: { type: [String], required: true },
    likes: { type: [String], default: [] },
    // comments: [{ type: Types.ObjectId, ref: "Comment" }],
    comments: {
      type: [
        {
          userId: { type: String },
          itemId: { type: String },
          // collectionId:{ type: String},
          commentDescription: { type: String },
          commentAuthor: { type: String },
          createdAt: { type: Date },
        },
      ],
    },

    "page quantity": { type: Number },
    price: { type: Number },
    volume: { type: Number },
    author: { type: String },
    type: { type: String },
    genre: { type: String },
    descr: { type: String },
    comment: { type: String },
    "about author": { type: String },
    "publication date": { type: Date },
    "harvest year": { type: Date },
    "is read": { type: Boolean },
    "is finished": { type: Boolean },
    "is tried": { type: Boolean },

    // optionalFields: {
    //   type: [
    //     { "page quantity": { type: Number } },
    //     { price: { type: Number } },
    //     { volume: { type: Number } },
    //     { author: { type: String } },
    //     { type: { type: String } },
    //     { genre: { type: String } },
    //     { descr: { type: String } },
    //     { comment: { type: String } },
    //     {
    //       "about author": { type: String },
    //     },
    //     { "publication date": { type: Date } },
    //     { "harvest year": { type: Date } },
    //     { "is read": { type: Boolean } },
    //     { "is finished": { type: Boolean } },
    //     { "is tried": { type: Boolean } },
    //   ],
    // },
  },
  { timestamps: true }
);

module.exports = model("Item", schema);
