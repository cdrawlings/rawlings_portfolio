gsap.registerPlugin(ScrollTrigger);

function horizontalScroll(){

  const sections = gsap.utils.toArray(".panel");

  gsap.to(sections, {
    xPercent: -100 * (sections.length - 1),
    ease: "none",
    scrollTrigger: {
      trigger: ".horizontal",
      pin: true,
      scrub: 1,
      snap: 1 / (sections.length - 1),
      // base vertical scrolling on how wide the container is so it feels more natural.
      end: function end() {
        return "+=" + document.querySelector(".horizontal").offsetWidth;
      }
    }
  });
}


function initImageParallax(){
  // select all sections with parallax
  gsap.utils.toArray('.with-parallax').forEach(section => {

    // get the image
    const image = section.querySelector('img');

    console.log(image)

    //creat tween
    gsap.to(image, {
      yPercent: 20,
      opacity: 1,
      ease: 'none',
      scrollTrigger: {
        trigger: section,
        start: 'top center',
        end: 'center center',
        scrub: true
      }
    })
  })

}

function init(){

  // initImageParallax();
  horizontalScroll();

}

window.addEventListener('load', function(){
  init();
});
