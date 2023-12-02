export const animationFadeRight = gsap.fromTo(
    ".gsap-fade .fade-right",
    { x: 70, opacity: 0 },
    {
      x: 0,
      opacity: 1,
      duration: 1,
      scrollTrigger: {
        trigger: ".gsap-fade .fade-right",
        start: "top 70%",
        toggleActions: "play none none reset"
      }
    }
  );

 export const animationFadeLeft = gsap.fromTo(
    ".gsap-fade .fade-left",
    { x: -70, opacity: 0 },
    {
      x: 0,
      opacity: 1,
      duration: .9,
      scrollTrigger: {
        trigger: ".gsap-fade .fade-left",
        start: "top 70%",
        toggleActions: "play none none reset"
      }
    }
  );

  export const animationFadeLeft2 = gsap.fromTo(
    ".gsap-fade .fade-left2",
    { x: -70, opacity: 0 },
    {
      x: 0,
      opacity: 1,
      duration: .9,
      delay: 1,
      scrollTrigger: {
        trigger: ".gsap-fade .fade-left",
        start: "top 70%",
        toggleActions: "play none none reset"
      }
    }
  );

export const animationFadeDown = gsap.fromTo(
    ".gsap-fade .fade-down",
    { y: -50, opacity: 0 },
    {
      y: 0,
      opacity: 1,
      duration: .3,
      delay: 7,
      scrollTrigger: {
        trigger: ".gsap-fade .fade-down",
        start: "top 70%",
        toggleActions: "play none none reset"
      }
    }
  );


export const ballsMove = () => {
    let tl = new TimelineMax(),
ballsItems = document.querySelectorAll('.fade-balls');

tl.staggerFrom(ballsItems, 2, {
    scale: 0,
    ease: Bounce.easeOut,
    delay: 1.5,
  }, 0.2);
  tl.staggerFrom(ballsItems, 1, {
    ease: Bounce.easeOut,
    delay: 1.5,
  });
  tl.staggerFrom(ballsItems, 1, {
    ease: Bounce.easeOut,
    delay: 1.5,
  }); 
}


export const counter = () => {
    let counter = document.querySelector(".counter");
    let count = Number(counter.innerHTML);

setTimeout(() => {
    if (count < 100) {
        let interval = setInterval(() => {
            count += 2;
            counter.innerHTML = count + '+';
            if (count >= 100) {
                clearInterval(interval); 
            }
        }, 50);
    }
}, 4000);

}