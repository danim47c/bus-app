import firebase from "firebase/app"
import "firebase/auth"
import Button from "../../base/button"

const LoginButton = () => {
  const handleClick = () =>
    firebase.auth().signInWithPopup(new firebase.auth.GoogleAuthProvider())

  return (
    <Button color="white" textColor="custom-primary" onClick={handleClick}>
      Login
    </Button>
  )
}

export default LoginButton
