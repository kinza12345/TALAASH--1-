const mongoose = require("mongoose");
//const { default: Report } = require("../clientTalaash/src/pages/Report");
//const { report } = require("../Api/Report");

const report = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  age: {
    type: String,
    required: true,

  },
  gender: {
    type: String,
    
  },
  address: {
    type: String,
    required: true,
  },
  wear: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true, 
  },
  file: {
    type: String,
     
  },
  time: {
    type: String,

   
  },
});

module.exports = Report = mongoose.model("report", report);
