const mongoose = require("mongoose");

const restaurantInfoSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user", // Refers to the 'user' model
  },
  userName: {
    type: String,
    required: true,
  },
  fullName: {
    type: String,
    required: true,
  },
  photo: {
    profile: {
      type: String,
      required: true,
    },
    cover: {
      type: String,
      required: true,
    },
    thumbnail: {
      type: String,
      required: true,
    },
  },
  address: {
    type: String,
    required: true,
  },
  deliveryInfo: {
    type: {
      type: String,
      required: true,
    },
    fee: {
      type: String,
      required: true,
    },
  },
  contactInfo: {
    phone: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
  },
});

const restaurantInfo = mongoose.model("restaurantInfo", restaurantInfoSchema);

module.exports = restaurantInfo;
