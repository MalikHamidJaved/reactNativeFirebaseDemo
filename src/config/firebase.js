// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAgmqKKEKmGcrEs90c0cUV_dniI4XrnsO0",
  authDomain: "reactnativesample-d1514.firebaseapp.com",
  databaseURL: "https://reactnativesample-d1514-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "reactnativesample-d1514",
  storageBucket: "reactnativesample-d1514.appspot.com",
  messagingSenderId: "949223106163",
  appId: "1:949223106163:web:92fa209e09c46ed3e96c06",
  measurementId: "G-3G28TRSEC8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);