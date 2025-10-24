// Add event listener ->  maneira moderna de lidarmos com eventos da nossa pagina

let botao1 = document.querySelector(".botao1");
let botao2 = document.querySelector(".botao2");
let botao3 = document.querySelector(".botao3");
let input = document.querySelector("input");

// elemento.addEventListener("evento", function)

function clicarBotao() {
  alert("Botão Clicado");
}

botao1.addEventListener("click", clicarBotao);

input.addEventListener("keydown", () => {
  
});
