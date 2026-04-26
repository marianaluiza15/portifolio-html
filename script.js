function toggleDarkMode(){
  const body = document.body;
  const botao = document.querySelector(".dark-btn");

  body.classList.toggle("dark");

  if(body.classList.contains("dark")){
    botao.textContent = "☀️ Modo Claro";
  } else {
    botao.textContent = "🌙 Modo Escuro";
  }
}

window.addEventListener("scroll", function () {
  let botao = document.querySelector(".topo");

  if (window.scrollY > 150) {
    botao.classList.add("ativo");
  } else {
    botao.classList.remove("ativo");
  }
});