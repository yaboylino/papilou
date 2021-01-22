import { Product } from "../../config/db"

const categorien = async (req, res) => {
  try {
    const producten = await Product.find({})

    res.status(200).json(producten)
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: "Server Error" })
  }
}

export default categorien
