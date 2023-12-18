const mongoose = require("mongoose");

const submitSchema = new mongoose.Schema({
  name: {
    type: String,
    required: "This field is required",
  },
  email: {
    type: String,
    required: "This field is required",
    unique: [true, "Email already in use"],
  },
  reg_no: {
    type: String,
    required: "This field is required",
  },
  category: {
    type: String,
    enum: ["CSE", "ECE", "CHEM", "MECH", "CIVIL"],
  },
  image: {
    type: String,
    required: "This field is required",
  },
});

module.exports = mongoose.model("Submit", submitSchema);
