// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAX3SvKWcIpbquHKndwpmyzb3KkQ5gm_PI",
  authDomain: "the-news-dragon-client-49bbd.firebaseapp.com",
  projectId: "the-news-dragon-client-49bbd",
  storageBucket: "the-news-dragon-client-49bbd.appspot.com",
  messagingSenderId: "171516510480",
  appId: "1:171516510480:web:310ce65432d2fa04b5a595"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;