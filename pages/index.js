import React, { useState } from "react"
import Layout from "../components/Layout"
import ProductGridList from "../components/winkel/ProductGridList"
import { serverRuntimeConfig } from "../next.config"
import products from "../data/producten"
import { signIn, signOut, useSession } from "next-auth/client"

export default function IndexPage({ producten }) {
  const [session, loading] = useSession()
  console.log(session)
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
