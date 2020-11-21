import { useContext } from "react"
import AuthContext from "../../../contexts/authContext"

import { BarLoader } from "react-spinners"
import LoginButton from "./loginButton"
import LogoutButton from "./logoutButton"

const Header = () => {
  const auth = useContext(AuthContext)

  return (
    <header className="w-full h-16 flex justify-between items-center mb-4 px-4 sm:rounded-t-3xl shadow-md bg-custom-primary select-none">
      <h1 className="-mt-1 text-white text-3xl font-light">Bus App</h1>

      <div
        className={`flex items-center pl-3 rounded-full ${auth && "bg-white"}`}
      >
        <h2 className="mr-2 font-semibold text-custom-primary">
          {auth === null ? (
            <LoginButton />
          ) : !auth ? (
            <BarLoader width={70} color="#fff" />
          ) : (
            auth.displayName
          )}
        </h2>

        {auth && (
          <img
            className="rounded-full"
            width="35"
            height="35"
            alt={auth.displayName}
            src={auth.photoURL}
          />
        )}
      </div>

      {auth && <LogoutButton />}
    </header>
  )
}

export default Header
