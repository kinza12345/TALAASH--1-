const express = require("express");
const mongoose = require("mongoose");
const Police = require("../DB/Police");
const Organization = require("../DB/Organization");
const Hospital = require("../DB/Hospital");
const User = require("../DB/User");

const route = express.Router();

route.post("/police", async (req, res) => {
  const {
    name,
    email,
    password,
    address,
    phone,
    conf_password,
  } = req.body;
  let police = {};
  police.name = name;
  police.email = email;
  police.password = password;
  police.address = address;
  police.conf_password = conf_password;
  police.phone = phone;

  let policeModel = new Police(police);
  await policeModel
    .save()
    .then((policeModel) => res.json(policeModel))
    .catch((err) => console.log(err));
  //res.json(userModel);
});/*
route.post("/Login", async (req, res) => {
  const { email, password } = req.body;

  await Police.findOne({ email })
    .then((police) => {
      if (password == police.password)
        if (email == police.email) {
          console.log("password and email match");
        } else console.log("Found data");
      return res.json({ status: true, message: "user found" });
    })
    .catch((err) => console.log("yahan a raha haaaaa" + err));
  // console.log("Found data");

  // res.json(userModel);
});*/

route.get("/Login", async (req, res) => {
  //const email = "1";
   //const password = "1";
  //const { email, password } = req.body;
  const { email, password } = req.query;
  console.log("email : ", email);
  console.log("pass : ", password);
  const userr1 = await User.findOne({ email });
    if (userr1 != null) {
      if (userr1.password === password) {
        console.log("password and email match for User ");
        res
          .status(200)
          .json({ status: true, message: "found", role: "User" });
      }
    }
  const user = await Organization.findOne({ email });

  if (user != null) {
    
    if (user.password === password) {
      console.log("password and email match for Organization ");
      return res
        .status(200)
        .json({ status: true, message: "found", role: "Organization" });
    } 
  } else {
    const userr = await Hospital.findOne({ email });
    if (userr != null) {
      if (userr.password === password) {
        console.log("password and email match for hos ");
        res
          .status(200)
          .json({ status: true, message: "found", role: "hospital" });
      } 
    }
  }
  const userr = await Police.findOne({ email });
    if (userr != null) {
      if (userr.password === password) {
        console.log("password and email match for Police ");
        res
          .status(200)
          .json({ status: true, message: "found", role: "Police" });
      } else {
        console.log("not found");
        res.status(200).json({
          status: false,
          message: "not found",
          role: "null",
        });
      }
    }
  
    
}); //11
module.exports = route;