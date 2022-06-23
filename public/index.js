 // Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.7.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
 // TODO: Add SDKs for Firebase products that you want to use
 // https://firebase.google.com/docs/web/setup#available-libraries

 // Your web app's Firebase configuration
const firebaseConfig = {
   apiKey: "AIzaSyDxQmO2S55R9JiCWs8qDaqAMPw-0OqWBT8",
   authDomain: "soundit-e65d8.firebaseapp.com",
   projectId: "soundit-e65d8",
   storageBucket: "soundit-e65d8.appspot.com",
   messagingSenderId: "1072890351086",
   appId: "1:1072890351086:web:2b7ad4feba1be2887592ff"
};

displaySignUp.style.display = none;   

 // Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();

