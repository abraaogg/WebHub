// Mapear elementos

const input = document.querySelector("input");
const botao = document.querySelector("button");
const ul = document.querySelector("ul");

// Hide UL initially if empty
ul.style.display = "none";

// Pegar value do input -> const inputValue = input.value;

// Quando eu clicar no botão:

botao.onclick = () => {
  if (input.value !== "") {
    const inputValue = input.value;
    let novaLi = document.createElement("li");
    novaLi.innerText = inputValue;
    ul.appendChild(novaLi);
    // 🧹 clear the input after clicking
    input.value = "";
    //

    // Show UL when it has items
    ul.style.display = "block";
    //
    input.focus();
    renderList();
  } else {
    alert("Your task is empty");
  }
};

// Apagar um item da lista

const arrayItens = document.querySelectorAll("li");

function renderList() {
  const arrayItens = document.querySelectorAll("li");

  arrayItens.forEach((item) => {
    item.onclick = () => ul.removeChild(item);
  });
}

renderList();

// Optional: observe when items are removed (if you add a delete feature later)
const observer = new MutationObserver(() => {
  if (ul.children.length === 0) {
    ul.style.display = "none";
  }
});

observer.observe(ul, { childList: true });