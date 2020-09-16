const express = require("express");
const mongoose = require("mongoose");
const User = require("../DB/User");
const route = express.Router();

route.post("/", async (req, res) => {
  const {
    name,
    email,
    password,
    address,
    phone,
    username,
    conf_password,
  } = req.body;
  let user = {};
  user.name = name;
  user.username = username;
  user.email = email;
  user.password = password;
  user.address = address;
  user.conf_password = conf_password;
  user.phone = phone;

  let userModel = new User(user);
  await userModel
    .save()
    .then((userModel) => res.json(userModel))
    .catch((err) => console.log(err));
  //res.json(userModel);
});
route.post("/Login", async (req, res) => {
  const { email, password } = req.body;

  await User.findOne({ email })
    .then((user) => {
      if (password == user.password)
        if (email == user.email) {
          console.log("password and email match");
        } else console.log("Found data");
      return res.json({ status: true, message: "user found" });
    })
    .catch((err) => console.log("yahan a raha haaaaa" + err));
  // console.log("Found data");

  // res.json(userModel);
});
module.exports = route;