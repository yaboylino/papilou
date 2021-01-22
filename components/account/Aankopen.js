import React, { useEffect, useState } from "react"
import axios from "redaxios"

const Aankopen = () => {
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
        <div className="orders border-t border-b flex items-center">
          <img className={`${order.status === false ? "border-yellow-400" : "border-green-300"} w-20 h-20 border-l-2`} src={`${order.artikelen[0].imageUrl}`} alt="" />
          <div key={order._id} className="ml-5 form__name w-1/2 sm:col-span-1 col-span-2 flex flex-col justify-center py-10">
            {order.status === false ? <p className="uppercase text-sm text-yellow-400">in behandeling</p> : <p className="uppercase text-sm text-red-400">verzonden</p>}
            <p>Factuurnummer: {order.factuur}</p>
            {order.totaal} EUR voor {order.artikelen.length} {order.artikelen.length === 1 ? "artikel" : "artikelen"}
          </div>
        </div>
      ))}
    </div>
  )
}

export default Aankopen
