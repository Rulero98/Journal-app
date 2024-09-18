import { signInWithGoogle } from "../../firebase/providers"
import { checkingCredentials, login, logout } from "./authSlice"


export const checkingAuthentication = ({ email, password, status }) => {

  return async (dispatch) => {
    if (email === null || password === null) return
    dispatch(checkingCredentials())
  }
}

export const startGoogleSignIn = () => {
  return async (dispatch) => {
    dispatch(checkingCredentials())
    const result = await signInWithGoogle()

    if (!result.ok) return dispatch(logout(result.errorMessage))
    dispatch(login(result))


  }
}