import React, { useState } from "react"
import axios from "axios"
import { useSelector } from "react-redux"
import { useRouter } from "next/router"

const Klarna = () => {
  const router = useRouter()
  const klantgegevens = useSelector(state => state.mand.klantgegevens)

  const [gegevens, setGegevens] = useState({
    voornaam: klantgegevens.voornaam,
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
    artikelen: klantgegevens.artikelen,
    method: "paypal"
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
          router.push(`https://api.mollie.com/v2/payments/method/paypal/${response.data.id}`)
        }
      })
  }
  return (
    <svg onClick={e => handleSubmit(e)} className="w-full h-full" viewBox="0 0 40 40" fill="none">
      <rect width="40" height="40" rx="8" fill="#F4B6C7"></rect>
      <path fillRule="evenodd" clipRule="evenodd" d="M16.25 28.75H12.5V11.25H16.25V28.75ZM16.9446 20.0371C20.2718 18.3985 22.4224 15.0873 22.4999 11.2515H26.4386C26.3852 14.8936 24.8821 18.2723 22.2358 20.7788L27.4999 28.75H22.4999L16.9446 20.0371Z" fill="black"></path>
      <path fillRule="evenodd" clipRule="evenodd" d="M27.5 26.2502C27.5 27.6306 28.6194 28.75 30.0002 28.75C31.3806 28.75 32.5 27.6306 32.5 26.2502C32.5 24.8694 31.3806 23.75 30.0002 23.75C28.6194 23.75 27.5 24.8694 27.5 26.2502Z" fill="black"></path>
    </svg>
  )
}

export default Klarna
