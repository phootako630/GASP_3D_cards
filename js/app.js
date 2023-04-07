import {gsap} from "./gsap.min";

gsap.registerPlugin(ScrollTrigger);

// logo加载动画
gsap.to('.logo', {
  y: 60,
  // rotateX:"45deg",
  skewX: "-25deg",
  duration: 2,
});
// 菜单加载动画
gsap.to('.nav', {
  x: -120,
  opacity:1,
  duration: 2,
});

// 发布日期动画
gsap.from('.date', {
  y: 120,
  opacity:0,
  duration: 2,
});
// 发布日期动画
gsap.from('.release', {
  x: 120,
  opacity:0,
  duration: 2,
});

// 第一部分
gsap.to('.first', {
  rotateX:"45deg",
  skewX: "-25deg",
  transformOrigin: "bottom",
   duration: 2,
   scrollTrigger: {
    trigger: '.first',
    scrub: true,
    start: 'top 25%',
    end: 'top top',
    // markers: true,
  },
});

gsap.to('.one img', {
  x:-30,
  scale: 1.2,
  transformOrigin: "bottom",
   duration: 2,
  scrollTrigger: {
    trigger: '.first',
    scrub: true,
    start: 'top 25%',
    end: 'top top',
    // markers: true,
  },
});

gsap.from('.one .time', {
  x:-50,
  opacity: 0,
  transformOrigin: "bottom",
   duration: 2,
  scrollTrigger: {
    trigger: '.first',
    scrub: true,
    start: 'top 25%',
    end: 'top top',
    // markers: true,
  },
});

gsap.from('.one .des', {
    x: -100,
  y:-100,
  // opacity: 0.5,
  transformOrigin: "bottom",
   duration: 2,
  scrollTrigger: {
    trigger: '.first',
    scrub: true,
    start: 'top 25%',
    end: 'top top',
    // markers: true,
  },
});

gsap.to('.one .btn', {
  y:-50,
  opacity: 0,
  transformOrigin: "bottom",
   duration: 2,
   scrollTrigger: {
    trigger: '.first',
    scrub: true,
    start: 'top 25%',
    end: 'top top',
    // markers: true,
  },
});


// 第二部分
gsap.to('.sec', {
  rotateX:"45deg",
  skewX: "-25deg",
  transformOrigin: "bottom",
  duration: 2,
  scrollTrigger: {
    trigger: '.sec',
    scrub: true,
    start: 'top 40%',
    end: 'top 15%',
    // markers: true,
  },
});

gsap.to('.two img', {
  x: -30,
  scale: 1.2,
  transformOrigin: "bottom",
  duration: 2,
  scrollTrigger: {
    trigger: '.sec',
    scrub: true,
    // start: 'top 60%',
    // end: 'top 35%',
    start: 'top 40%',
      end: 'top 15%',
    // markers: true,
  },
});

gsap.from('.two .time', {
  x: -50,
  opacity: 0,
  transformOrigin: "bottom",
  duration: 2,
  scrollTrigger: {
    trigger: '.sec',
    scrub: true,
    start: 'top 40%',
      end: 'top 15%',
    // markers: true,
  },
});

gsap.from('.two .des', {
    x: -100,
  y: -100,
  // opacity: 0.5,
  transformOrigin: "bottom",
  duration: 2,
  scrollTrigger: {
    trigger: '.sec',
    scrub: true,
    start: 'top 40%',
      end: 'top 15%',
    // markers: true,
  },
});

gsap.to('.two .btn', {
  y: -50,
  opacity: 0,
  transformOrigin: "bottom",
  duration: 2,
  scrollTrigger: {
    trigger: '.sec',
    scrub: true,
    start: 'top 40%',
      end: 'top 15%',
    // markers: true,
  },
});


// 第三部分

gsap.to('.third', {
  rotateX:"45deg",
  skewX: "-25deg",
  transformOrigin: "bottom",
   duration: 2,
  scrollTrigger: {
    trigger: '.third',
    scrub: true,
    start: 'top 50%',
    end: 'top 25%',
    // markers: true,
  },
});

gsap.to('.three img', {
  x: -30,
  scale: 1.2,
  transformOrigin: "bottom",
  duration: 2,
  scrollTrigger: {
    trigger: '.third',
    scrub: true,
    // start: 'top 80%',
    // end: 'top 55%',
        start: 'top 50%',
          end: 'top 25%',
    // markers: true,
  },
});

gsap.from('.three .time', {
  x: -50,
  opacity: 0,
  transformOrigin: "bottom",
  duration: 2,
  scrollTrigger: {
    trigger: '.third',
    scrub: true,
    start: 'top 50%',
      end: 'top 25%',
    // markers: true,
  },
});

gsap.from('.three .des', {
  x: -100,
  y: -100,
  // opacity: 0.5,
  transformOrigin: "bottom",
  duration: 2,
  scrollTrigger: {
    trigger: '.third',
    scrub: true,
     start: 'top 50%',
    end: 'top 25%',
    // markers: true,
  },
});

gsap.to('.three .btn', {
  y: -50,
  opacity: 0,
  transformOrigin: "bottom",
  duration: 2,
  scrollTrigger: {
    trigger: '.third',
    scrub: true,
      start: 'top 50%',
        end: 'top 35%',
    // markers: true,
  },
});