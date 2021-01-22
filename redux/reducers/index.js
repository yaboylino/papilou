import { combineReducers } from "redux"
import winkelmandReducer from "./winkelmand"

const rootReducer = combineReducers({
  mand: winkelmandReducer
})

export default rootReducer
