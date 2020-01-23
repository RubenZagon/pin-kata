import { combineReducers, createStore } from "redux";
import displayNumber from './reducers/display';




const reducer = combineReducers({
  displayNumber
})

let storePinPad = createStore(reducer)

export default storePinPad