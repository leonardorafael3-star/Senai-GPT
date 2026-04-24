function buscar() {
  const input = document.getElementById("searchInput").value;

  if (input.trim() === "") {
    alert("Digite algo para pesquisar!");
    return;
  }

  alert("Você buscou por: " + input);
}

function setTag(tag) {
  document.getElementById("searchInput").value = tag;
}





const toggleBtn = document.getElementById("themeToggle");

// Carregar preferência salva
if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("dark");
  toggleBtn.textContent = "☀️";
}

// Alternar tema
toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");

  if (document.body.classList.contains("dark")) {
    localStorage.setItem("theme", "dark");
    toggleBtn.textContent = "☀️";
  } else {
    localStorage.setItem("theme", "light");
    toggleBtn.textContent = "🌙";
  }

}

)

const chatContainer = document.getElementById("chatContainer");
const chatMessages = document.getElementById("chatMessages");

function buscar() {
  const inputEl = document.getElementById("searchInput");
  const texto = inputEl.value.trim();

  if (texto === "") return;

  // mostra o chat
  chatContainer.classList.remove("hidden");

  // mensagem do usuário
  addMessage(texto, "user");

  inputEl.value = "";

  // simulação de resposta do bot
  setTimeout(() => {
    const resposta = gerarResposta(texto);
    addMessage(resposta, "bot");
  }, 600);
}

function addMessage(texto, tipo) {
  const msg = document.createElement("div");
  msg.classList.add("message", tipo);
  msg.innerText = texto;

  chatMessages.appendChild(msg);

  // scroll automático
  chatMessages.scrollTop = chatMessages.scrollHeight;
}

// respostas simples (pode evoluir depois)
function gerarResposta(pergunta) {
  if (pergunta.toLowerCase().includes("curso")) {
    return "Temos vários cursos disponíveis! Quer técnico, graduação ou EAD?";
  }

  if (pergunta.toLowerCase().includes("ead")) {
    return "Os cursos EAD permitem estudar no seu ritmo, direto da sua casa.";
  }

 if (pergunta.toLowerCase().includes("graduação")) {
    return "Legal, os cursos Graduação são os mais completos.";
  }

   if (pergunta.toLowerCase().includes("inovação")) {
    return "Legal, os cursos Graduação são os mais completos.";
  }
  
  return "Interessante! Me conte mais sobre o que você quer aprender.";
}


document.getElementById("searchInput").addEventListener("keypress", function(e) {
  if (e.key === "Enter") {
    buscar();
  }
}
);