// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCEUoR2Uq9antT2UTk33pITqbS7GlcSfyc",
    authDomain: "independent-service-prov-96d02.firebaseapp.com",
    projectId: "independent-service-prov-96d02",
    storageBucket: "independent-service-prov-96d02.appspot.com",
    messagingSenderId: "126997303603",
    appId: "1:126997303603:web:7a19d298a7b2bfa1ac6e46"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;