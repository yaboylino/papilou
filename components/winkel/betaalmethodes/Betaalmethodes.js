import React from "react"
import ApplePay from "./ApplePay"
import BanContact from "./BanContact"
import CreditCard from "./CreditCard"
import Ideal from "./Ideal"
import Klarna from "./Klarna"
import Paypal from "./Paypal"

const Betaalmethodes = ({ gegevens, handleSubmit }) => {
  return (
    <div className="winkelmand_gridlist grid grid-cols-2 sm:grid-cols-3 mt-20">
      <div className="betaalmethode__btn col-span-1 flex justify-center items-center flex-col mt-8">
        <button className="h-3/5 w-3/5">
          <Ideal gegevens={gegevens} />
          <h3 className="uppercase mt-3">ideal</h3>
        </button>
      </div>
      <div className="betaalmethode__btn col-span-1 flex justify-center items-center flex-col mt-8">
        <button className="h-3/5 w-3/5">
          <Klarna gegevens={gegevens} />
          <h3 className="uppercase mt-3">klarna</h3>
        </button>
      </div>
      <div className="betaalmethode__btn col-span-1 flex justify-center items-center flex-col mt-8">
        <button className="h-3/5 w-3/5">
          <BanContact gegevens={gegevens} />
          <h3 className="uppercase mt-3">bancontact</h3>
        </button>
      </div>
      <div className="betaalmethode__btn col-span-1 flex justify-center items-center flex-col mt-8">
        <button className="h-3/5 w-3/5">
          <Paypal gegevens={gegevens} />
          <h3 className="uppercase mt-3">paypal</h3>
        </button>
      </div>
      <div className="betaalmethode__btn col-span-1 flex justify-center items-center flex-col mt-8">
        <button className="h-3/5 w-3/5">
          <CreditCard gegevens={gegevens} />
          <h3 className="uppercase mt-3">creditcard</h3>
        </button>
      </div>
      <div className="betaalmethode__btn col-span-1 flex justify-center items-center flex-col mt-8">
        <button className="h-3/5 w-3/5">
          <ApplePay gegevens={gegevens} />
          <h3 className="uppercase mt-3">apple pay</h3>
        </button>
      </div>
    </div>
  )
}

export default Betaalmethodes
