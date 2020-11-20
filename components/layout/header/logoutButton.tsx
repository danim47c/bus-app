import firebase from "firebase/app"
import "firebase/auth"
import { AiOutlineLogout } from "react-icons/ai"
import Button from "../../base/button"

const LogoutButton = () => {
  const handleClick = () => firebase.auth().signOut()

  return (
    <Button icon color="white" textColor="custom-primary" onClick={handleClick}>
      <AiOutlineLogout size={20} />
    </Button>
  )
}

export default LogoutButton
