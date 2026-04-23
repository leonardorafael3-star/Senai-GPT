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

});