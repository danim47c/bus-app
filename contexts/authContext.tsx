import { createContext, ReactNode } from "react"
import useAuth, { authType } from "../hooks/useAuth"

const AuthContext = createContext<authType>(undefined)

export default AuthContext

export const AuthContextProvider = ({ children }: { children: ReactNode }) => {
  const auth = useAuth()

  return <AuthContext.Provider value={auth} children={children} />
}
