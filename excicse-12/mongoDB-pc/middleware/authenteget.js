const jwt = require("jsonwebtoken");
const User = require('../user');

const authenticate = async (req, res, next) => {
  try {
    let token = req.headers.authorization;
    if (!token) {
      return res.status(401).json({ message: "Unauthorized" });
    }
    token = token.split(" ")[1];
    const decoded = jwt.verify(token, process.env.JWT_SECRET || "secret-key");
    const user = await User.findById(decoded._id);

    if (!user) {
      return res.status(401).json({ message: "Unauthorized token" });
    }

    req.user = user;
    next();
  } catch (error) {
    res.status(500).json({ message: "Invalid token" });
  }
};

module.exports = authenticate;
