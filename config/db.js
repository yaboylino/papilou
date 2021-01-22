const { createConnection } = require("mongoose")
const { serverRuntimeConfig } = require("../next.config")

// schemas
const productSchema = require("../models/Product")
const orderSchema = require("../models/Order")
const userSchema = require("../models/User")

// connect to given URL
const db = createConnection("mongodb://root:EzraJael19111950@85.215.82.240:27017/loveissue?authSource=admin&readPreference=primary&appname=MongoDB%20Compass&ssl=false", {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true
})
exports.db = db

// handle DB errors
db.on("error", error => {
  console.error("MongoDB connection error:", error)
  // exit immediately on error
  process.exit(1)
})

// connection ready
exports.connected = new Promise(resolve => db.once("open", resolve))

// models
exports.Product = db.model("Product", productSchema)
exports.Order = db.model("Order", orderSchema)
exports.User = db.model("User", userSchema)
