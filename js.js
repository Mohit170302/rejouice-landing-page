function locoscroll(){
    gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector(".main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the ".smooth-scroll" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy(".main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
});

// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();
}

locoscroll();

function cursorEff(){
    let pg1Con=document.querySelector(".pg1-con"); 
let cursor=document.querySelector(".cursor");

// pg1Con.addEventListener("mousemove",function(val){
//         cursor.style.left=val.x+"px";
//         cursor.style.top=val.y+"px";
// })     or 


//                      Using gsap
pg1Con.addEventListener("mousemove",function(val){
     gsap.to(cursor,{
        x:val.x,
        y:val.y,
     })
})

pg1Con.addEventListener("mouseenter",function(){
    gsap.to(cursor,{
        scale:1,
        opacity:1,
    })
})

pg1Con.addEventListener("mouseleave",function(){
    gsap.to(cursor,{
        scale:0,
        opacity:0,
    })
})

}
cursorEff();



function pg2Animation(){
    gsap.from(".elem h1",{
        y: 120,
       stagger:0.25,
        duration: 1,
        scrollTrigger: {
              trigger: ".pg2",
              scroller: ".main",
              start: "top 40%",
              end: "top 37%",
              scrub: 2,
        }
    })
} 
pg2Animation();  

function pg2topAnimation(){
  gsap.from(".pg2-top h3",{
      y: 120,
     stagger:0.25,
      duration: 1,
      scrollTrigger: {
            trigger: ".pg2",
            scroller: ".main",
            start: "top 40%",
            end: "top 37%",
            scrub: 2,
      }
  })
} 
pg2topAnimation(); 

function pg2top1Animation(){
  gsap.from(".pg2-top h4",{
      y: 120,
     stagger:0.25,
      duration: 1,
      scrollTrigger: {
            trigger: ".pg2",
            scroller: ".main",
            start: "top 40%",
            end: "top 37%",
            scrub: 2,
      }
  })
} 
pg2top1Animation();

function pg4Animation(){
  gsap.from(".elem1 h1",{
      y: 120,
     stagger:0.25,
      duration: 1,
      scrollTrigger: {
            trigger: ".pg4",
            scroller: ".main",
            start: "top 40%",
            end: "top 37%",
            scrub: 2,
      }
  })
} 
pg4Animation(); 

function pg4topAnimation(){
  gsap.from(".pg4-top h3",{
      y: 120,
     stagger:0.25,
      duration: 1,
      scrollTrigger: {
            trigger: ".pg4",
            scroller: ".main",
            start: "top 40%",
            end: "top 37%",
            scrub: 2,
      }
  })
} 
pg4topAnimation(); 

function pg6Animation(){
  gsap.from(".elem2 h1",{
      y: 120,
     stagger:0.25,
      duration: 1,
      scrollTrigger: {
            trigger: ".pg6",
            scroller: ".main",
            start: "top 40%",
            end: "top 37%",
            scrub: 2,
      }
  })
} 
pg6Animation(); 

function pg6topAnimation(){
  gsap.from(".pg6-top h3",{
      y: 120,
     stagger:0.25,
      duration: 1,
      scrollTrigger: {
            trigger: ".pg6",
            scroller: ".main",
            start: "top 40%",
            end: "top 37%",
            scrub: 2,
      }
  })
} 
pg6topAnimation();

//  function slider(){
//   var swiper = new Swiper(".mySwiper", {
//     slidesPerView: 1,
//     spaceBetween: 30,
//     loop: true,
//     autoplay: {
//       delay: 2500000,
//       disableOnInteraction: true,
//     },
//   });
// }
// slider();

var tl=gsap.timeline()

tl.from(".loder h3",{
  x:40,
  opacity:0,
  duration:1,
  stagger:0.1
})
tl.to(".loder h3",{
  opacity:0,
  x:-10,
  duration:1,
  stagger:0.1

})
tl.to(".loder",{
  opacity:0
})
tl.from(".pg1-con h1 span",{
  y:100,
  opacity:0,
  stagger:0.1,
  duration:0.5,
  delay:-0.5
})
tl.to(".loder",{
  display:"none"
})


let enter=document.querySelector(".pg8");

enter.addEventListener("mouseenter",function(){
  

  tl.from(".pg8-con h1 span",{
    y:-100,
   
    opacity:0,
    color:"red",
    stagger:0.1,
    duration:0.5,
    delay:1

  })
})
enter.addEventListener("mouseleave",function(){
         
})






  




