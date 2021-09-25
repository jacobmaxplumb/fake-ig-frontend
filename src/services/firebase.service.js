// Import the functions you need from the SDKs you need
import axios from "axios";
import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut } from "firebase/auth";
import { axiosWithHeaders } from "./axios.interceptor";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAMNmOavSsAwKoNDTEVBJTVzCqrhvG1Ld4",
  authDomain: "fake-ig-demo.firebaseapp.com",
  projectId: "fake-ig-demo",
  storageBucket: "fake-ig-demo.appspot.com",
  messagingSenderId: "736644692439",
  appId: "1:736644692439:web:5ce6778a59b5d531e7f392",
  measurementId: "G-RNXWZFEG7B"
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

export const isTokenValid = () => {
  return axiosWithHeaders().get('http://localhost:8080/api/verifyToken').then(res => res.data).catch(error => {throw error});
}