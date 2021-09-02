const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const authenticate = require("../authenticate");

const User = require("../models/user");

const users = express.Router();

users.use(bodyParser.json());

users
  .route("/")
  .get(authenticate.verifyUser, (req, res, next) => {
    User.findById(req.user._id)
      .then(
        (user) => {
          res.statusCode = 200;
          res.setHeader("Content-Type", "application/json");
          res.json(user.score);
        },
        (err) => next(err)
      )
      .catch((err) => next(err));
  })
  .post(authenticate.verifyUser, (req, res, next) => {
    res.statusCode = 403;
    res.end("POST operation not supported on /scores");
  })
  .put(authenticate.verifyUser, (req, res, next) => {
    User.findById(req.user._id)
      .then(
        (user) => {
          console.log(user);
          if (user != null) {
            user.score = req.body.score;
            res.statusCode = 200;
            res.setHeader("Content-Type", "application/json");
            res.json(user);
            user.save();
          } else {
            let err = new Error("your score is not updated");
            next(err);
            return;
          }
        },
        (err) => next(err)
      )
      .catch((err) => next(err));
  })
  .delete(authenticate.verifyUser, (req, res, next) => {
    res.statusCode = 403;
    res.end("DELETE operation not supported on /scores");
  });

module.exports = users;
