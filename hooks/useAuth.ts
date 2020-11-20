import { useEffect, useState } from "react"

import firebase from "firebase/app"
import "firebase/auth"

export type authType = undefined | null | firebase.User

const useAuth = () => {
  const [auth, setAuth] = useState<authType>()

  useEffect(() => firebase.auth().onAuthStateChanged(setAuth), [])

  return auth
}

export default useAuth
