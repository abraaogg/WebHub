const tl = gsap.timeline({ defaults: { duration: 0.5 } });

tl.from(".titulo", {
  y: 50,
  opacity: 0,
})
  .from(".content", {
    opacity: 0,
  })
  .from(".kinich", {
    scaleY: 0,
    transformOrigin: "top",
  })
  .fromTo(".wiki-link", { opacity: 0 }, { opacity: 1 })
  .from(".cards", {
    width: 0,
  })
  .from(".card",{
    opacity: 0,
    y: 12,
    stagger: .2
  })
