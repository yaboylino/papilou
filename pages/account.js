import React, { useReducer, useState } from "react"
import Layout from "../components/Layout"
import { useDispatch, useSelector } from "react-redux"
import Aankopen from "../components/account/Aankopen"
import Factuur from "../components/account/Factuur"
import { useRouter } from "next/router"
import { signIn, signOut, useSession } from "next-auth/client"

function reducer(state, action) {
  switch (action.type) {
    case "aankopen":
      return { aankopen: true, facturen: false, accountgegevens: false }
    case "facturen":
      return { aankopen: false, facturen: true, accountgegevens: false }
    case "accountgegevens":
      return { aankopen: false, facturen: false, accountgegevens: true }
    default:
      return state
  }
}

const account = () => {
  const [session, loading] = useSession()
  const router = useRouter()

  if (session === null) {
    router.push("/login")
  }
  const [state, dispatch] = useReducer(reducer, { aankopen: false, facturen: false, accountgegevens: false })

  function aankopen() {
    dispatch({ type: "aankopen" })
  }
  function facturen() {
    dispatch({ type: "facturen" })
  }
  function accountgegevens() {
    dispatch({ type: "accountgegevens" })
  }

  return (
    <Layout>
      {session === null ? (
        ""
      ) : (
        <div className="flex flex-col justify-between min-h-screen sm:py-4 py-14">
          <div className="account container mx-auto py-10 md:px-32">
            <h1 className="uppercase text-4xl px-5 sm:px-0">Mijn Account</h1>
            <div className="account__layout mt-10 grid sm:grid-cols-3 grid-cols-1">
              <div className="account__menu col-span-1">
                <ul className="sm:block flex justify-around">
                  <li onClick={aankopen} className={`${state.aankopen === true ? "ml-5 text-black" : "text-gray-400"} text-2xl cursor-pointer`}>
                    AANKOPEN
                  </li>
                  <li onClick={facturen} className={`${state.facturen === true ? "ml-5 text-black" : "text-gray-400"} text-2xl cursor-pointer`}>
                    FACTUREN
                  </li>
                  <li onClick={accountgegevens} className={`${state.accountgegevens === true ? "ml-5 text-black" : "text-gray-400"} text-2xl cursor-pointer`}>
                    GEGEVENS
                  </li>
                  <li onClick={() => signOut()} className="mt-10 text-gray-400 text-2xl cursor-pointer">
                    UITLOGGEN
                  </li>
                </ul>
              </div>
              <div className="account__main sm:mt-0 mt-10 col-span-2 px-5">
                <div className="">{state.facturen === true ? <Factuur /> : ""}</div>
                <div className="">{state.aankopen === true ? <Aankopen /> : ""}</div>
              </div>
            </div>
          </div>
        </div>
      )}
    </Layout>
  )
}

export default account
