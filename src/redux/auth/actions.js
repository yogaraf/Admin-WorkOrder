import { OWNER_LOGIN, OWNER_LOGOUT } from "./constants";

export function ownerLogin(token, role, refreshToken) {
  return {
    type: OWNER_LOGIN,
    token,
    role,
    refreshToken,
  };
}

export function ownerLogout() {
  localStorage.removeItem("auth");
  return {
    type: OWNER_LOGOUT,
  };
}
