import React, { useState } from "react"
import axios from "axios"
import { useSelector } from "react-redux"
import { useRouter } from "next/router"

const BanContact = () => {
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
    method: "bancontact"
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
          router.push(response.data._links.checkout.href)
        }
      })
  }

  return (
    <svg onClick={e => handleSubmit(e)} className="w-full h-full" viewBox="0 0 32 32">
      <g fill="none" fill-rule="evenodd">
        <rect width="32" height="32" fill="#FFF" rx="10"></rect>
        <path fill="#D9D9D9" fill-rule="nonzero" d="M1,7.99240541 L1,24.0075946 C1,27.8698134 4.13036543,31 7.99240541,31 L24.0075946,31 C27.8698134,31 31,27.8696346 31,24.0075946 L31,7.99240541 C31,4.13018659 27.8696346,1 24.0075946,1 L7.99240541,1 C4.13018659,1 1,4.13036543 1,7.99240541 Z M0,7.99240541 C0,3.57832179 3.57766074,0 7.99240541,0 L24.0075946,0 C28.4216782,0 32,3.57766074 32,7.99240541 L32,24.0075946 C32,28.4216782 28.4223393,32 24.0075946,32 L7.99240541,32 C3.57832179,32 0,28.4223393 0,24.0075946 L0,7.99240541 Z"></path>
        <path fill="#00549D" fill-rule="nonzero" d="M3.07692308,17.8382739 C3.07692308,17.1628908 3.62258852,16.6153846 4.29386374,16.6153846 L8,16.6153846 L6.15384615,18.4615385 L13.5384615,18.4615385 L17.2307692,14.1538462 L25.2307692,14.1538462 L19.8941063,20.0241753 C19.4427885,20.520625 18.5261669,20.9230769 17.8611902,20.9230769 L4.29265598,20.9230769 C3.62122524,20.9230769 3.07692308,20.3775047 3.07692308,19.7001877 L3.07692308,17.8382739 Z"></path>
        <path fill="#FFD800" fill-rule="nonzero" d="M6.1529231,14.7569406 C6.1529231,14.0848428 6.70422022,13.5399999 7.36836199,13.5399999 L11.6913847,13.5399999 L9.8452308,15.3861538 L17.8452307,15.3861538 L20.9221539,11.0784615 L28.9221539,11.0784615 L23.5476965,17.5278102 C23.117252,18.0443437 22.2154842,18.4630769 21.5465388,18.4630769 L7.37469201,18.4630769 C6.69992767,18.4630769 6.1529231,17.9174114 6.1529231,17.2461362 L6.1529231,14.7569406 Z" transform="rotate(180 17.538 14.77)"></path>
      </g>
    </svg>
  )
}

export default BanContact
