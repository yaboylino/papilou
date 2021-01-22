const mongoose = require("mongoose")

const productSchema = mongoose.Schema({
  naam: {
    type: String,
    required: true
  },
  categorie: {
    type: String,
    required: true
  },
  categorieurl: {
    type: String,
    required: true
  },
  imageUrl: {
    type: String,
    required: true
  },
  prijs: {
    type: Number,
    required: true
  },
  aantal: {
    type: Number,
    required: true
  },
  inWinkelmand: {
    type: Number,
    required: true
  }
})

module.exports = productSchema
