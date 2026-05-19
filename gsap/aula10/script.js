gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

ScrollSmoother.create({
	smooth: 1, // Suave é a rolagem -> PC
	effects: true, // Suave é a rolagem -> MOBILE
	smoothTouch: 0.1 // possibilitar efeitos com scroll
});

/* gsap.to("h1",{
  y:-400,
  scrollTrigger:{
    trigger: ".divPai",
    start: "0% 0%",
    end: "100% 0%",
    scrub: true
  }
}) */