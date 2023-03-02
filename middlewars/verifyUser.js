const { verify } = require("jsonwebtoken");
const { verifyToken } = require("./verifyToken");

const verifyUser = (req, res, next) => {
  const accessToken = req.header("accessToken");
  console.log("verifyUser");
  console.log(accessToken);
  verifyToken(req, res, () => {
    if (accessToken || req.user.id === req.params.id || req.user.isAdmin) {
      next();
    } else {
      return res.status(400).json({ message: "You aren't authorized!" });
    }
  });
};

module.exports = { verifyUser };
