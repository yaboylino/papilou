import React, { useState } from "react"
import Layout from "../../components/Layout"
import ProductGridList from "../../components/winkel/ProductGridList"
import { serverRuntimeConfig } from "../../next.config"
import products from "../../data/producten"

export default function Categorie({ producten }) {
  const [winkelmandAantal, setWinkelmandAantal] = useState(0)

  return (
    <Layout>
      <div className="sm:py-4 py-14">
        <div className="px-8">
          <ProductGridList producten={producten} />
        </div>
      </div>
    </Layout>
  )
}

export async function getStaticProps({ params }) {
  const res = products
  const json = await res
  const producten = json

  // Pass post data to the page via props
  return { props: { producten } }
}

export async function getStaticPaths() {
  // Get the paths we want to pre-render based on posts
  const paths = products.map(product => `/${product.categorieurl}`)

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false }
}

// This also gets called at build time
