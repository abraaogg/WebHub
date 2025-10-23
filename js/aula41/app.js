

//.style.

const divPai = document.querySelector(".divPai");
const buttons = {
  botaoAmarelo: "rgb(255, 255, 83)",
  botaoVerde: "rgb(124, 255, 124)",
  botaoAzul: "rgb(78, 161, 255)",
  botaoVermelho: "rgb(255, 76, 76)",
  reset: "rgb(34, 34, 34)"
};

for (const [id, color] of Object.entries(buttons)) {
  const btn = document.querySelector(`.${id}`);
  if (btn) {
    btn.onclick = () => {
      divPai.style.backgroundColor = color;
    };
  }
}
