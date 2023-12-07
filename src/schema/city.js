const mongoose = require("mongoose");

const photoSchema = new Schema({
  cname: {
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
});

const Photo = mongoose.model("Photo", photoSchema);

module.exports = Photo;
