import { auth } from "./firebase.config.js";
import { signOut, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-auth.js";

const btnLogout = document.getElementById("btnLogout");
const btnAdmin = document.getElementById("btnAdmin");
const areaLogin = document.getElementById("areaLogin");
const areaAdmin = document.getElementById("areaAdmin"); 
const areaLogout = document.getElementById("areaLogout"); 

// Verifica estado de autenticação
onAuthStateChanged(auth, (user) => {
  if (user) {
    // Usuário está logado
    areaLogout.style.display = "block";
    areaLogin.style.display = "none";

    if (user.email === "admin@email.com") {
      areaAdmin.style.display = "block";
    } else {
      areaAdmin.style.display = "none";
    }
  } else {
    // Usuário não está logado
    areaLogout.style.display = "none";
    areaAdmin.style.display = "none";
    areaLogin.style.display = "block";
  }
});

// Função de Logout
btnLogout.addEventListener("click", () => {
  signOut(auth)
    .then(() => {
      window.location.href = "login.html";
    })
    .catch((error) => {
      alert("Erro ao sair: " + error.message);
    });
});
