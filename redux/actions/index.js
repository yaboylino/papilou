export const toevoegen = artikel => {
  return {
    type: "TOEVOEGEN_WINKELMAND",
    payload: artikel
  }
}

export const verwijderen = index => {
  return {
    type: "VERWIJDEREN_WINKELMAND",
    payload: index
  }
}
export const betalen = index => {
  return {
    type: "BETALEN",
    payload: index
  }
}
