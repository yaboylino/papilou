import React, { useReducer, useState } from "react"
import Layout from "../components/Layout"
import Aankopen from "../components/account/Aankopen"
import Factuur from "../components/account/Factuur"
import { useRouter } from "next/router"
import { signIn, signOut, useSession } from "next-auth/client"

const bevestigen = () => {
  return (
    <Layout>
      <div className="flex flex-col justify-between min-h-screen sm:py-4 py-14">
        <div className="account container mx-auto py-10 md:px-32">
          <h1 className="uppercase text-4xl px-5 sm:px-0">Mijn Account</h1>
          <div className="account__layout mt-10 grid sm:grid-cols-3 grid-cols-1">hello</div>
        </div>
      </div>
    </Layout>
  )
}

export default bevestigen
