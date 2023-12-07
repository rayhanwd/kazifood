const mongoose = require("mongoose");

// Define the schema
const photoSchema = new mongoose.Schema({
  cname: {
    type: String,
    required: true,
    unique: true,
    // You can add additional validation rules for CNAME if needed
  },
  cover: {
    type: String,
    required: true,
    // You can add validation rules for cover images (e.g., URL validation)
  },
  thumbnail: {
    type: String,
    required: true,
    // You can add validation rules for thumbnail images (e.g., URL validation)
  },
});

// Create the Photo model
const Photo = mongoose.model("Photo", photoSchema);

// Export the model
module.exports = Photo;
