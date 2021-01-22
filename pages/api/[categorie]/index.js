import { Product } from "../../../config/db"

const categorien = async (req, res) => {
  try {
    const producten = await Product.find({})
    const {
      query: { categorie }
    } = req

    console.log(categorie)

    const artikelen = producten.filter(p => p.categorieurl === categorie)

    res.status(200).json(artikelen)
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: "Server Error" })
  }
}

export default categorien
