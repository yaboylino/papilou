import React, { useState } from "react"
import axios from "axios"
import { useSelector } from "react-redux"
import { useRouter } from "next/router"

const Ideal = () => {
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
    method: "ideal"
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
    <svg onClick={e => handleSubmit(e)} className="w-full h-full" viewBox="0 0 32 32" fill="none">
      <path d="M24 0H8C3.58172 0 0 3.58172 0 8V24C0 28.4183 3.58172 32 8 32H24C28.4183 32 32 28.4183 32 24V8C32 3.58172 28.4183 0 24 0Z" fill="#E664A5"></path>
      <path d="M5.33333 8.0172V24.0287C5.33333 24.8086 5.97563 25.405 6.70968 25.405H16.2982C23.547 25.405 26.6667 21.3677 26.6667 16C26.6667 10.6323 23.547 6.59497 16.2982 6.59497H6.75556C5.97563 6.64085 5.33333 7.28315 5.33333 8.0172Z" fill="white"></path>
      <path d="M11.7563 10.5864V22.4229H16.8947C21.5743 22.4229 23.5929 19.762 23.5929 16.0459C23.5929 12.4674 21.5743 9.71467 16.8947 9.71467H12.628C12.1693 9.66879 11.7563 10.0817 11.7563 10.5864Z" fill="#CC0066"></path>
      <path d="M16.2982 24.1663H7.99427C7.26022 24.1663 6.66381 23.5699 6.66381 22.8358V9.25591C6.66381 8.52186 7.26022 7.92545 7.99427 7.92545H16.2982C24.1893 7.92545 25.3821 13.0179 25.3821 16.0459C25.3821 21.276 22.1706 24.1663 16.2982 24.1663ZM7.99427 8.38423C7.48961 8.38423 7.12259 8.79713 7.12259 9.25591V22.8358C7.12259 23.3405 7.53549 23.7075 7.99427 23.7075H16.2982C21.8495 23.7075 24.9233 20.9548 24.9233 16C24.9233 9.34767 19.5097 8.33835 16.2982 8.33835L7.99427 8.38423Z" fill="black"></path>
      <path d="M13.5914 14.4401C13.7749 14.4401 13.9584 14.486 14.096 14.5319C14.2337 14.5778 14.3713 14.6695 14.5089 14.8072C14.6007 14.9448 14.6925 15.0824 14.7842 15.2201C14.8301 15.4036 14.876 15.5871 14.876 15.8165C14.876 16.0459 14.8301 16.2294 14.7842 16.367C14.7383 16.5505 14.6466 16.6882 14.5548 16.8258C14.4631 16.9634 14.3254 17.0552 14.1419 17.147C14.0043 17.2387 13.7749 17.2387 13.5914 17.2387H12.3527V14.3943L13.5914 14.4401ZM13.5455 16.734C13.6373 16.734 13.729 16.734 13.8208 16.6882C13.9125 16.6423 13.9584 16.5964 14.0502 16.5505C14.096 16.4588 14.1878 16.4129 14.1878 16.2753C14.2337 16.1835 14.2337 16.0459 14.2337 15.8624C14.2337 15.7247 14.2337 15.5871 14.1878 15.4953C14.1419 15.4036 14.096 15.2659 14.0502 15.2201C14.0043 15.1283 13.9125 15.0824 13.8208 15.0366C13.729 14.9907 13.5914 14.9907 13.4537 14.9907H12.995V16.7799L13.5455 16.734Z" fill="white"></path>
      <path d="M17.3993 14.4401V14.9448H15.8854V15.5871H17.2617V16.0459H15.8854V16.7341H17.3993V17.2387H15.2431V14.3943L17.3993 14.4401Z" fill="white"></path>
      <path d="M19.5097 14.4402L20.5649 17.2846H19.9227L19.6933 16.6423H18.6381L18.4087 17.2846H17.7664L18.8216 14.4402C18.8675 14.4402 19.5097 14.4402 19.5097 14.4402ZM19.5556 16.1835L19.1886 15.1283L18.8216 16.1835H19.5556Z" fill="white"></path>
      <path d="M21.5741 14.4401V16.7341H22.9504V17.2387H20.9318V14.3943C20.9776 14.4402 21.5741 14.4401 21.5741 14.4401Z" fill="white"></path>
      <path d="M9.41651 17.1469C10.126 17.1469 10.7011 16.5718 10.7011 15.8623C10.7011 15.1529 10.126 14.5778 9.41651 14.5778C8.70705 14.5778 8.13192 15.1529 8.13192 15.8623C8.13192 16.5718 8.70705 17.1469 9.41651 17.1469Z" fill="black"></path>
      <path d="M10.4259 22.4229C9.32482 22.4229 8.45314 21.5513 8.45314 20.4502V18.8903C8.45314 18.3398 8.91192 17.881 9.46246 17.881C10.013 17.881 10.4718 18.3398 10.4718 18.8903L10.4259 22.4229Z" fill="black"></path>
    </svg>
  )
}

export default Ideal
