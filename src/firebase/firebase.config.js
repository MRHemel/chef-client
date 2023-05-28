// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyALA5MQIrozKEWT9JfjqeKlhROdjoW-dOc",
    authDomain: "chef-recipe-fair.firebaseapp.com",
    projectId: "chef-recipe-fair",
    storageBucket: "chef-recipe-fair.appspot.com",
    messagingSenderId: "1033772715958",
    appId: "1:1033772715958:web:cd068d101242d9a7bdfb17"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;