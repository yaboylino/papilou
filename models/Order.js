const { Schema, Types } = require("mongoose")

const orderSchema = new Schema({
  voornaam: { type: String, required: true },
  achternaam: { type: String, required: true },
  straatnaam: { type: String, required: true },
  postcode: { type: String, required: true },
  plaats: { type: String, required: true },
  land: { type: String, required: true },
  telefoon: { type: String, required: true },
  email: { type: String, required: true },
  order: { type: String, required: true },
  order_id: { type: String, required: true },
  status: { type: Boolean, default: false },
  datum: { type: String, required: true },
  factuur: { type: String, required: true },
  totaal: { type: String, required: true },
  artikelen: { type: Array, required: true },
  user: { type: Types.ObjectId, ref: "User", required: true }
})

module.exports = orderSchema
