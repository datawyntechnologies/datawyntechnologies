gsap.registerPlugin(ScrollTrigger);

// Laptop
gsap.to(".hero-laptop", {
  y: -80,
  rotation: -4,
  ease: "none",
  scrollTrigger: {
    trigger: ".main-slider__slide-1",
    start: "top bottom",
    end: "bottom top",
    scrub: 2,
  },
});

// Desktop
gsap.to(".hero-pc", {
  y: 100,
  rotation: 3,
  ease: "none",
  scrollTrigger: {
    trigger: ".main-slider__slide-1",
    start: "top bottom",
    end: "bottom top",
    scrub: 2,
  },
});

// Tablet
gsap.to(".hero-tab", {
  y: -120,
  x: 30,
  rotation: -8,
  ease: "none",
  scrollTrigger: {
    trigger: ".main-slider__slide-1",
    start: "top bottom",
    end: "bottom top",
    scrub: 2,
  },
});

// Mobile
gsap.to(".hero-mobile", {
  y: 120,
  x: -20,
  rotation: 10,
  ease: "none",
  scrollTrigger: {
    trigger: ".main-slider__slide-1",
    start: "top bottom",
    end: "bottom top",
    scrub: 2,
  },
});
