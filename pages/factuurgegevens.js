import React, { useState } from "react"
import Layout from "../components/Layout"
import { useRouter } from "next/router"
import { useDispatch, useSelector } from "react-redux"
import { betalen } from "../redux/actions"

const afrekendetails = () => {
  const dispatch = useDispatch()
  const router = useRouter()
  const prijs = useSelector(state => state.mand.totaal)
  const artikelen = useSelector(state => state.mand.artikelen)
  const winkelmand = useSelector(state => state.mand.winkelmand)

  const [gegevens, setGegevens] = useState({
    voornaam: "",
    achternaam: "",
    straatnaam: "",
    huisnummer: "",
    plaats: "",
    provincie: "",
    postcode: "",
    telefoon: "",
    land: "",
    email: "",
    totaal: prijs,
    artikelen: artikelen
  })

  return (
    <Layout>
      <div className="flex flex-col justify-between sm:py-4 py-14 min-h-screen ">
        <div className="winkelmand container mx-auto py-10 md:px-32">
          <h1 className="uppercase text-4xl px-5 sm:px-0">FACTUURGEGEVENS</h1>
          <div className="winkelmand_gridlist sm:px-0 px-5  mt-4">
            <form className="grid sm:grid-cols-2 grid-cols-1  gap-4 w-full">
              <div className="form__name w-full sm:col-span-1 col-span-2 mt-16">
                <label className="relative hidden active:block focus:top-0">Naam</label>
                <input className="border-b w-full outline-none" type="text" value={gegevens.voornaam} onChange={e => setGegevens({ ...gegevens, voornaam: e.target.value })} placeholder="Naam" autoComplete="given-name" />
              </div>
              <div className="form__name w-full sm:col-span-1 col-span-2 mt-16">
                <label className="relative hidden active:block focus:top-0">Achternaam</label>
                <input className="border-b w-full outline-none" type="text" value={gegevens.achternaam} onChange={e => setGegevens({ ...gegevens, achternaam: e.target.value })} placeholder="Achternaam" autoComplete="family-name" />
              </div>
              <div className="form__name w-full sm:col-span-1 col-span-2 mt-16">
                <label className="relative hidden active:block focus:top-0">Straatnaam</label>
                <input className="border-b w-full outline-none" type="text" value={gegevens.straatnaam} onChange={e => setGegevens({ ...gegevens, straatnaam: e.target.value })} placeholder="Straatnaam" autoComplete="street-address" />
              </div>
              <div className="form__name w-full sm:col-span-1 col-span-2 mt-16">
                <label className="relative hidden active:block focus:top-0">Huisnummer</label>
                <input className="border-b w-full outline-none" type="text" value={gegevens.huisnummer} onChange={e => setGegevens({ ...gegevens, huisnummer: e.target.value })} placeholder="Huisnummer" autoComplete="housenumber" />
              </div>
              <div className="form__name w-full sm:col-span-1 col-span-2 mt-16">
                <label className="relative hidden active:block focus:top-0">Postcode</label>
                <input className="border-b w-full outline-none" type="text" value={gegevens.postcode} onChange={e => setGegevens({ ...gegevens, postcode: e.target.value })} placeholder="Postcode" autoComplete="postal-code" />
              </div>
              <div className="form__name w-full sm:col-span-1 col-span-2 mt-16">
                <label className="relative hidden active:block focus:top-0">Woonplaats</label>
                <input className="border-b w-full outline-none" type="text" value={gegevens.plaats} onChange={e => setGegevens({ ...gegevens, plaats: e.target.value })} autoComplete="city" placeholder="Woonplaats" autoComplete="city" />
              </div>
              <div className="form__name w-full sm:col-span-1 col-span-2 mt-16">
                <label className="relative hidden active:block focus:top-0">Provincie</label>
                <input className="border-b w-full outline-none" type="text" value={gegevens.provincie} onChange={e => setGegevens({ ...gegevens, provincie: e.target.value })} autoComplete="region" placeholder="Provincie" />
              </div>
              <div className="form__name w-full sm:col-span-1 col-span-2 mt-16">
                <label className="relative hidden active:block focus:top-0">Land</label>
                <input className="border-b w-full outline-none" type="text" value={gegevens.land} onChange={e => setGegevens({ ...gegevens, land: e.target.value })} autoComplete="country" placeholder="Land" />
              </div>
              <div className="form__name w-full sm:col-span-1 col-span-2 mt-16">
                <label className="relative hidden active:block focus:top-0">E-mail</label>
                <input className="border-b w-full outline-none" type="text" value={gegevens.email} onChange={e => setGegevens({ ...gegevens, email: e.target.value })} placeholder="E-mail" autoComplete="email" />
              </div>
              <div className="form__name w-full sm:col-span-1 col-span-2 mt-16">
                <label className="relative hidden active:block focus:top-0">Telefoon</label>
                <input className="border-b w-full outline-none" type="text" value={gegevens.telefoon} onChange={e => setGegevens({ ...gegevens, telefoon: e.target.value })} autoComplete="phone" placeholder="Telefoon" />
              </div>
              <div className="form__name w-full col-span-2 mt-16">
                <input className="" type="checkbox" placeholder="Telefoon" />
                <label className="text-sm text-gray-700 ml-3">Ik wil persoonlijke commerciële berichten van LOVEissue per e-mail ontvangen.</label>
              </div>
            </form>
          </div>
        </div>
        <div className="winkelmand-totaal border-t sticky bottom-0 bg-white md:py-6 sm:py-2">
          <div className="winkelmand-totaal__footer md:w-5/6 sm:w-4/5 mx-auto sm:flex justify-center">
            <div className="w-full flex justify-center items-center sm:w-2/6">
              <button onClick={() => router.back()} className="uppercase bg-black text-white py-3 text-center sm:px-5 px-10 md:px-16 hidden sm:block">
                Terugkeren
              </button>
            </div>
            <div className="winkelmand-totaal sm:w-4/6 w-full mx-auto flex flex-col justify-center items-center xl:text-2xl lg:text-2xl md:text-lg">
              {prijs.toFixed(0) > 0 ? (
                <>
                  <div>
                    <p>
                      {winkelmand} artikel<span className={`${winkelmand > 1 ? "inline-block" : "hidden"}`}>en</span> in winkelmand
                    </p>
                  </div>
                  <div className="flex sm:block">
                    <h5 className="font-bold">TOTAAL {prijs.toFixed(2)} EUR</h5>
                    <p className="text-sm text-center hidden md:block">
                      {"  "}
                      <span className="block md:hidden"> </span>
                      <span className="block md:hidden"> </span> * inclusief btw
                    </p>
                  </div>
                </>
              ) : (
                <h5 className="font-bold">TOTAAL 0 EUR</h5>
              )}
            </div>
            <div className="w-full flex justify-center items-center sm:w-2/6">
              <button
                onClick={e => {
                  dispatch(betalen(gegevens), router.push("/betaalmethode"))
                }}
                className="uppercase bg-black text-white py-3 text-center sm:px-5 px-10 md:px-16 sm:mt-0 mt-5"
              >
                Doorgaan
              </button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default afrekendetails
