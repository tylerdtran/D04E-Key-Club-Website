const slides = document.querySelectorAll('.slide');
const next = document.querySelector('#next');
const prev = document.querySelector('#prev');
const auto = true;
const intervalTime = 5000;
let slideInterval;
 
const nextSlide = () => {
   const current = document.querySelector('.current');
   // Remove current class
   current.classList.remove('current');
   // Check for next slide
   if(current.nextElementSibling){
       //Add current to next sibling
       current.nextElementSibling.classList.add('current');
   }
   else {
       //Add current to start
       slides[0].classList.add('current');
   }
   setTimeout(() => current.classList.remove('current'));
}
 
const prevSlide = () => {
   const current = document.querySelector('.current');
   // Remove current class
   current.classList.remove('current');
   // Check for next slide
   if(current.previousElementSibling){
       //Add current to next sibling
       current.previousElementSibling.classList.add('current');
   }
   else {
       //Add current to start
       slides[slides.length-1].classList.add('current');
   }
   setTimeout(() => current.classList.remove('current'));
}
 
next.addEventListener('click', e => {
   nextSlide();
   if(auto) {
       clearInterval(slideInterval);
       slideInterval = setInterval(nextSlide, intervalTime);
 
   }
});
 
prev.addEventListener('click', e => {
   prevSlide();
   if(auto) {
       clearInterval(slideInterval);
       slideInterval = setInterval(nextSlide, intervalTime);
 
   }
});
 
//Auto Slide
if(auto) {
   //Run next slide at Interval time
   slideInterval = setInterval(nextSlide, intervalTime)
}
//fade effect 
if (window.outerWidth > 768) {
    $(document).ready(function() {
        $(window).scroll(function(){
            $('.slider').css("opacity", 1 - $(window).scrollTop()/ 800 )
        })
    })
} 