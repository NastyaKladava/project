const User = require("../models/User");

const getUsers = async (req, res, next) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (err) {
    res.status(500).json({ message: "Something went wrong, try again!" });
  }
};

module.exports = { getUsers };
