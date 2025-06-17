import { db } from "./firebase.config.js";
import { collection, getDocs } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-firestore.js";

const tbody = document.querySelector("tbody");

async function carregarOrcamentos() {
  const querySnapshot = await getDocs(collection(db, "orcamentos"));
  
  querySnapshot.forEach((doc) => {
    const dados = doc.data();

    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td>${dados.nome}</td>
      <td>${dados.email}</td>
      <td>${dados.telefone}</td>
      <td>${dados.descricao}</td>
    `;
    tbody.appendChild(tr);
  });
}

carregarOrcamentos();
