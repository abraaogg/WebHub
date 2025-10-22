// childNodes -> nós filhos

// parentNode -> nó pai

let input = document.querySelector("input");

let paiInput = input.parentNode;

console.log(paiInput);

console.log(paiInput.nextSibling) // mostrar o próximo irmão

// Manipulação de Texto

// innerText -> leva em consideração o css

// textContent -> mostra o texto, ignora o css

// innerHtml -> mostra a tag HTML

let h3 = document.querySelector("h3");
const textoOculto = document.querySelector(".textoOculto")

alert(h3.innerText)