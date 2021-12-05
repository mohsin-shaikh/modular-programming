import * as t from "@/redux/types";

const main = (state = {
  name: "guest",
}, action) => {
  switch (action.type) {
    case t.SET_NAME:
      return {
        ...state,
        name: action.payload
      };
    default:
      return { ...state };
  }
}

export default main;