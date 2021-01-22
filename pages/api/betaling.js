const { createMollieClient } = require("@mollie/api-client")
import { Order } from "../../config/db"
import Cors from "cors"
import initMiddleware from "../../lib/init-middleware"
import { getSession } from "next-auth/client"

// Initialize the cors middleware
const cors = initMiddleware(
  // You can read more about the available options here: https://github.com/expressjs/cors#configuration-options
  Cors({
    // Only allow requests with GET, POST and OPTIONS
    methods: ["GET", "POST", "OPTIONS"]
  })
)

export default async (req, res) => {
  const datum = `${new Date().getDate()}-${new Date().getMonth() + 1}-${new Date().getFullYear()}`
  const jaar = new Date().getFullYear()
  const { user } = await getSession({ req })
  const factuurnummer = await Order.count((error, data) => {
    if (error) {
      console.log(error)
    } else {
      console.log(data)
    }
  })
  const mollieClient = createMollieClient({ apiKey: "test_rqn3c34qCVft6HmujerBTE9DvM3drW" })
  await cors(req, res)
  const orderlist = req.body.body
  console.log(orderlist)

  try {
    const payment = await mollieClient.payments
      .create({
        amount: {
          currency: "EUR",
          value: "14.95" // You must send the correct number of decimals, thus we enforce the use of strings
        },
        description: `${parseInt(factuurnummer) + 1}`,
        redirectUrl: `https://loveissue.vercel.app/api/webhook/?order=${parseInt(factuurnummer) + 1}`,
        webhookUrl: `https://loveissue.vercel.app/api/webhook/?order=${parseInt(factuurnummer) + 1}`,
        metadata: {
          order_id: parseInt(factuurnummer) + 1
        },
        method: orderlist.method
      })
      .then(payment => {
        console.log(payment)
        const order = new Order({
          voornaam: orderlist.voornaam,
          achternaam: orderlist.achternaam,
          straatnaam: orderlist.straatnaam,
          huisnummer: orderlist.huisnummer,
          postcode: orderlist.postcode,
          plaats: orderlist.plaats,
          land: orderlist.land,
          telefoon: orderlist.telefoon,
          email: orderlist.email,
          order: payment.id,
          order_id: parseInt(factuurnummer) + 1,
          factuur: `${jaar}-${parseInt(factuurnummer) + 1}`,
          datum: datum,
          totaal: orderlist.totaal,
          artikelen: orderlist.artikelen,
          user: user._id
        })
        order.save()
        res.send(payment)
      })
      .catch(error => {
        console.log(error)
      })
  } catch (error) {
    console.warn(error)
  }
}
