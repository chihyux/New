import firebase from 'firebase/app'
import 'firebase/firebase-firestore'
import 'firebase/auth'

var config = {
    apiKey: "AIzaSyAQed_5fbdPu9b4srz6IA_qCg4tRsAbNLc",
    authDomain: "cart-36a4d.firebaseapp.com",
    databaseURL: "https://cart-36a4d.firebaseio.com",
    projectId: "cart-36a4d",
    storageBucket: "cart-36a4d.appspot.com",
    messagingSenderId: "913324545240",
    appId: "1:913324545240:web:0ac54ab115aa8b22c1f3ad",
    measurementId: "G-D0LLHFBHE9"
  }

firebase.initializeApp(config);


export default firebase
