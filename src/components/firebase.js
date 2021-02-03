import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDbKrgHS87ZmQ3PLJOfMAAd5T0IPCtHswY",
    authDomain: "clone-212f1.firebaseapp.com",
    projectId: "clone-212f1",
    storageBucket: "clone-212f1.appspot.com",
    messagingSenderId: "57012462816",
    appId: "1:57012462816:web:d7b6bea391a0044dcc5c85",
    measurementId: "G-GZ63J0M8L3"
  };

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();

export { auth };