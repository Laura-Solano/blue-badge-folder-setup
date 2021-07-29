// let express = require('express')
// let router = express.Router();
// let sequelize = require('../db')
// let User = sequelize.import('../models/user.js');

const router = require("express").Router();
const User = require("../db").import("../models/user.js");
router.post("/create", function (req, res) {
    
  let userModel = {
    email: req.body.user.email,
    password: req.body.user.password,
  };
  User.create(userModel).then(res.send("This is a user/create endpoint));
});
module.exports = router;
