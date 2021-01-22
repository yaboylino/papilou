import React from "react"
import Head from "next/head"
import Nav from "./nav"
import { useRouter } from "next/router"

const Layout = ({ children }) => {
  const router = useRouter()
  return (
    <div>
      <Head>
        <title>LOVEissue</title>
      </Head>
      <Nav />
      <svg onClick={() => router.back()} className="cursor-pointer sm:hidden fixed ml-5 w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
      </svg>
      {children}
    </div>
  )
}

export default Layout
