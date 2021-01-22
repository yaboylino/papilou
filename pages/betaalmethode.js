import React, { useState } from "react"
import Layout from "../components/Layout"
import { useRouter } from "next/router"
import { useDispatch, useSelector } from "react-redux"
import axios from "redaxios"
import Betaalmethodes from "../components/winkel/betaalmethodes/Betaalmethodes"

const betaalmethode = () => {
  const dispatch = useDispatch()
  const router = useRouter()
  const prijs = useSelector(state => state.mand.totaal)
  const artikelen = useSelector(state => state.mand.artikelen)
  const winkelmand = useSelector(state => state.mand.winkelmand)
  const klantgegevens = useSelector(state => state.mand.klantgegevens)

  const [gegevens, setGegevens] = useState({
    voornaam: "Lionel",
    achternaam: klantgegevens.achternaam,
    straatnaam: klantgegevens.straatnaam,
    huisnummer: klantgegevens.huisnummer,
    plaats: klantgegevens.plaats,
    provincie: klantgegevens.provincie,
    postcode: klantgegevens.postcode,
    telefoon: klantgegevens.telefoon,
    land: klantgegevens.land,
    email: klantgegevens.email,
    totaal: klantgegevens.totaal,
    artikelen: klantgegevens.artikelen
  })

  const handleSubmit = e => {
    e.preventDefault()
    axios
      .post("/api/betaling/", {
        method: "POST",
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json"
        },
        body: gegevens
      })
      .then(response => {
        console.log(response.data)
        if (response.data._links.checkout.href) {
          router.push(`https://www.mollie.com/paymentscreen/issuer/select/ideal/${response.data.id}`)
        }
      })
  }
  //api.mollie.com/v2/methods/ideal/ideal_ABNANL2A

  https: return (
    <Layout>
      <div className="flex flex-col justify-between min-h-screen sm:py-4 py-14">
        <div className="winkelmand container mx-auto py-10 md:px-32">
          <h1 className="uppercase text-4xl px-5 sm:px-0">KIES EEN BETAALMETHODE</h1>
          <Betaalmethodes handleSubmit={handleSubmit} />
        </div>
        <div className="winkelmand-totaal border-t sticky bottom-0 bg-white sm:py-6 py-2 overflow-hidden">
          <div className="winkelmand-totaal__footer md:w-5/6 sm:w-4/5 mx-auto sm:flex justify-center">
            <div className="w-full flex justify-center items-center sm:w-2/6">
              <button onClick={() => router.back()} className="uppercase bg-black text-white py-3 text-center sm:px-5 px-10 md:px-16 hidden sm:block">
                Terugkeren
              </button>
            </div>
            <div className="winkelmand-totaal sm:w-4/6 w-full mx-auto flex flex-col justify-center items-center xl:text-2xl lg:text-2xl md:text-lg§">
              {prijs.toFixed(0) > 0 ? (
                <>
                  <div>
                    <p>
                      {winkelmand} artikel<span className={`${winkelmand > 1 ? "inline-block" : "hidden"}`}>en</span> in winkelmand
                    </p>
                  </div>
                  <div className="flex sm:block">
                    <h5 className="font-bold">TOTAAL {prijs.toFixed(2)} EUR</h5>
                    <p className="text-sm text-center hidden md:block">
                      {"  "}
                      <span className="block md:hidden"> </span>
                      <span className="block md:hidden"> </span> * inclusief btw
                    </p>
                  </div>
                </>
              ) : (
                <h5 className="font-bold text-xl mt-5">TOTAAL 0 EUR</h5>
              )}
            </div>
            <div className="w-full flex justify-center items-center sm:w-2/6">
              <button onClick={e => handleSubmit(e)} className="uppercase bg-black text-white py-3 text-center sm:px-5 px-10 md:px-16">
                Doorgaan
              </button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default betaalmethode
