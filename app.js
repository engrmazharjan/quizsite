const createError = require("http-errors");
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const session = require("express-session");
const Filestore = require("session-file-store")(session);
const passport = require("passport");
// const authenticate = require("./authenticate");
const config = require("./config");
const cors = require("cors");

// my own router

const indexRouter = require("./routes/index.js");
const usersRouter = require("./routes/users");
const addquizs = require("./routes/addquizRouter");

const scores = require("./routes/score");
const contact = require("./routes/contactus");

const admin = require("./routes/adminlogin");

// Database Start
const mongoose = require("mongoose");
const url = config.mongoUrl;
const connect = mongoose.connect(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: true,
});
connect.then(
  (db) => {
    console.log("Connected Correctly To DataBase");
  },
  (err) => {
    console.log(err);
  }
);
// Database End

const app = express();
app.use(cors());

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(passport.initialize());

app.use(cookieParser());

// app.use(express.static(path.join(__dirname, "public/anyuser")));
// app.use(authenticate.verifyUser);

app.use(express.static(path.join(__dirname, "public")));

// Routes
app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/addquiz", addquizs);
app.use("/score", scores);
app.use("/contactus", contact);
app.use("/adminlogin", admin);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
