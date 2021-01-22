import React, { useState } from "react"
import axios from "axios"
import { useSelector } from "react-redux"
import { useRouter } from "next/router"

const CreditCard = () => {
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
    method: "creditcard"
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
      <defs>
        <linearGradient id="creditcard-b" x1="0%" y1="100%" y2="0%">
          <stop offset="0%" stop-color="#060B0E"></stop>
          <stop offset="100%" stop-color="#254764"></stop>
        </linearGradient>
        <rect id="creditcard-a" width="32" height="32" rx="8"></rect>
        <linearGradient id="creditcard-c" x1="27.635%" x2="22.59%" y1="25.476%" y2="11.652%">
          <stop offset="0%" stop-color="#FFF" stop-opacity="0"></stop>
          <stop offset="100%" stop-color="#FFF"></stop>
        </linearGradient>
        <linearGradient id="creditcard-e" x1="50%" x2="38.943%" y1="100%" y2="55.528%">
          <stop offset="0%" stop-color="#FFF" stop-opacity="0"></stop>
          <stop offset="100%" stop-color="#FFF"></stop>
        </linearGradient>
        <linearGradient id="creditcard-f" x1="38.943%" x2="50%" y1="55.528%" y2="100%">
          <stop offset="0%" stop-color="#FFF" stop-opacity="0"></stop>
          <stop offset="100%" stop-color="#FFF"></stop>
        </linearGradient>
        <linearGradient id="creditcard-i" x1="50%" x2="50%" y1="0%" y2="100%">
          <stop offset="0%" stop-color="#FAD961"></stop>
          <stop offset="100%" stop-color="#F7955D"></stop>
        </linearGradient>
        <rect id="creditcard-h" width="7" height="5" rx="1"></rect>
        <filter id="creditcard-g" width="157.1%" height="180%" x="-28.6%" y="-20%" filterUnits="objectBoundingBox">
          <feOffset dy="1" in="SourceAlpha" result="shadowOffsetOuter1"></feOffset>
          <feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation="0.5"></feGaussianBlur>
          <feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.1 0"></feColorMatrix>
        </filter>
      </defs>
      <g fill="none" fill-rule="evenodd">
        <mask id="creditcard-d" fill="#fff">
          <use xlinkHref="#creditcard-a"></use>
        </mask>
        <use fill="url(#creditcard-b)" xlinkHref="#creditcard-a"></use>
        <circle cx="37.5" cy="40.5" r="31.5" fill="url(#creditcard-c)" mask="url(#creditcard-d)" opacity="0.1"></circle>
        <circle cx="6.5" cy="31.5" r="16.5" fill="url(#creditcard-e)" mask="url(#creditcard-d)" opacity="0.1"></circle>
        <circle cx="42.5" cy="-1.5" r="26.5" fill="url(#creditcard-f)" mask="url(#creditcard-d)" opacity="0.1"></circle>
        <g mask="url(#creditcard-d)">
          <g transform="translate(4 14)">
            <g>
              <use fill="#000" filter="url(#creditcard-g)" xlinkHref="#creditcard-h"></use>
              <use fill="url(#creditcard-i)" xlinkHref="#creditcard-h"></use>
            </g>
            <rect width="1" height="3" x="1" y="1" fill="#7A3802" opacity="0.3"></rect>
            <rect width="1" height="3" x="3" y="1" fill="#7A3802" opacity="0.3"></rect>
            <rect width="1" height="3" x="5" y="1" fill="#7A3802" opacity="0.3"></rect>
          </g>
        </g>
        <rect width="5" height="1" x="4" y="22" fill="#FFF" fill-opacity="0.8" mask="url(#creditcard-d)"></rect>
        <rect width="3" height="1" x="4" y="24" fill="#FFF" fill-opacity="0.8" mask="url(#creditcard-d)"></rect>
        <rect width="3" height="1" x="8" y="24" fill="#FFF" fill-opacity="0.8" mask="url(#creditcard-d)"></rect>
        <rect width="3" height="1" x="12" y="24" fill="#FFF" fill-opacity="0.8" mask="url(#creditcard-d)"></rect>
        <rect width="5" height="1" x="10" y="22" fill="#FFF" fill-opacity="0.8" mask="url(#creditcard-d)"></rect>
        <rect width="5" height="1" x="16" y="22" fill="#FFF" fill-opacity="0.8" mask="url(#creditcard-d)"></rect>
        <rect width="5" height="1" x="22" y="22" fill="#FFF" fill-opacity="0.8" mask="url(#creditcard-d)"></rect>
      </g>
    </svg>
  )
}

export default CreditCard
