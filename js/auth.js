import { auth } from "./firebase.js";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } 
from "https://www.gstatic.com/firebasejs/9.23.0/firebase-auth.js";

window.signup = () => {
  createUserWithEmailAndPassword(auth, email.value, password.value)
  .then(()=>alert("Signed up"));
}

window.login = () => {
  signInWithEmailAndPassword(auth, email.value, password.value)
  .then(()=>alert("Logged in"));
}
