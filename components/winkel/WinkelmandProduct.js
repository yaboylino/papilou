import React, { useState } from "react"
import Link from "next/link"
import { useSelector } from "react-redux"

const WinkelmandProduct = () => {
  const [quantity, setQuantity] = useState(0)

  function increment() {
    setQuantity(quantity + 1)
  }

  function decrement() {
    if (quantity === 1) {
      return
    } else {
      setQuantity(quantity - 1)
    }
  }

  return (
    <div className="product sm:mb-12 flex sm:block px-5 sm:px-0">
      <Link href="/product-categorie/1">
        <img className="product__foto shadow cursor-pointer w-1/6 sm:w-full" src="https://static.zara.net/photos///2020/I/0/2/p/6985/312/505/2/w/616/6985312505_1_1_1.jpg?ts=1604657055245" alt="" />
      </Link>
      <div className="product__info mt-3 pl-5 sm:pl-0">
        <Link href="/product-categorie/1">
          <span className="product__title hover:underline cursor-pointer">PARKA MET DONSVULLING EN CAPUCHON</span>
        </Link>
        <div className="product__prijs mt-10 sm:mt-3 flex justify-between items-center">
          <span>89,95 EUR</span>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
          </svg>
        </div>
      </div>
    </div>
  )
}

export default WinkelmandProduct
