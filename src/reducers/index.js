import { combineReducers } from "redux";
import favorite from './favorite'
import cart from './cart'

const rootReducer = combineReducers({
  favorite,
  cart,
})

export default rootReducer