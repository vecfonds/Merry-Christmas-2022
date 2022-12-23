let select = (s) => document.querySelector(s),
  selectAll = (s) => document.querySelectorAll(s),
  toArray = (s) => gsap.utils.toArray(s),
  pContainer = select("#pContainer"),
  mainSVG = select("#mainSVG"),
  star = select(".star"),
  cross = select(".cross"),
  heart = select(".heart"),
  circ = select(".circ"),
  //particleColorArray = ['#E8F6F8', '#ACE8F8', '#F6FBFE','#A2CBDC','#B74551', '#5DBA72', '#910B28', '#910B28', '#446D39'],
  particleColorArray = [
    "#FF3253",
    "#009AA4",
    "#EFE6D2",
    "#A2CBDC",
    "#B74551",
    "#910B28",
    "#910B28",
    "#f5c52e",
  ],
  particleTypeArray = [star, cross, heart, circ],
  surpriseColorArray = ["#efe6d2", "#9B001C", "url(#textPattern)"],
  numParticles = 200,
  particleArray = [],
  fuseDuration = 6,
  allSurpriseText = toArray("#surpriseText text"),
  messageText = "MERRY CHRISTMAS!!"; //emojis are fine too 😊

const regexEmoji =
  /[\p{Extended_Pictographic}\u{1F3FB}-\u{1F3FF}\u{1F9B0}-\u{1F9B3}]/u;

gsap.set("svg", {
  visibility: "visible",
});
allSurpriseText.forEach((t, c) => {
  //don't put emoji in the other 2 text fields if emoji found
  t.innerHTML = regexEmoji.test(messageText) && c > 0 ? "" : messageText;
  gsap.set(t, {
    fill: surpriseColorArray[c],
  });
});
gsap.set("#pContainer", {
  opacity: 0,
});

CustomBounce.create("bounce", {
  strength: 0.25,
  squash: 5,
  squashID: "squash",
});
const createParticles = () => {
  let i = numParticles;
  while (--i > -1) {
    let clone = gsap.utils.random(particleTypeArray).cloneNode(true);
    pContainer.appendChild(clone);
    gsap.set(clone, {
      fill: gsap.utils.random(particleColorArray),
      x: 400,
      y: 350,
      //opacity: 0,
      transformOrigin: "50% 50%",
      scale: "random(1, 6)",
    });
    particleArray.push(clone);
  }
};

createParticles();

let particleDuration = gsap.utils.random(2, 6);
var tl = gsap.timeline();
tl.set(".fuse", {
  drawSVG: "0% 0%",
})
  .set(".baubleCrown", {
    y: 30,
  })
  .set("#sparkGroup *", {
    scale: 0,
    transformOrigin: "50% 50%",
  })
  .add("platform")
  .from(
    ".platform",
    {
      duration: 1,
      drawSVG: "50% 50%",
      ease: "expo.inOut",
    },
    "platform"
  )
  .from(
    ".main",
    {
      opacity: 0,
    },
    "platform"
  )
  .add("intro")
  .from(
    ".whole",
    {
      duration: 6,
      x: 500,
      transformOrigin: "50% 67.5%",
      rotation: 300,
      ease: "elastic(0.8,0.8)",
    },
    "intro"
  )
  .from(
    "#shadow",
    {
      duration: 6,
      x: 500,
      transformOrigin: "50% 50%",
      rotation: 360 - gsap.getProperty(".whole", "rotation"),
      ease: "elastic(0.8,0.8)",
    },
    "intro"
  )
  .add("fuse", "-=3.5")
  .set("#pContainer", {
    opacity: 1,
  })
  .to(
    ".baubleCrown",
    {
      y: 0,
    },
    "fuse-=0.5"
  )
  .to(
    ".fuse",
    {
      drawSVG: "0% 100%",
    },
    "fuse"
  )
  .from(
    "#fuseGroup",
    {
      duration: 0.5,
      rotation: -10,
      transformOrigin: "50% 90%",
      ease: "sine.inOut",
    },
    "fuse+=0.9"
  )
  .fromTo(
    "#sparkGroup *",
    {
      scale: "random(0.4, 2)",
      rotation: "random(-180, 180)",
      transformOrigin: "50% 50%",
    },
    {
      duration: 0.08,
      rotation: "random(180, -180)",
      transformOrigin: "50% 50%",
      immediateRender: false,
      repeatRefresh: true,
      scale: "random(0.1, 1)",
      repeat: fuseDuration / 0.08,
    },
    "fuse+=0.5"
  )
  .to(
    "#sparkGroup",
    {
      transformOrigin: "50% 50%",
      scale: 0.3,
      duration: fuseDuration,
      ease: "none",
    },
    "fuse+=0.5"
  )
  .to(
    "#sparkGroup",
    {
      motionPath: {
        path: ".fuse",
        align: ".fuse",
        alignOrigin: [0.5, 0.5],
        start: 1,
        end: 0,
      },
      duration: fuseDuration,
      ease: "none",
    },
    "fuse+=1"
  )
  .to(
    ".fuse",
    {
      duration: fuseDuration,
      drawSVG: "0% 0%",
      ease: "none",
    },
    "fuse+=1"
  )
  .add("pop", "-=1")
  .to(
    particleArray,
    {
      duration: particleDuration,
      scale: 0,
      //opacity: 0,
      rotation: "random(-3000, 3000)",
      //ease: 'sine.in'
    },
    "pop"
  )
  .to(
    particleArray,
    {
      duration: particleDuration,
      physics2D: {
        velocity: "random(1000, 1500)",
        angle: "random(-180, 180)",
        gravity: "random(1200, 2500)",
      },
      stagger: 0.0008,
      ease: "expo",
    },
    "pop"
  )
  .set(
    ".main",
    {
      opacity: 0,
    },
    "pop"
  )
  .to(
    ".main",
    {
      scale: 1.2,
      duration: 0.1,
    },
    "pop-=0.1"
  )
  .fromTo(
    "#pow *",
    {
      scale: 0,
      transformOrigin: "50% 50%",
      opacity: 1,
    },
    {
      duration: 0.1,
      stagger: 0.008,
      scale: 1.5,
      ease: "slow(0.3, 0.5, true)",
      transformOrigin: "50% 50%",
      //opacity: 0
    },
    "pop-=0.025"
  )
  .from(
    "#surpriseText",
    {
      y: 60,
      duration: 1,
      scale: 0,
      transformOrigin: "50% 50%",
      ease: "elastic(0.73, 0.4)",
    },
    "pop+=0.1"
  )
  .from(
    "#surpriseText",
    {
      rotation: -180,
      duration: 0.3,
      transformOrigin: "50% 50%",
      ease: "expo",
    },
    "pop+=0.1"
  )
  .set(
    ".platform",
    {
      opacity: 0,
    },
    "pop"
  );
