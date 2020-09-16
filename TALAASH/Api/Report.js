const express = require("express");
const mongoose = require("mongoose");
const Report = require("../DB/Report");
const route = express.Router();

route.post("/report", async (req, res) => {
  const {
    name,
    age,
    file,
    address,
    phone,
    gender,
    time,
    wear,

  } = req.body;
  let report = {};
  report.name = name;
  report.age = age;
  report.file = file;
  report.gender = gender;
  report.address = address;
  report.time = time;
  report.phone = phone;
  report.wear = wear;


  let reportModel = new Report(report);
  await reportModel
    .save()
    .then((reportModel) => res.json(reportModel))
    .catch((err) => console.log(err));
  //res.json(userModel);
});
route.post("/Report111", async (req, res) => {
  const { name, age } = req.body;

  await Report.findOne({ name })
    .then((report) => {
      if (age == report.age)
        if (name == report.name) {
          console.log("password and email match");
        } else console.log("Found data");
      return res.json({ status: true, message: "user found" });
    })
    .catch((err) => console.log("yahan a raha haaaaa" + err));
  // console.log("Found data");

  // res.json(userModel);
});
module.exports = route;