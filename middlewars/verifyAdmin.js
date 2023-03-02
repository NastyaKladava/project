const { verifyToken } = require("./verifyToken");

const verifyAdmin = (req, res, next) => {
  verifyToken(req, res, () => {
    if (req.user.isAdmin) {
      next();
    } else {
      if (err)
        return res.status(400).json({ message: "You aren't authorized!" });
    }
  });
};

module.exports = { verifyAdmin };
