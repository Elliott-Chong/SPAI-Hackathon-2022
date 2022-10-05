const jwt = require("jsonwebtoken");
const User = require("../models/User");

const auth = async (req, res, next) => {
  try {
    const token = req.header("x-auth-token");
    if (token) {
      const payload = await jwt.verify(token, "trashgo");
      if (payload) {
        const user = await User.findById(payload.user.id);
        req.user = user;
        next();
      }
    } else {
      return res.status(401).send("no token");
    }
  } catch (error) {
    res.status(401).send("invalid token");
  }
};
module.exports = auth;
