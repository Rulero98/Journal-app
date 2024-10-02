import { LoginWithEmailPassword, LogoutFirebase, registerUserWithEmailPassword, signInWithGoogle } from "../../firebase/providers"
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

export const startCreatingUserWithEmailPassword = ({ email, password, displayName }) => {
  return async (dispatch) => {
    dispatch(checkingCredentials())
    const { ok, uid, photoURL, errorMessage } = await registerUserWithEmailPassword({ email, password, displayName })
    if (!ok) return dispatch(logout({ errorMessage }))
    dispatch(login({ uid, displayName, email, photoURL }))
  }
}

export const startLoginWithEmailPassword = ({ email, password }) => {

  return async (dispatch) => {
    dispatch(checkingCredentials())
    const res = await LoginWithEmailPassword({ email, password })
    if (!res.ok) return dispatch(logout(res))
    dispatch(login(res))
  }

}

export const startLogout = () => {
  return async (dispatch) => {
    await LogoutFirebase()
    dispatch(logout({}))
  }
}