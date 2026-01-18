import { storage } from "./firebase.js";
import { ref, uploadBytes } 
from "https://www.gstatic.com/firebasejs/9.23.0/firebase-storage.js";

window.upload = () => {
  const file = document.getElementById("file").files[0];
  const storageRef = ref(storage, "videos/"+file.name);
  uploadBytes(storageRef, file).then(()=>alert("Uploaded"));
}
