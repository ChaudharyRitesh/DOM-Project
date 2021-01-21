'use strict';

////////////////////////////////////////////////////////////
///////////// ELEMENTS SELECTION FOR QUERIES //////////////
//////////////////////////////////////////////////////////

// for modal popups selection
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

// for scroll btns
const btnScroll = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');
const allSection = document.querySelectorAll('.section');

// for tabbed components
const tabs = document.querySelectorAll('.operations__tab');
const tabContainer = document.querySelector('.operations__tab-container');
const tabContent = document.querySelectorAll('.operations__content');

// img target btns
const imgTargets = document.querySelectorAll('img[data-src]');

// slider btns
const slides = document.querySelectorAll('.slide');
const btnLeft = document.querySelector('.slider__btn--left');
const btnRight = document.querySelector('.slider__btn--right');
const dotContainer = document.querySelector('.dots');

// nav selection
const nav = document.querySelector('.nav');
const header = document.querySelector('.header')
///////////////////////////////////////////////////////////////
////////////// SELECTING ELEMENTS ENDS HERE///////////////////


/////////////////////////////////////////////////////////
//============ Modal popup window ==============//

const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

////////////////////////////////////////////////////////


/////////////////////////////////////////////////////////
//============ TOGGLE TO PAGES SECTION ==============//

//1. Add event listener to common parent element
document.querySelector('.nav__links').addEventListener('click', function(e) {
  e.preventDefault();

  // 2. Determine which element triggers the event and
  // matching target element
  if(e.target.classList.contains('nav__link')) {
    const id = e.target.getAttribute('href');
    document.querySelector(id).scrollIntoView({behavior: 'smooth'});
  }
});
/////////////////////////////////////////////////////////



/////////////////////////////////////////////////////////
//============ SWITCH TABBED COMPONENTS ==============//

tabContainer.addEventListener('click', function(e) {

  const clicked = e.target.closest('.operations__tab');
  // ignore clicks
  if(!clicked) return;

  // remove active tab
  tabs.forEach(t => t.classList.remove('operations__tab--active'));
  tabContent.forEach(c => c.classList.remove('operations__content--active'));

  clicked.classList.add('operations__tab--active');

  // activate the content area to respective tabs
  document.querySelector(`.operations__content--${clicked.dataset.tab}`).classList.add('operations__content--active');
});
/////////////////////////////////////////////////////////



/////////////////////////////////////////////////////////
//============= HOVER ANIMATION EFFECT ===============//

// navigation bar hover fade effects and passing the arguments to an event handlers

const handleHover = function(e) {
  if(e.target.classList.contains('nav__link')) {
    const linkClicked = e.target;

    const siblings = linkClicked.closest('.nav').querySelectorAll('.nav__link');
    const logo = linkClicked.closest('.nav').querySelector('img');

    siblings.forEach(el => {
      if(el !== linkClicked) el.style.opacity = this;
    });

    logo.style.opacity = this;
  }
}

// passing an argument into a handler
nav.addEventListener('mouseover', handleHover.bind(0.5));
nav.addEventListener('mouseout', handleHover.bind(1));
/////////////////////////////////////////////////////////


/////////////////////////////////////////////////////////
//================== STICKY NAVIGATION ===============//

const navHeight = nav.getBoundingClientRect().height;

const stickyNav = function(entries) {
  const [entry] = entries;

  if(!entry.isIntersecting)
    nav.classList.add('sticky');
  else
  nav.classList.remove('sticky');
}

const headerObserver =  new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  rootMargin: `-${navHeight}px`,
});

headerObserver.observe(header);
/////////////////////////////////////////////////////////


/////////////////////////////////////////////////////////
//================ REVEAL SECTIONS ===================//
 
const revealSection = function(entries, observer){
  const [entry] = entries;

  if(!entry.isIntersecting) return;
  
  entry.target.classList.remove('section--hidden');
  observer.unobserve(entry.target);
};

const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.15
});

allSection.forEach(function(section) {
  sectionObserver.observe(section);
  section.classList.add('section--hidden');
});
/////////////////////////////////////////////////////////


/////////////////////////////////////////////////////////
//================== LAZY LOADING IMAGES==============//

const loading = function(entries, observer) {
  const [entry] = entries;

  if(!entry.isIntersecting) return;

  // replace source with data-src
  entry.target.src = entry.target.dataset.src;
  
  entry.target.addEventListener('load', function() {
    entry.target.classList.remove('lazy-img');
  });

  observer.unobserve(entry.target);
}

const imgObserver = new IntersectionObserver(loading, {
  root: null,
  threshold: 0,
  rootMargin: '-200px',
});

imgTargets.forEach(img => imgObserver.observe(img));

//////////////////////////////////////////////////////


/////////////////////////////////////////////////////////
//========== SLIDER ANIMATION OR COMPONENTS ==========//
let currentSlide = 0;
const maxSlide = slides.length;

const createDot = function(){
  slides.forEach(function(s, i){
    dotContainer.insertAdjacentHTML('beforeend', `<button class="dots__dot" data-slide="${i}"></button>`)
  })
}

// this function will create an active white dot for the starting and then selected slider image;
const activateDots = function (slide) {
  document
    .querySelectorAll('.dots__dot')
    .forEach(dot => dot.classList.remove('dots__dot--active'));

  document
    .querySelector(`.dots__dot[data-slide="${slide}"]`)
    .classList.add('dots__dot--active');
};


// from here the slider function starts without the dots
const gotoSlide = function(slide){
  slides.forEach((s,i) => (s.style.transform = `translateX(${100 * (i-slide)}%)`));
  // currentSlide = 1: -100%, 0, 100%, 200%
}

// going to next slide
const nextSlide = function(){
  if(currentSlide === maxSlide - 1){
    currentSlide = 0;
  }
  else {
    currentSlide++;
  }
  gotoSlide(currentSlide);
  activateDots(currentSlide)
}

const prevSlide = function() {

  if(currentSlide === 0) {
    currentSlide = maxSlide -1;
  }
  else {
    currentSlide--;
  }
  gotoSlide(currentSlide);
  activateDots(currentSlide)
}

btnRight.addEventListener('click', nextSlide);
btnLeft.addEventListener('click', prevSlide);

const init = function() {
  gotoSlide(0);
  createDot();
  activateDots(0)
}
init();

// with keyboard event
document.addEventListener('keydown', function(e) {
  // if(e.key === 'ArrowLeft') prevSlide();
  
  e.key === 'ArrowRight' && nextSlide();
});

dotContainer.addEventListener('click', function(e){
  if(e.target.classList.contains('dots__dot')) {
    const {slide} = e.target.dataset;

    gotoSlide(slide);
    activateDots(slide)
  }
})

/////////////////////////////////////////////////////////
