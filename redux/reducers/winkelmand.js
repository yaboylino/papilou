import producten from "../../data/producten"

let initialStore = {
  producten,
  artikelen: [],
  winkelmand: 0,
  totaal: 0,
  klantgegevens: {}
}

const winkelmandReducer = (state = initialStore, action) => {
  switch (action.type) {
    case "TOEVOEGEN_WINKELMAND":
      let tempItem
      let tempTotaal = state.totaal
      let tempMand = state.artikelen
      tempMand.push(action.payload[0])

      return {
        ...state,
        artikelen: tempMand,
        winkelmand: state.winkelmand + 1,
        totaal: state.totaal + action.payload[0].prijs
      }
    case "VERWIJDEREN_WINKELMAND":
      tempItem = action.payload.item
      tempMand = state.artikelen
      let mand = []
      for (let index = 0; index < tempMand.length; index++) {
        if (index !== action.payload.index) {
          mand.push(tempMand[index])
        }
      }
      return { ...state, winkelmand: state.winkelmand - 1, artikelen: mand, totaal: state.totaal - tempItem.prijs }
    case "BETALEN":
      let tempKlant = {
        voornaam: action.payload.voornaam,
        achternaam: action.payload.achternaam,
        straatnaam: action.payload.straatnaam,
        huisnummer: action.payload.huisnummer,
        postcode: action.payload.postcode,
        plaats: action.payload.plaats,
        provincie: action.payload.provincie,
        email: action.payload.email,
        telefoon: action.payload.telefoon,
        land: action.payload.land,
        artikelen: state.artikelen,
        totaal: state.totaal.toFixed(2)
      }
      return { ...state, klantgegevens: tempKlant }
    default:
      return state
  }
}

export default winkelmandReducer
