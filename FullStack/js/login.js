import { auth } from "./firebase.config.js";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword
} from "https://www.gstatic.com/firebasejs/11.9.1/firebase-auth.js";

// Alternar formulário
export function showRegisterForm() {
  document.getElementById("loginForm").style.display = "none";
  document.getElementById("registerForm").style.display = "block";
  clearMessages();
}

export function showLoginForm() {
  document.getElementById("registerForm").style.display = "none";
  document.getElementById("loginForm").style.display = "block";
  clearMessages();
}

function clearMessages() {
  document.getElementById("loginMessage").textContent = "";
  document.getElementById("registerMessage").textContent = "";
}

// Cadastro
export function submitRegister() {
  const email = document.getElementById("registerEmail").value.trim();
  const password = document.getElementById("registerPassword").value;
  const confirmPassword = document.getElementById("registerConfirmPassword").value;
  const msg = document.getElementById("registerMessage");

  if (!email || !password || !confirmPassword) {
    msg.textContent = "Todos os campos são obrigatórios.";
    msg.style.color = "red";
    return;
  }

  if (password !== confirmPassword) {
    msg.textContent = "As senhas não coincidem.";
    msg.style.color = "red";
    return;
  }

  createUserWithEmailAndPassword(auth, email, password)
    .then(() => {
      msg.style.color = "green";
      msg.textContent = "Cadastro realizado com sucesso!";
      setTimeout(() => {
        showLoginForm();
        document.getElementById("registerForm").reset();
      }, 800);
    })
    .catch((error) => {
      let errorMessage = "";

      switch (error.code) {
        case "auth/email-already-in-use":
          errorMessage = "Este e-mail já está cadastrado.";
          break;
        case "auth/invalid-email":
          errorMessage = "E-mail inválido.";
          break;
        case "auth/weak-password":
          errorMessage = "A senha precisa ter pelo menos 6 caracteres.";
          break;
        default:
          errorMessage = "Erro: " + error.message;
          break;
      }

      msg.textContent = errorMessage;
      msg.style.color = "red";
    });
}

// Login
export function submitLogin() {
  const email = document.getElementById("loginEmail").value.trim();
  const password = document.getElementById("loginPassword").value;
  const msg = document.getElementById("loginMessage");

  if (!email || !password) {
    msg.textContent = "Preencha todos os campos.";
    msg.style.color = "red";
    return;
  }

  signInWithEmailAndPassword(auth, email, password)
    .then(() => {
      msg.style.color = "green";
      msg.textContent = "Login realizado com sucesso!";
      setTimeout(() => {
        window.location.href = "index.html";
      }, 800);
    })
    .catch((error) => {
      let errorMessage = "";

      switch (error.code) {
        case "auth/invalid-credential":
          errorMessage = "E-mail ou senha incorretos.";
          break;
        case "auth/user-not-found":
          errorMessage = "Usuário não encontrado.";
          break;
        case "auth/wrong-password":
          errorMessage = "Senha incorreta.";
          break;
        case "auth/too-many-requests":
          errorMessage = "Muitas tentativas. Tente novamente mais tarde.";
          break;
        case "auth/invalid-email":
          errorMessage = "E-mail inválido.";
          break;
        default:
          errorMessage = "Erro: " + error.message;
          break;
      }

      msg.textContent = errorMessage;
      msg.style.color = "red";
    });
}
