import firebase from "firebase/app";
import 'firebase/firestore'


const firebaseConfig = {
    apiKey: "AIzaSyC7fmWxUWBs0g8GqNjjbLaulLssLcJYkq4",
    authDomain: "todo-list-9f940.firebaseapp.com",
    databaseURL: "https://todo-list-9f940.firebaseio.com",
    projectId: "todo-list-9f940",
    storageBucket: "todo-list-9f940.appspot.com",
    messagingSenderId: "799736468452",
    appId: "1:799736468452:web:7d0cba6f42d1b1b6c52df1",
    measurementId: "G-PVH7339GYK"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  const firestore = firebase.firestore()
  firestore.settings({timestampsInSnapshots: true})

export default firestore