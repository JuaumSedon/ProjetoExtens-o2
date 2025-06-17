// js/firebase.config.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyDHUWxNJz9E7uLRMVe3OMlSGbYueh703A0",
  authDomain: "projetoextensao-f4ef8.firebaseapp.com",
  projectId: "projetoextensao-f4ef8",
  storageBucket: "projetoextensao-f4ef8.appspot.com",
  messagingSenderId: "243689183957",
  appId: "1:243689183957:web:e574c44532ffbbe522605c",
  measurementId: "G-NB864ZS5HM"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth , db};
