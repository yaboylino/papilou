import React, { useState } from "react"
import Layout from "../components/Layout"
import WinkelmandTotaal from "../components/winkel/WinkelmandTotaal"
import Link from "next/link"
import { useSelector, useDispatch } from "react-redux"
import { verwijderen } from "../redux/actions"

const winkelmand = () => {
  const dispatch = useDispatch()
  const [render, setRender] = useState(true)

  let artikelen = useSelector(state => state.mand.artikelen)
  let prijs = useSelector(state => state.mand.totaal)

  console.log(artikelen)

  return (
    <Layout>
      <div className="flex flex-col justify-between min-h-screen sm:py-4 py-14">
        <div className="winkelmand container mx-auto py-10 md:px-32">
          <h1 className="uppercase text-4xl px-5 sm:px-0">Winkelmand</h1>
          {artikelen.length === 0 ? (
            <div style={{ height: "60vh" }} className="flex justify-center items-center">
              <div className="flex flex-col justify-center items-center">
                <svg className="md:w-full md:h-full w-1/2 h-1/2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"></path>
                </svg>
                <p className="uppercase text-2xl md:text-4xl">Je mandje is leeg</p>
              </div>
            </div>
          ) : (
            <div className="winkelmand_gridlist grid md:grid-cols-3 sm:grid-cols-2 gap-6  mt-10">
              {artikelen.map((item, index) => (
                <div key={index}>
                  <div className="col-span-1 flex">
                    <div className="product sm:mb-12 flex sm:block px-5 sm:px-0">
                      <Link href={`/${item.categorieurl}/${item._id}`}>
                        <img className="product__foto shadow cursor-pointer w-24 h-auto sm:w-full" src={`${item.imageUrl}`} alt="" />
                      </Link>
                      <div className="product__info mt-5 pl-5 sm:pl-0">
                        <Link href="/product-categorie/1">
                          <span className="product__title hover:underline cursor-pointer">{item.naam}</span>
                        </Link>
                        <div className="product__prijs mt-10 sm:mt-3 flex text-gray-500 justify-between items-center">
                          <span>{item.prijs} EUR</span>
                          <svg
                            onClick={e => {
                              setRender(!render), dispatch(verwijderen({ item, index }))
                            }}
                            className="w-6 h-6"
                            fill="none"
                            stroke="red"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                  <hr className="sm:hidden mt-6" />
                </div>
              ))}
            </div>
          )}
        </div>
        <WinkelmandTotaal prijs={prijs} />
      </div>
    </Layout>
  )
}

export default winkelmand
