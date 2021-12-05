import { combineReducers } from "redux"
import main from "@/redux/reducers/main"

const rootReducer = combineReducers({
  main: main
})

export default rootReducer;