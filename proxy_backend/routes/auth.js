const router = require("express").Router();
const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const auth = require("../auth_middleware.js");
const { body, validationResult } = require("express-validator");
const { produce } = require("immer");

router.post(
  "/register",
  body("username", "Username is required").not().isEmpty(),
  body(
    "password",
    "Please enter a password with 6 or more characters"
  ).isLength({ min: 6 }),
  body("email", "Email is required").isEmail(),
  body("password2", "Please confirm your password").not().isEmpty(),
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    let { username, email, password, password2 } = req.body;
    if (password !== password2)
      return res
        .status(400)
        .json({ errors: [{ msg: "Passwords do not match!" }] });

    try {
      let user = await User.findOne({ email });
      if (user) {
        return res
          .status(400)
          .json({ errors: [{ msg: "Email has been taken" }] });
      }
      user = new User({
        email,
        username,
        loginMethod: "normal",
        password,
      });
      const salt = await bcrypt.genSalt(10);
      user.password = await bcrypt.hash(password, salt);

      await user.save();
      const payload = {
        user: {
          id: user.id,
        },
      };
      jwt.sign(
        payload,
        config.get("jwt_secret"),
        { expiresIn: 360000000 },
        (err, token) => {
          if (err) throw err;
          return res.json({ token });
        }
      );
    } catch (error) {
      return res
        .status(400)
        .json({ errors: [{ msg: "Server Error at line 62" }] });
    }
  }
);

router.get("/user", auth, (req, res) => {
  if (req.user) {
    return res.status(200).json(req.user);
  } else {
    return res.status(400).send("No User");
  }
});

router.post("/google", async (req, res) => {
  const { name, email, photo } = req.body;
  try {
    let user = await User.findOne({ email });
    if (!user) {
      user = new User({ name, email, photo });
      await user.save();
    }
    const payload = {
      user: { id: user.id },
    };

    jwt.sign(payload, "trashgo", (err, token) => {
      if (err) {
        throw err;
      }
      return res.json({ token });
    });
  } catch (error) {
    console.error(error);
  }
});

// http://localhost:5000/api/auth/all
router.get("/all", async (req, res) => {
  try {
    const users = await User.find();
    return res.status(200).json(users);
  } catch (error) {
    console.error(error);
  }
});

router.get("/treasure-items", auth, async (req, res) => {
  try {
    const user = req.user;
    // inventory = [{name: 'hammer', count: 2}, {name: 'labcoat', count: 3}]
    // treasured = [{name: 'hammer', count: 1}]

    // [{name: 'hammer', count: 3}, {name: 'labcoat', count: 3}]
    for (let item of user.inventory) {
      // {name: 'hammer', count: 2}
      let found = false;
      for (let treasured_item of user.treasured) {
        if (treasured_item.name == item.name) {
          treasured_item.count += item.count;
          found = true;
        }
        if (found) break;
      }
      if (!found) {
        user.treasured.push(item);
      }
    }
    user.inventory = [];
    user.points = user.treasured.reduce((ps, a) => ps + a.count, 0);
    user.save();
    return res.status(200).send("ok");
  } catch (error) {
    console.error(error);
  }
});

router.post("/add-inventory", auth, async (req, res) => {
  try {
    const { item } = req.body;
    // [{name: 'hammer', count: 2}, {name: 'labcoat', count: 3}]
    let new_inventory = produce(req.user.inventory, (draft) => {
      let found = false;
      for (let current of draft) {
        if (current.name == item) {
          current.count += 1;
          found = true;
        }
      }
      if (!found) {
        draft.push({ name: item, count: 1 });
      }
    });

    req.user.inventory = new_inventory;
    req.user.save();
    return res.status(200).send("nice");
  } catch (error) {
    console.error(error);
  }
});

router.post(
  "/login",
  body("email", "Please provide a valid email").isEmail(),
  body("password", "Password is required").not().isEmpty(),
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { email, password } = req.body;
    try {
      let user = await User.findOne({ email });
      if (!user) {
        return res
          .status(400)
          .json({ errors: [{ msg: "Invalid Credentials" }] });
      }

      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        return res
          .status(400)
          .json({ errors: [{ msg: "Invalid Credentials" }] });
      }

      const payload = {
        user: { id: user.id },
      };

      jwt.sign(payload, config.get("jwt_secret"), (err, token) => {
        if (err) {
          throw err;
        }
        return res.json({ token });
      });
    } catch (err) {
      console.log(err);
      return res.status(400).json({ errors: [{ msg: "Server Error" }] });
    }
  }
);

module.exports = router;
