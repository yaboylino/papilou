import { Product } from "../../../../config/db"

const product = async (req, res) => {
  try {
    const producten = await Product.find({})
    const {
      query: { _id }
    } = req
    const {
      query: { categorie }
    } = req

    const artikelen = producten.filter(p => p.categorieurl === categorie && String(p._id) === _id)

    res.status(200).json(artikelen)
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: "Server Error" })
  }
}

export default product
