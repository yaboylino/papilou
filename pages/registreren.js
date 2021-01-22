import Head from "next/head"
import Link from "next/link"
import { useRef } from "react"
import axios from "redaxios"
import Layout from "../components/Layout"

export default function Register() {
  const emailRef = useRef()
  const wachtwoordRef = useRef()

  const doRegister = async () => {
    const data = {
      email: emailRef.current.value,
      wachtwoord: wachtwoordRef.current.value
    }

    const result = await axios.post("/api/registreren", data)
    console.log(result)
    // TODO: login & redirect to home
  }

  return (
    <Layout>
      <div className="bg-coolGray-100 w-full h-full">
        <Head>
          <title>LOVEissue - Registreren</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className="w-full h-full flex flex-col items-center justify-center">
          <h1 className="text-coolGray-600 mb-2 text-2xl font-bold">Task Manager: Register</h1>

          <div className="bg-white p-4 shadow sm:rounded-md sm:overflow-hidden">
            <div className="w-64 mb-2">
              <label htmlFor="email" className="block text-sm font-medium text-coolGray-700">
                Email
              </label>
              <input id="email" name="email" type="email" placeholder="Email" autoComplete="email" className="my-1 p-1 block w-full border border-coolGray-700 rounded-md focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500" ref={emailRef} />
            </div>
            <div className="w-64 mb-4">
              <label htmlFor="wachtwoord" className="block text-sm font-medium text-coolGray-700">
                Wachtwoord
              </label>
              <input id="wachtwoord" name="wachtwoord" type="wachtwoord" placeholder="Password" className="my-1 p-1 block w-full border border-coolGray-700 rounded-md focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500" ref={wachtwoordRef} />
            </div>

            <div className="flex w-full items-center justify-between">
              <Link href="/login">
                <a className="text-sm text-coolGray-600">Login</a>
              </Link>

              <button className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" onClick={doRegister}>
                Registreren
              </button>
            </div>
          </div>
        </main>
      </div>
    </Layout>
  )
}
