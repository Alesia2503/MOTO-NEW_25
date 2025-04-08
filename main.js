const indicator = document.querySelector('.nav-indicator');
const items = document.querySelectorAll('.nav-menu_link');

function handleIndicator(el) {
  items.forEach(item => {
    item.classList.remove('is-active');
    item.removeAttribute('style');
  });
  
  indicator.style.width = `${el.offsetWidth}px`;
  indicator.style.left = `${el.offsetLeft}px`;
  indicator.style.backgroundColor = el.getAttribute('active-color');

  el.classList.add('is-active');
  el.style.color = el.getAttribute('active-color');
}


items.forEach((item, index) => {
  item.addEventListener('click', (e) => { handleIndicator(e.target)});
  item.classList.contains('is-active') && handleIndicator(item);
});


const hamb = document.querySelector("#hamb");
const popup = document.querySelector("#popup");
const body = document.body;


const menu = document.querySelector(".nav_wrap").cloneNode(1);
const logo = document.querySelector(".header_logo").cloneNode(1)


hamb.addEventListener("click", hambHandler);


function hambHandler(e) {
  e.preventDefault();

  popup.classList.toggle("open");
  hamb.classList.toggle("active");
  body.classList.toggle("noscroll");
  renderPopup();
}


function renderPopup() {
  popup.appendChild(menu);
  popup.appendChild(logo)
}

const links = Array.from(menu.children);

links.forEach((link) => {
  link.addEventListener("click", closeOnClick);
});

function closeOnClick() {
  popup.classList.remove("open");
  hamb.classList.remove("active");
  body.classList.remove("noscroll");
}










// const scrollers = document.querySelectorAll(".scroller");

// if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
//   addAnimation();
// }

// function addAnimation() {
//   scrollers.forEach((scroller) => {

//     scroller.setAttribute("data-animated", true);

//     const scrollerInner = scroller.querySelector(".scroller__inner");
//     const scrollerContent = Array.from(scrollerInner.children);

//     scrollerContent.forEach((item) => {
//       const duplicatedItem = item.cloneNode(true);
//       duplicatedItem.setAttribute("aria-hidden", true);
//       scrollerInner.appendChild(duplicatedItem);
//     });
//   });
// }




// let video1 = document.querySelector('.video1')
// let video2 = document.querySelector('.video2')
// let video3 = document.querySelector('.video3')
// let btn1 = document.querySelector('.bar11')
// let btn2 = document.querySelector('.bar22')
// let btn3 = document.querySelector('.bar33')
// btn1.addEventListener('click', ()=> {
//   if (video1.play) {
//     video1.pause();
//   } 
//   if (video2.play) {
//     video2.pause();
//   };
//   if (video3.play) {
//     video3.pause();
//   };
// });
// btn2.addEventListener('click', ()=> {
//   if (video1.play) {
//     video1.pause();
//   };
//   if (video2.play) {
//     video2.pause();
//   };
//   if (video3.play) {
//     video3.pause();
//   };
  
// });
// btn3.addEventListener('click', ()=> {
//   if (video1.play) {
//     video1.pause();
//   } 
//   if (video2.play) {
//     video2.pause();
//   };
//   if (video3.play) {
//     video3.pause();
//   };
// });






document.addEventListener('DOMContentLoaded', function() {
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');
  const navContainer = document.querySelector('.nav-container');
  const mobileHeader = document.querySelector('.mobile-header');
  
  hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('open');
  hamburger.classList.toggle('open');
  });
  
  navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
  navLinks.classList.remove('open');
  hamburger.classList.remove('open');
  });
  });
  
  // Sticky navigation
  const nav = document.querySelector('.main-nav');
  let navTop = nav.offsetTop;
  
  function fixNav() {
  if (window.scrollY >= navTop) {
  nav.classList.add('sticky');
  } else {
  nav.classList.remove('sticky');
  }
  }
  
  window.addEventListener('scroll', fixNav);
  
  // Reviews Carousel
  const carouselTrack = document.querySelector('.carousel-track');
  const slides = Array.from(carouselTrack.children);
  const prevButton = document.querySelector('.carousel-button.prev');
  const nextButton = document.querySelector('.carousel-button.next');
  
  if (slides.length > 0) {
  const slideWidth = slides[0].getBoundingClientRect().width;
  
  const setSlidePosition = (slide, index) => {
  slide.style.left = slideWidth * index + 'px';
  };
  
  slides.forEach(setSlidePosition);
  
  const moveToSlide = (track, currentSlide, targetSlide) => {
  track.style.transform = 'translateX(-' + targetSlide.style.left + ')';
  currentSlide.classList.remove('current-slide');
  targetSlide.classList.add('current-slide');
  }
  
  // Set initial current slide
  slides[0].classList.add('current-slide');
  
  prevButton.addEventListener('click', e => {
  const currentSlide = carouselTrack.querySelector('.current-slide');
  const prevSlide = currentSlide.previousElementSibling;
  
  if (prevSlide) {
  moveToSlide(carouselTrack, currentSlide, prevSlide);
  }
  });
  
  nextButton.addEventListener('click', e => {
  const currentSlide = carouselTrack.querySelector('.current-slide');
  const nextSlide = currentSlide.nextElementSibling;
  
  if (nextSlide) {
  moveToSlide(carouselTrack, currentSlide, nextSlide);
  }
  });
  } else {
  // Hide buttons if no reviews
  prevButton.style.display = 'none';
  nextButton.style.display = 'none';
  }
  });























  const sliderContainer = document.querySelector('.slider-container');
const sliderTrack = document.querySelector('.slider-track');
const prevButton = document.querySelector('.slider-button.prev');
const nextButton = document.querySelector('.slider-button.next');
const images = document.querySelectorAll('.slider-track img');

let currentIndex = 0;
const imageWidth = images[0].clientWidth;
const imageCount = images.length;

function updateSlider() {
sliderTrack.style.transform = `translateX(-${currentIndex * imageWidth}px)`;
}

function moveToPrev() {
currentIndex--;
if (currentIndex < 0) {
currentIndex = imageCount - 1;
}
updateSlider();
}

function moveToNext() {
currentIndex++;
if (currentIndex >= imageCount) {
currentIndex = 0;
}
updateSlider();
}

prevButton.addEventListener('click', moveToPrev);
nextButton.addEventListener('click', moveToNext);

// Для кругового движения без кнопок (автоматически)
let intervalId = setInterval(moveToNext, 3000); // Смена слайдов каждые 3 секунды

sliderContainer.addEventListener('mouseenter', () => clearInterval(intervalId));
sliderContainer.addEventListener('mouseleave', () => intervalId = setInterval(moveToNext, 3000));