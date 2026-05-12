gsap.registerPlugin(scrollTrigger);

gsap.to(".mask", {
  maskSize: "2000vw",
  scrollTrigger: {
    trigger: ".container",
    pin: true,
    start: "top top",
    end: "bottom 20%",
    scrub: 1
  },
});
