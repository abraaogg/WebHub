gsap.registerPlugin(ScrollTrigger);

gsap.to(".quadrado", {
  scale: 5,
  scrollTrigger: {
    trigger: ".container",
    start: "top top%",
    end: "bottom 50%",
    markers: true,
    scrub: 2,
    pin: true,
  },
});
