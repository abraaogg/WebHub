//Timeline

/* gsap.to(".quadrado",
    {
        x: 100,
        y: -200,
        backgroundColor: "green",
        duration: 2,
        ease: "elastic.out(1,0.3)" 
    }
)
gsap.to(".quadrado",
    {
        x: -50,
        y: 100,
        backgroundColor: "crimson",
        duration: 2,
        ease: "elastic.out(1,0.3)" ,
        delay: 2
    }
)
 */
const tl = gsap.timeline();

tl.to(".quadrado", {
  x: 100,
  y: -200,
  backgroundColor: "green",
  duration: 2,
  ease: "bounce.out(1,0.3)",
  stagger: 0.5,
}).to(".quadrado", {
  x: -50,
  y: 100,
  backgroundColor: "crimson",
  duration: 2,
  ease: "sine.out(1,0.3)",
  stagger: 0.5,
}).to(".quadrado", {
  x: 0,
  y: 0,
  backgroundColor: "cornflowerblue",
  duration: 2,
  ease: "sine.out(1,0.3)",
  stagger: 0.5,
});


const botaoPlay = document.querySelector(".play");
const botaoPause = document.querySelector(".pause");
