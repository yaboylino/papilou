import React, { useEffect, useState } from "react"
import axios from "redaxios"
import Layout from "../components/Layout"
import { useRouter } from "next/router"

const betaald = () => {
  const router = useRouter()
  const [order, setOrders] = useState([])

  useEffect(() => {
    async function fetchData() {
      const order = await axios.get("/api/orders/klant")
      setOrders(order.data.orders)
    }
    fetchData()
  }, [])

  return (
    <Layout>
      <div className="h-screen w-screen flex flex-col justify-center items-center">
        <svg xmlns="http://www.w3.org/2000/svg" id="Outline" viewBox="0 0 512 512" width="256" height="256">
          <path d="M472,56H424a24.025,24.025,0,0,0-23.977,23.092L385.441,152H275.872a72,72,0,1,0-135.744,0H24a8,8,0,0,0-7.845,9.569l32,160A8,8,0,0,0,56,328H360a16,16,0,0,1,0,32H56a8,8,0,0,0-8,8v32a8,8,0,0,0,8,8H68.305a32,32,0,1,0,55.39,0h168.61a32,32,0,1,0,55.39,0H360a8,8,0,0,0,8-8V374.987a32,32,0,0,0,1.472-61.555l30.373-151.863L412,100.773A23.841,23.841,0,0,0,424,104h48a24,24,0,0,0,0-48ZM112,424a16,16,0,1,1-16-16A16.019,16.019,0,0,1,112,424Zm224,0a16,16,0,1,1-16-16A16.019,16.019,0,0,1,336,424Zm16-32H64V376H352ZM318.711,168l-9.6,64h-56.7l2.471-49.423A72.523,72.523,0,0,0,267.833,168Zm-138.3,80h55.18l-3.2,64H183.61Zm-12.82,64h-48.7l-9.6-64h55.1Zm12.02-80-1.936-38.721a71.778,71.778,0,0,0,60.652,0L236.39,232Zm72,16h55.1l-9.6,64h-48.7ZM208,72a56,56,0,1,1-56,56A56.063,56.063,0,0,1,208,72ZM161.119,182.577,163.59,232h-56.7l-9.6-64h50.878A72.523,72.523,0,0,0,161.119,182.577ZM81.111,168l9.6,64H46.559l-12.8-64ZM49.759,248H93.111l9.6,64H62.559Zm303.682,64H313.289l9.6-64h43.352Zm16-80H325.289l9.6-64h47.352ZM472,88H424a8,8,0,0,1,0-16h48a8,8,0,0,1,0,16Z" />
          <path d="M187.343,157.657A8,8,0,0,0,193,160c.12,0,.241,0,.362-.008a8,8,0,0,0,5.784-2.871l40-48a8,8,0,0,0-12.292-10.242l-34.391,41.269-9.806-9.805a8,8,0,0,0-11.314,11.314Z" />
        </svg>

        <h1 className="text-4xl uppercase text-center mt-10">Bedankt voor uw aankoop</h1>
        <div onClick={() => router.push("./account")} className="underline text-2xl">
          Klik hier om verder te gaan!
        </div>
      </div>
    </Layout>
  )
}

export default betaald
