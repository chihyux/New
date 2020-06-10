import firebase from 'firebase/app'

export const uiConfig = ({
  signInSuccessUrl: '/',
  signInOptions: [
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
  ],
  signInFlow: 'popup'
})




