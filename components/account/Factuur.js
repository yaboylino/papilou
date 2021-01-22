import React, { useEffect, useState } from "react"
import axios from "redaxios"
import FactuurSVG from "./FactuurSVG"

const Factuur = () => {
  const [orders, setOrders] = useState([])

  useEffect(() => {
    async function fetchData() {
      const { data } = await axios.get("/api/orders/klant")
      setOrders(data.orders)
    }
    fetchData()
  }, [])

  console.log(orders)
  return (
    <div>
      {orders.map(order => (
        <div className="orders border-t border-b flex justify-between items-center">
          <div key={order._id} className="form__name w-1/2 sm:col-span-1 col-span-2 flex flex-col justify-center py-10">
            <p>Factuurnummer: {order.factuur}</p>
            {order.totaal} EUR voor {order.artikelen.length} {order.artikelen.length === 1 ? "artikel" : "artikelen"}
          </div>
          <p className="border border-black p-1 flex justify-center items-center uppercase text-sm">
            downloaden
            <span>
              <FactuurSVG />
            </span>
          </p>
        </div>
      ))}
    </div>
  )
}

export default Factuur
