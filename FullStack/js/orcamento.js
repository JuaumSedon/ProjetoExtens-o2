import { db } from "./firebase.config.js";
import { collection, addDoc } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-firestore.js";

// Pega o formulário
const form = document.getElementById("orcamentoForm");

// Evento de envio do formulário
form.addEventListener("submit", async (e) => {
    e.preventDefault();

    // Pega os valores dos campos
    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const telefone = document.getElementById("telefone").value;
    const descricao = document.getElementById("descricao").value;

    try {
        // Envia os dados para o Firestore
        await addDoc(collection(db, "orcamentos"), {
            nome: nome,
            email: email,
            telefone: telefone,
            descricao: descricao
        });

        alert("Orçamento enviado com sucesso!");
        form.reset(); // Limpa o formulário após envio
    } catch (error) {
        alert("Erro ao enviar orçamento: " + error);
        console.error("Erro:", error);
    }
});
