/**
 * MODULES
 */
import { navbuilder } from './utils/navigation.js'
import { convertImages } from './modules/_svginline.js'
//import VueSplide from '@splidejs/vue-splide'
import LocomotiveScroll from 'locomotive-scroll';

import { gsap, ScrollTrigger,ScrollToPlugin,TweenMax,TimelineMax, MotionPathPlugin,CSSRulePlugin } from "gsap/all";
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin,TimelineMax,TweenMax,MotionPathPlugin,CSSRulePlugin);

//Vue.use(VueSplide)

/**
 * Files (webpack importation)
 */
//import '../../favicon.png' // import favicon file
/**
 * Run the application
 */
const run = () => {
  navbuilder();
  convertImages('img.is-svg');

}

document.addEventListener( 'DOMContentLoaded', function () {

  var eventslider = document.querySelector('#splide') !== null;
  var partnersslider = document.querySelector('.splide-part') !== null;


});


/////////////////
gsap.registerPlugin(ScrollTrigger);

const pageContainer = document.querySelector(".container");



/* SMOOTH SCROLL */
const scroller = new LocomotiveScroll({
  el: pageContainer,
  smooth: true
});



scroller.on("scroll", ScrollTrigger.update);

ScrollTrigger.scrollerProxy(pageContainer, {
  scrollTop(value) {
    return arguments.length
      ? scroller.scrollTo(value, 0, 0)
      : scroller.scroll.instance.scroll.y;
  },
  getBoundingClientRect() {
    return {
      left: 0,
      top: 0,
      width: window.innerWidth,
      height: window.innerHeight
    };
  },
  pinType: pageContainer.style.transform ? "transform" : "fixed"
});

