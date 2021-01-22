import React from "react"
import { useRouter } from "next/router"
import { useSelector } from "react-redux"

const WinkelmandTotaal = () => {
  const router = useRouter()
  const prijs = useSelector(state => state.mand.totaal)
  const winkelmand = useSelector(state => state.mand.winkelmand)

  return (
    <div className="winkelmand-totaal border-t sticky bottom-0 bg-white sm:py-6 py-2">
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
          <button onClick={() => router.push("/factuurgegevens")} className="uppercase bg-black text-white py-3 text-center sm:px-5 px-10 md:px-16 sm:mt-0 mt-5">
            Doorgaan
          </button>
        </div>
      </div>
    </div>
  )
}

export default WinkelmandTotaal
