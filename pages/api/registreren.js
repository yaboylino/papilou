import { User } from "../../config/db"
import { hash } from "argon2"

export default async (req, res) => {
  const { email, wachtwoord } = req.body

  try {
    const hashedPassword = await hash(wachtwoord)
    const user = new User({ email, wachtwoord: hashedPassword })
    await user.save()
    res.status(200).json({ user: user.toObject() })
  } catch (error) {
    res.status(400).json({ error })
  }
}
