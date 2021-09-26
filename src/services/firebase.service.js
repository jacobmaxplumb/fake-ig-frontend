import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import env from 'react-dotenv';

const firebaseConfig = {
  apiKey: env.API_KEY,
  authDomain: env.AUTH_DOMAIN,
  projectId: env.PROJECT_ID,
  storageBucket: env.STORAGE,
  messagingSenderId: env.MESSAGE_SENDER,
  appId: env.APP_ID,
  measurementId: env.MEASUREMENT_ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
export const auth = getAuth(app);

export const signInUser = () => {
  return signInWithPopup(auth, provider).then(() => {
    return auth.currentUser;
  })
}

export const signOutUser = () => {
  return signOut(auth)
}

export const updateUser = (data) => {
  return updateProfile(auth.currentUser, data);
}

export const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
     const unsubscribe = auth.onAuthStateChanged(user => {
        unsubscribe();
        resolve(user);
     }, reject);
  });
}
