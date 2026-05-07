gsap.registerPlugin(ScrollTrigger);

gsap.from(".quadrado", {
  opacity: 0,
  y: 40,
  filter: "blur(20px)",
  scrollTrigger: {
    trigger: ".container",
    start: "30% top",
    end: "100% bottom",
    markers: true,
    scrub: 1
  },
});
