//Timeline

const quadrados = document.querySelectorAll(".quadrado"); // para fazer animação de cada quadrado separadamente
const tl = gsap.timeline({
  defaults: {
    duration: 1,
  },
  repeat: 1,
});

tl.to(".quadrado", {
  x: 100,
  y: -200,
  backgroundColor: "green",
  ease: "bounce.out(1,0.3)",
  stagger: 0.5,
})
  .to(".quadrado", {
    x: -50,
    y: 80,
    backgroundColor: "crimson",
    ease: "sine.out(1,0.3)",
    stagger: 0.5,
  })
  .to(".quadrado", {
    x: 0,
    y: 0,
    backgroundColor: "cornflowerblue",
    ease: "sine.out(1,0.3)",
    stagger: 0.5,
  });

const botaoPlay = document.querySelector(".play");
const botaoPause = document.querySelector(".pause");
const botaoReverse = document.querySelector(".reverse");

botaoPause.onclick = () => {
  tl.pause();
};
botaoPlay.onclick = () => {
  tl.play();
};
botaoReverse.onclick = () => {
  tl.reverse();
};

// += 1, começa 1 segundo depois que o quadrado anterior
// -= 1, começa 1 segundo antes que o quadrado anterior
// < começa junto com o quadrado anterior
// > começa depois com o quadrado anterior

// defaults -> permite a definição de valores padrões
