import { SET_SCREEN_SHARING_STREAM } from "@/redux/types";


export const setScreenSharingStream = (data) => dispatch => {
  dispatch({
    type: SET_SCREEN_SHARING_STREAM,
    payload: data
  });
}