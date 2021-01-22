const producten = require("./producten")
const connectDB = require("../config/db")
const { Product } = require("../config/db")

const importData = async () => {
  try {
    await Product.deleteMany({})

    await Product.insertMany(producten)

    console.log("Data Import Success")

    process.exit()
  } catch (error) {
    console.error("Error with data import", error)
    process.exit(1)
  }
}

importData()
