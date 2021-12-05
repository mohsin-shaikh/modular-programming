import { SET_SCREEN_SHARING, SET_SCREEN_SHARING_REQUESTED, SET_SCREEN_SHARING_STREAM } from "@/redux/types";


const initialState = {
  isScreenSharing: false,
  screenSharingStream: null,
  isScreenSharingRequested: false,
};

const screenSharing = (state = initialState, action) => {
  switch (action.type) {
    case SET_SCREEN_SHARING:
      return {...state, isScreenShared: action.payload};
    case SET_SCREEN_SHARING_REQUESTED:
      return {...state, isScreenSharingRequested: action.payload};
    case SET_SCREEN_SHARING_STREAM:
      return {...state, screenSharingStream: action.payload};
    default:
      return { ...state };
  }
}

export default screenSharing;