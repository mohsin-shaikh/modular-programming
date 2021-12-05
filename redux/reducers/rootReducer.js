import { combineReducers } from "redux";
import main from "@/redux/reducers/main";
import screenSharing from "@/redux/reducers/screenSharing";

const rootReducer = combineReducers({
  main: main,
  screenSharing: screenSharing
});

export default rootReducer;