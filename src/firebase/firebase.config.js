// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBPAeY-5wEzft6pKisvsaAQct6bSBg0rUw",
  authDomain: "creaturecove-client.firebaseapp.com",
  projectId: "creaturecove-client",
  storageBucket: "creaturecove-client.appspot.com",
  messagingSenderId: "643145224078",
  appId: "1:643145224078:web:8518317b4d039dd0845edf"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;