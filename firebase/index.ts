import firebase from "firebase/app"

const firebaseConfig = {
  apiKey: "AIzaSyBANw4Oag6fS-q42OmR6FIfgs39EENSLSU",
  authDomain: "bus-app-d6ce6.firebaseapp.com",
  databaseURL: "https://bus-app-d6ce6.firebaseio.com",
  projectId: "bus-app-d6ce6",
  storageBucket: "bus-app-d6ce6.appspot.com",
  messagingSenderId: "321917531054",
  appId: "1:321917531054:web:dd8656aec6008106f1ce3f",
}

if (!firebase.apps.length) firebase.initializeApp(firebaseConfig)
