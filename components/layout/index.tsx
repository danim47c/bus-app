import { ReactNode } from "react"
import { AuthContextProvider } from "../../contexts/authContext"
import Header from "./header"

const Layout = ({ children }: { children: ReactNode }) => (
  <AuthContextProvider>
    <div className="sm:h-screen flex justify-center items-center background">
      <div
        className="
      w-full sm:w-10/12 sm:max-w-mobile
      h-screen sm:h-5/6 sm:max-h-mobile
      flex flex-col items-center
      rounded-3xl shadow-2xl
      bg-white"
      >
        <Header />

        {children}
      </div>
    </div>
  </AuthContextProvider>
)

export default Layout
