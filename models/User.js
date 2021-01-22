const { Schema } = require("mongoose")

const userSchema = new Schema({
  email: { type: String, unique: true, required: true },
  wachtwoord: { type: String, required: true }
})

module.exports = userSchema
