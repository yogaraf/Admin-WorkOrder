import { OWNER_LOGIN, OWNER_LOGOUT } from "./constants";

let initialState = localStorage.getItem("auth")
  ? JSON.parse(localStorage.getItem("auth"))
  : { token: null, role: null, refreshToken: null };

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case OWNER_LOGIN:
      return {
        token: action.token,
        role: action.role,
        refreshToken: action.refreshToken,
      };

    case OWNER_LOGOUT:
      return { token: null, role: null, refreshToken: null };

    default:
      return state;
  }
}
