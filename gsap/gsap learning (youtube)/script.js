gsap.registerPlugin(ScrollTrigger);

gsap.to(".c", {
  scrollTrigger: {
    trigger: ".c",
    toggleActions: "restart pause reverse pause",
    markers: true,
  },
  x: 400,
  rotation: 360,
  duration: 3,
});
