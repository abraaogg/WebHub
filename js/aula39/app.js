let listaDeTarefas = document.querySelector(".listaDeTarefas");

// elementoPai.appendChild(elementoFilho) -> adicionar filho ao elemento pai

// createElement

let itemLista = document.createElement("li");

itemLista.innerText = "Primeiro item";

listaDeTarefas.appendChild(itemLista);

for (let i = 0; i < 5; i++) {
  let itemLista = document.createElement("li");
  itemLista.innerText = `Item ${i + 1}`;
  listaDeTarefas.appendChild(itemLista)
}
