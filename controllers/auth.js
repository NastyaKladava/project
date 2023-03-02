const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/User");
const config = require("config");
const JWTSECRET = config.get("jwtSecret");
// const JWTSECRET = process.env.JWTSECRET;

const register = async (req, res) => {
  try {
    const { firstName, lastName, email, password } = req.body;

    const candidate = await User.findOne({ email });

    if (candidate) {
      return res
        .status(400)
        .json({ message: "User with such an email already exists!" });
    }

    const hashedPassword = await bcrypt.hash(password, 12);
    const user = new User({
      firstName,
      lastName,
      email,
      password: hashedPassword,
    });

    await user.save();

    res.status(201).json({ message: "User was successfully created!" });
  } catch (e) {
    res.status(500).json({ message: "Something went wrong, try again!" });
  }
};

const login = async (req, res) => {
  try {
    const { firstName, email, password } = req.body;

    const user = await User.findOne({ email });

    if (!user) return res.status(400).json({ message: "User is not found!" });

    const IsMatch = await bcrypt.compare(password, user.password);

    if (!IsMatch) {
      return res
        .status(400)
        .json({ message: "Incorrect password, try again!" });
    }

    const token = jwt.sign({ id: user._id, isAdmin: user.isAdmin }, JWTSECRET);
    res.json({
      user: {
        token: token,
        id: user._id,
        firstName: firstName,
        email: email,
        status: user.status,
        isAdmin: user.isAdmin,
        collections: user.collections,
      },
      message: "You are successfully loged in!",
    });
  } catch (e) {
    res.status(500).json({ message: "Something went wrong, try again!" });
  }
};

module.exports = { register, login };
