import React from "react"
import Link from "next/link"
import Image from "next/image"

const ProductGridList = ({ producten }) => {
  return (
    <div className="productgrid grid md:grid-cols-4 sm:grid-cols-2 gap-6">
      {producten.map(x => (
        <div key={x._id} className="product col-span-1 mb-12">
          <Link href={`/${x.categorieurl}/${x._id}`}>
            <a>
              <Image className="product__foto shadow cursor-pointer" src={`${x.imageUrl}`} width="800" height="800" alt={x.naam} />
            </a>
          </Link>
          <div className="product__info mt-3">
            <Link href={`/${x.categorieurl}/${x.id}`}>
              <span className="product__title hover:underline cursor-pointer">{x.naam}</span>
            </Link>
            <div className="product__prijs">
              <span>{x.prijs}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default ProductGridList
