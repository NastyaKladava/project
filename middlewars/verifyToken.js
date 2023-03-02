const jwt = require("jsonwebtoken");
const JWTSECRET = process.env.JWTSECRET;

const verifyToken = (req, res, next) => {
  const accessToken = req.header("accessToken") || req.body.headers.accessToken;
  if (!accessToken) {
    return res.status(400).json({ message: "You are not logged in!" });
  }
  jwt.verify(accessToken, JWTSECRET, (err, user) => {
    if (err) {
      return res.status(400).json({ message: "Token isn't valid!" });
    }
    req.user = user;
    next();
  });
};

module.exports = { verifyToken };
