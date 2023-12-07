const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create a schema
const userSchema = new Schema({
  userId: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  Fname: {
    type: String,
    required: true,
    trim: true,
  },
  photo: String,
  thumbnail: String,
  meal: {
    type: String,
    required: true,
    trim: true,
  },
  price: {
    type: Number,
    required: true,
    min: 0,
  },
  deliveryInfo: {
    type: {
      type: String,
      required: true,
      enum: ["type1", "type2"], // Add the allowed delivery types
    },
    fee: {
      type: Number,
      required: true,
      min: 0,
    },
  },
});

// Create a model
const User = mongoose.model("User", userSchema);

module.exports = User;
