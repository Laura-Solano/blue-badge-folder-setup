// let express = require('express')
// let router = express.Router();
// let sequelize = require('../db')
// let User = sequelize.import('../models/user.js');

const { response } = require("express");
const user = require("../models/user");

const router = require("express").Router();
const User = require("../db").import("../models/user.js");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
//Create User
router.post("/create", function (req, res) {
  User.create({
    email: req.body.user.email,
    password: bcrypt.hashSync(req.body.user.password, 13),
  })
    .then(function createSuccess(user) {
      const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
        expiresIn: 60 * 60 * 24,
      });

      res.json({
        user: user,
        message: "User Successfully created!",
        sessionToken: token,
      });
    })
    .catch((err) => res.status(500).json({ error: err }));
});

//Use Login
router.post("/login", function (req, res) {
  User.findOne({
    where: {
      email: req.body.user.email,
    },
  })
    .then(function loginSuccess(user) {
      if (user) {
        bcrypt.compare(
          req.body.user.password,
          user.password,
          function (err, matches) {
            if (matches) {
              let token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
                expiresIn: 60 * 60 * 24,
              });

              res.status(200).json({
                user: user,
                message: "User successfully logged in!",
                sessionToken: token,
              });
            } else {
              res.status(502).json({ error: "Login Failed" });
            }
          }
        );
      } else {
        res.status(500).json({ error: "User does not exist." });
      }
    })
    .catch((err) => res.status(500).json({ error: err }));
});
module.exports = router;