////////////////////////////////////
////////////////////////////////////
window.addEventListener("load", function () {
  let pinBoxes = document.querySelectorAll(".pin-wrap > *");
  let pinWrap = document.querySelector(".pin-wrap");
  let pinWrapWidth = pinWrap.offsetWidth;
  let horizontalScrollLength = pinWrapWidth - window.innerWidth;
  let  tl = gsap.timeline();
  // Pinning and horizontal scrolling




  const mql = window.matchMedia('(min-width: 1024px)');


  ScrollTrigger.matchMedia({
    "(max-width: 959px)": () => {
      gsap.to(".pin-wrap", {
        scrollTrigger: {
          scroller: pageContainer, //locomotive-scroll
          scrub: true,
          trigger: "#sectionPin",
          pin: true,
          // anticipatePin: 1,
          start: "top top",
          end: "top bottom"
        },
        ease: "none"
      });
    },
    "(min-width: 960px)": () => {
      gsap.to(".pin-wrap", {
        scrollTrigger: {
          scroller: pageContainer, //locomotive-scroll
          scrub: true,
          trigger: "#sectionPin",
          pin: true,
          // anticipatePin: 1,
          start: "top top",
          end: pinWrapWidth
        },
        x: -horizontalScrollLength,
        ease: "none"
      });
      gsap.to('.ring--one', {
        x: -200,
        ease: "none",
        scrollTrigger: {
          scroller: pageContainer, //locomotive-scroll
          trigger: ".ring--one",
          start: "top center",
          end: +2000,
          scrub: true
        }
      })
      gsap.to('.ring--two', {
        x: -200,
        ease: "none",
        scrollTrigger: {
          scroller: pageContainer, //locomotive-scroll
          trigger: document.querySelectorAll(".ring--two")[0].parentNode,
          start: document.getElementById('sectionPin').offsetTop  + (pinWrapWidth/4),
          end: document.getElementById('sectionPin').offsetTop  + (pinWrapWidth/3.5),
          scrub: 1
        }
      })

      gsap.to('.ring--three', {
        x: -200,
        ease: "none",
        scrollTrigger: {
          scroller: pageContainer, //locomotive-scroll
          trigger: document.querySelectorAll(".ring--three")[0].parentNode,
          start: document.getElementById('sectionPin').offsetTop  + (pinWrapWidth/2.5),
          end: document.getElementById('sectionPin').offsetTop  + (pinWrapWidth/2),
          scrub: 1
        }
      })

      gsap.to('.ring--four', {
        x: -200,
        ease: "none",
        scrollTrigger: {
          scroller: pageContainer, //locomotive-scroll
          trigger: document.querySelectorAll(".ring--four")[0].parentNode,
          start: document.getElementById('sectionPin').offsetTop  + (pinWrapWidth/1.5),
          end: document.getElementById('sectionPin').offsetTop  + (pinWrapWidth/1.2),
          scrub: 1
        }
      })

      gsap.to('.ring--five', {
        x: -200,
        ease: "none",
        scrollTrigger: {
          scroller: pageContainer, //locomotive-scroll
          trigger: document.querySelectorAll(".ring--five")[0].parentNode,
          start: document.getElementById('sectionPin').offsetTop  + (pinWrapWidth/1.15),
          end: document.getElementById('sectionPin').offsetTop  + (pinWrapWidth/1.05),
          scrub: 1
        }
      })
    },
  });






  const balades= document.getElementById('balade');
  //const apprendre= document.getElementById('apprendre');
  //const travai= document.getElementById('travai');
  //const evenement= document.getElementById('evenement');
  //const detendre= document.getElementById('detendre');
  //const club= document.getElementById('club');
  const contact= document.getElementById('contact');

  document.querySelectorAll(".anchor__balade").forEach((button) => {
    button.addEventListener('click', (event) => {
      scroller.scrollTo(balades.offsetTop +  (pinWrapWidth/16));event.preventDefault();
    });
  });
  document.querySelectorAll(".anchor__apprendre").forEach((button) => {
    button.addEventListener('click', (event) => {
      scroller.scrollTo(balades.offsetTop +  (pinWrapWidth/2.25) );event.preventDefault();
    });
  });

  document.querySelectorAll(".anchor__travail").forEach((button) => {
    button.addEventListener('click', (event) => {
      scroller.scrollTo(balades.offsetTop +  (pinWrapWidth/4) );event.preventDefault();
    });
  });

  document.querySelectorAll(".anchor__evenement").forEach((button) => {
    button.addEventListener('click', (event) => {
      scroller.scrollTo(balades.offsetTop +  (pinWrapWidth/2) );event.preventDefault();
    });
  });

  document.querySelectorAll(".anchor__detendre").forEach((button) => {
    button.addEventListener('click', (event) => {
      scroller.scrollTo(balades.offsetTop +  (pinWrapWidth/1.2) );event.preventDefault();
    });
  });

  document.querySelectorAll(".anchor__club").forEach((button) => {
    button.addEventListener('click', (event) => {
      scroller.scrollTo(balades.offsetTop +  (pinWrapWidth/1.05) );event.preventDefault();
    });
  });

  document.querySelectorAll(".anchor__contact").forEach((button) => {
    button.addEventListener('click', (event) => {
      scroller.scrollTo(contact );event.preventDefault();
    });
  });

  ScrollTrigger.addEventListener("refresh", () => scroller.update()); //locomotive-scroll

  ScrollTrigger.refresh();
});

//////

////slice crossfade
var arrImg = []
var imgs = document.getElementsByClassName('slideImg')
for (var i = 0; i < imgs.length; i++) {
  var imgx = imgs[i];
  arrImg.push(imgx);
};
var next = 5; // time to change

function crossfade(){

  var action = new TimelineMax()
    .to(arrImg[0], 1, {autoAlpha:0})
    .to(arrImg[1], 1, {autoAlpha:1},0)

  arrImg.push( arrImg.shift() );
  // start endless run
  TweenMax.delayedCall(next, crossfade);
}
gsap.set(arrImg[0], {opacity: 0});
// start the crossfade after next = 3 sec
TweenMax.delayedCall(next, crossfade);

//////


run()


