// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCz7JMZq2eA8vEu_tEAV1yYoWxUxEcuvJs",
  authDomain: "reef-techno.firebaseapp.com",
  projectId: "reef-techno",
  storageBucket: "reef-techno.appspot.com",
  messagingSenderId: "577272794322",
  appId: "1:577272794322:web:b517e2cc225512457ef10b",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
