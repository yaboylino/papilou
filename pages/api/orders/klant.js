import { Order } from "../../../config/db"
import { getSession } from "next-auth/client"

export default async (req, res) => {
  const { user } = await getSession({ req })
  try {
    const orders = await Order.find({ user: user._id }).lean()
    res.status(200).json({ orders })
  } catch (error) {
    res.status(400).json({ error })
  }
}
