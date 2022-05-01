// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDhVxjzwJpTPJyRp7pUPh1_E1b30Sq6gkg",
    authDomain: "genius-car-service-fb7d6.firebaseapp.com",
    projectId: "genius-car-service-fb7d6",
    storageBucket: "genius-car-service-fb7d6.appspot.com",
    messagingSenderId: "696332910502",
    appId: "1:696332910502:web:72050c38e6ae20b6cf9967"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

export default auth;