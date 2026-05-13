gsap.registerPlugin(ScrollTrigger);

let valorMaskSize = "4000vw";

gsap.to(".mask", {
  maskSize: valorMaskSize,
  maskPosition: "52% 40%", // horizontal, vertical position
  scrollTrigger: {
    trigger: ".container",
    pin: true,
    start: "top top",
    end: "bottom 20%",
    scrub: 1,
  },
});

gsap.from(".content", {
  opacity: 0,
  y: 100,
  scrollTrigger: {
    trigger: ".content",
    start: "top top",
    end: "bottom 20%",
    scrub: 1,
  },
});
