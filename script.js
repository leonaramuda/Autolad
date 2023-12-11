function submitMsg() {
  alert("Login Successful!")
}

function reviewMsg() {
  alert("Your review has been successfully submitted.")
}

function submitContactMsg() {
  alert("Request has been successfully submitted.")
}

$ = function(popup1) {
  return document.getElementById(popup1);
}
  
var show = function(popup1) {
    $(popup1).style.display ='block';
}
var hide = function(popup1) {
    $(popup1).style.display ='none';
}

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("carousel-pic");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}


  // $(document).ready(function() {
  //   var currentIndex = 0;
  //   var images = $(".carousel-pic");
  //   var container = $(".carousel-image-container");
  //   var imageWidth = images.eq(0).width();
  
  //   container.css("width", imageWidth * images.length);
  
  //   function slideNext() {
  //     currentIndex++;
  //     if (currentIndex >= images.length) {
  //       currentIndex = 0;
  //     }
  //     container.css("transform", "translateX(-" + imageWidth * currentIndex + "px)");
  //   }
  
  //   setInterval(slideNext, 3000); // Change image every 3 seconds
  // });
