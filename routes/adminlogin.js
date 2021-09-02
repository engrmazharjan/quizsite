const express = require("express");
const bodyParser = require("body-parser");
const User = require("../models/user");
const passport = require("passport");
const authenticate = require("../authenticate");

const adminrouter = express.Router();
adminrouter.use(bodyParser.json());

// GET Users Listing
adminrouter.get(
  "/",
  authenticate.verifyUser,
  authenticate.verifyAdmin,
  (req, res, next) => {
    console.log("OK");
    User.find({})
      .then(
        (userdata) => {
          res.statusCode = 200;
          res.setHeader("Content-Type", "application/json");
          res.json(userdata);
        },
        (err) => next(err)
      )
      .catch((err) => next(err));
  }
);

// Login
adminrouter.post("/login", passport.authenticate("local"), (req, res, next) => {
  // if successfully authenticated then load req.user property.
  // Create token by server

  if (req.user.admin) {
    let token = authenticate.getToken({
      _id: req.user._id,
    }); // Payload
    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");
    res.json({
      success: true,
      token: token,
      status: "You are successfully logged in ! ",
    });
  } else {
    let err = new Error("Authentication Failed");
    err.status = 403;
    return next(err);
  }
});

// Logout
adminrouter.get("/logout", (req, res, next) => {
  if (req.session) {
    req.session.destroy(); // Destroy Session On Serer Side
    res.clearCookie("session-id"); // Clear Cookies On Client Side
    res.redirect("/");
  } else {
    const err = new Error("You Are Not Logged In!");
    err.status = 403;
    return next(err);
  }
});

module.exports = adminrouter;
