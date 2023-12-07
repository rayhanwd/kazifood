const mongoose = require("mongoose");

const citiesSchema = new mongoose.Schema({
  Cname: {
    type: String,
    required: true,
    unique: true,
  },
  photo: {
    cover: {
      type: String,
      required: true,
    },
    thumbnail: {
      type: String,
      required: true,
    },
  },
});

const cities = mongoose.model("cities", citiesSchema);

module.exports = cities;
