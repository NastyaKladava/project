const { Schema, model, Types } = require("mongoose");

const schema = new Schema(
  {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    status: { type: String, default: "active" },
    isAdmin: { type: Boolean, default: false },
    collections: [{ type: Types.ObjectId, ref: "Collection" }],
  },
  { timestamps: true }
);

module.exports = model("User", schema);
