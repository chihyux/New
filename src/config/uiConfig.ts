import firebase from 'firebase/app'
import * as firebaseui from 'firebaseui'
import 'firebase/firebase-firestore'
import 'firebase/auth'

const uiConfig = ({
  signInSuccessUrl: '/',
  signInOptions: [
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
  ],
  signInFlow: 'popup'
})

// This sets up firebaseui
const ui = new firebaseui.auth.AuthUI(firebase.auth())

// This adds firebaseui to the page
// It does everything else on its own
export const startFirebaseUI = function (elementId:string) {
  ui.start(elementId, uiConfig)
}


