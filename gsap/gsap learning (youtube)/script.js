gsap.registerPlugin(ScrollTrigger);

/* 
toggleActions:

1. onEnter → "restart"

When scrolling DOWN and reaching the start:

restart

The animation starts again from the beginning.


2. onLeave → "pause"

When scrolling DOWN past the end:

pause

The animation freezes where it is.


3. onEnterBack → "reverse"

When scrolling UP back into the trigger:

reverse

The animation plays backward.


4. onLeaveBack → "pause"

When scrolling UP past the start:

pause

The reverse animation pauses.
*/
gsap.to(".c", {
  scrollTrigger: {
    trigger: ".c",
    start: "20px 80%",
    end: "+=300",
    toggleActions: "restart pause reverse pause",
    scrub: 1,
    markers: true,
  },
  x: 400,
  rotation: 360,
  duration: 3,
});
