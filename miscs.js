
/*
// scrolling

btnScroll.addEventListener('click', function(e) {
  const s1coords = section1.getBoundingClientRect();
  console.log(s1coords);

  console.log(e.target.getBoundingClientRect());

  console.log('current scroll (X/Y)', window.pageXOffset, window.pageYOffset);

  console.log('current height/width viewport', document.documentElement.clientHeight, document.documentElement.clientWidth);

  // older way
  // window.scrollTo(s1coords.left + window.pageXOffset, s1coords.top + window.pageYOffset);


  // window.scrollTo({
  //   left: s1coords.left + window.pageXOffset,  
  //   top: s1coords.top + window.pageYOffset,
  //   behavior: 'smooth',
  // });

  // mordern way
  section1.scrollIntoView({behavior:'smooth'})
});
*/


/*
// sticky navigation
const initialCords = section1.getBoundingClientRect()

const scroll = window.addEventListener('scroll', function() {
  // console.log(window.scrollY);

  // where to stcik the menu bar
  if(window.scrollY > initialCords.top){
    nav.classList.add('sticky');
  }
  else {
    nav.classList.remove('sticky');
  }
});


// sticky navigation: intersection observer api
const obsCallback = function(entries, observer) {
  entries.forEach(entry => {
    console.log(entry);
  });
}

const obsOptions = {
  root: null,
  threshold: [0, 0.2],
}

const observer = new IntersectionObserver(obsCallback, obsOptions);
observer.observe(section1)
*/

// page navigation on scroll btn
/*
document.querySelectorAll('.nav__link').forEach(function(el) {
  el.addEventListener('click', function(e) {
    e.preventDefault();
    
    const id = this.getAttribute('href');
    console.log(id);
    document.querySelector(id).scrollIntoView({behavior: 'smooth'});
  });
});

/*
// DOM traversing
// const h1 = document.querySelector('h1');

// // going downwards
// console.log(h1.querySelectorAll('.highlight'));
// console.log(h1.childNodes);
// console.log(h1.children);
// h1.firstElementChild.style.color = 'white'
// h1.lastElementChild.style.color = 'white'

// DOM behind the scenes
// DOM => interface between the js and browser

//selecting elements
const header = document.querySelector('.header');
const allSection = document.querySelectorAll('.section');
console.log(allSection);

console.log(document.getElementById('section--1'));
const allButton = document.getElementsByTagName('button');
console.log(allButton)

console.log(document.getElementsByClassName('btn'));

// creating and inserting elements

const message = document.createElement('div');
message.classList.add('cookie-message');
// message.textContent = 'We use cookies for improved better user experience and security';

message.innerHTML = 'We use cookies for improved better user experience and security. <button class="btn btn--close-cookie">Got it!</button>';

// the prepend() method gets added to the header
// header.prepend(message);

// the append() gets added at the end of header html
header.append(message);
// header.before(message);
// header.after(message);
// header.append(message.cloneNode(true));

// deleting the elements

document.querySelector('.btn--close-cookie').addEventListener('click', function() {
  message.remove();

  //older way to remove elements
  // message.parentElement.removeChild(message);
});


// styling, attributes, classes

message.style.backgroundColor = '#37383d';
message.style.width = '100%';

// console.log(message.style.height)

// getComputedStyle
console.log(getComputedStyle(message).height);

message.style.height = Number.parseFloat(getComputedStyle(message).height, 10) + 20 + 'px';

// document.documentElement.style.setProperty('--color-primary', 'orangered');

//attributes

const logo = document.querySelector('.nav__logo');
console.log(logo.src);
console.log(logo.alt);

logo.alt = 'Beautiful logo of minimalist';
*/

// scroll behaviour

// btnScroll.addEventListener('click', function(e) {
//   const s1coords = section1.getBoundingClientRect();
//   console.log(s1coords);

//   console.log(e.target.getBoundingClientRect());

//   console.log('current scroll (X/Y)', window.pageXOffset, window.pageYOffset);

//   console.log('current height/width viewport', document.documentElement.clientHeight, document.documentElement.clientWidth);



// EVENTS AND TYPES OF EVENTS IN JAVASCRIPT
/*

const h1 = document.querySelector('h1');

// const alertH1 = function(e) {
//   alert('addEventlistener: great you are reading the heading');

  
// }

// h1.addEventListener('mouseenter', alertH1);

// setTimeout(() => h1.removeEventListener('mouseenter', alertH1), 3000);


// h1.addEventListener('mouseenter', function(e) {
//   alert('addEventlistener: great you are reading the heading');
// });

//old way
// h1.onmouseenter = function(e) {
//   alert('addEventlistener: great you are reading the heading');
// };
*/

//  =========== EVENT PROPAGATION ===============//

/*
const randomInt = (min, max) => 
  Math.floor(Math.random() * (max - min + 1) + min);

const randomColor = () => `rgb(${randomInt(0, 255)}, ${randomInt(0, 255)}, ${randomInt(0, 255)})`;


document.querySelector('.nav__link').addEventListener('click', function(e) {
  this.style.backgroundColor = randomColor();

  console.log('LINK', e.target, e.currentTarget)

  // stop propagation

  // e.stopPropagation()
})

document.querySelector('.nav__links').addEventListener('click', function(e) {
  this.style.backgroundColor = randomColor();
  console.log('CONTAINER', e.target, e.currentTarget)
})

document.querySelector('.nav').addEventListener('click', function(e) {
  this.style.backgroundColor = randomColor();
  console.log('NAV', e.target, e.currentTarget)
});
*/
