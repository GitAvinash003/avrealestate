import { Carousel, initMDB } from "mdb-ui-kit";

initMDB({ Carousel });
const scroll = new SmoothScroll('a[href*="#"]', {
    speed: 800, // Animation duration in milliseconds
    easing: 'easeInOutCubic', // Easing function
});
$('a[href^="#"]').click(function(event) {
    event.preventDefault();
    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 800); // Animation duration in milliseconds
});
const myOffcanvas = document.getElementById('myOffcanvas')
myOffcanvas.addEventListener('hidden.bs.offcanvas', event => {
  // do something...
})