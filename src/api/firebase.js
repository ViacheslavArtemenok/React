import firebase from "firebase/compat"

const firebaseConfig = {
  apiKey: "AIzaSyDw4FxTzCmAtEeloCF9y0Srf96PYAaMeXw",
  authDomain: "gb-chat-46e90.firebaseapp.com",
  databaseURL:
    "https://gb-chat-46e90-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "gb-chat-46e90",
  storageBucket: "gb-chat-46e90.appspot.com",
  messagingSenderId: "308279840108",
  appId: "1:308279840108:web:9ee861389db5ac84493749",
  measurementId: "G-PMY9BJ3S3H",
}

export const firebaseApp = firebase.initializeApp(firebaseConfig)

export const db = firebaseApp.database()
