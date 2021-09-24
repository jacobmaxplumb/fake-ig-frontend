// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAgiqfIW24xGQwmjPL-Ja1DE2F15I6pm08",
  authDomain: "fake-ig-project.firebaseapp.com",
  projectId: "fake-ig-project",
  storageBucket: "fake-ig-project.appspot.com",
  messagingSenderId: "151630048504",
  appId: "1:151630048504:web:5f67da393594da1bf01f0d",
  measurementId: "G-GXGRMMLSYH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export const signInUser = () => {
    return signInWithPopup(auth, provider).then(result => {
        localStorage.setItem('token', `Bearer ${result.user.accessToken}`);
        localStorage.setItem('uid', result.user.uid);
    })
}

export const signOutUser = () => {
  return signOut(auth).then(() => {
    localStorage.removeItem('token');
    localStorage.removeItem('uid');
  })
}