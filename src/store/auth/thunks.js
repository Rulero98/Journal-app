import { checkingCredentials } from "./authSlice"


export const checkingAuthentication = ({ email, password, status }) => {

  return async (dispatch) => {
    if (email === null || password === null) return
    dispatch(checkingCredentials())
  }
}

export const startGoogleSignIn = () => {
  return async (dispatch) => {
    dispatch(checkingCredentials())
  }
}