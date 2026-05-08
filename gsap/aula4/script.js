gsap.registerPlugin(ScrollTrigger);

/* gsap.from(".quadrado", {
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
}); */

const triggerSettings = {
  trigger: ".container",
  start: "top center",
  end: "bottom center",
  markers: true,
};


gsap.to(".quadrado1", {
  rotation: 360,
  scale: 0.8,
  scrollTrigger: {
    scrub: 2,
  },
});

gsap.to(".quadrado2", {
  borderRadius: "50%",
  rotation: 360,
  scale: 1.2,
  margin: "40px",
  scrollTrigger: {
    scrub: 4,
  },
});

gsap.to(".quadrado3, .quadrado4", {
  rotation: -360,
  scrollTrigger: {
    scrub: 2,
  },
});