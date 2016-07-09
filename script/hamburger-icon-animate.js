// Script for hamburger animations
var hamburger = document.querySelector('.hia-hamburger');
var bar1 = hamburger.querySelector('[data-bar="1"]');
var bar2 = hamburger.querySelector('[data-bar="2"]');
var bar3 = hamburger.querySelector('[data-bar="3"]');
var stateActive = false;

hamburger.addEventListener('click', animateIcon);

function animateIcon() {

  if(!stateActive){
    stateActive = true;

    toCross();
    showMenu();
  } else{
    stateActive = false;

    toBurger();
    hideMenu();
  }
}

// Functions for menu
function showMenu() {
  // Insert code to display menu here
  console.log("Menu visible");
}

function hideMenu() {
  // Insert code to hide menu here
  console.log("Menu hidden");
}

// Functions to activate animation
// Morphs hamburger to cross
function toCross() {

  // hides the middle line
  bar2.style.opacity = '0';

  swapClass(bar1, 'hia-back-up', 'hia-turn-up');
  swapClass(bar3, 'hia-back-down', 'hia-turn-down');

} // end of toCross()

// Morphs cross to hamburger
function toBurger() {

  swapClass(bar1, 'hia-turn-up', 'hia-back-up');
  swapClass(bar3, 'hia-turn-down', 'hia-back-down');

  // Shows middle line
  bar2.style.opacity = '1';

} // end of toBurger()

// Checks whether class is attached to element
function hasClass(el, className) {
  if (el.classList){
    return el.classList.contains(className);
  } else {
    return !!el.className.match(new RegExp('(\\s|^)' + className + '(\\s|$)'));
  }
}

// Adds Classes
function addClass(el, className) {
  if (el.classList){
    el.classList.add(className)
  } else if (!hasClass(el, className)) {
    el.className += " " + className;
  }
}

// Removes classes
function removeClass(el, className) {
  if (el.classList){
    el.classList.remove(className);
  } else if (hasClass(el, className)) {
    var reg = new RegExp('(\\s|^)' + className + '(\\s|$)');
    el.className = el.className.replace(reg, ' ');
  }
}

// swaps around classes
function swapClass(el, className1, className2) {
  removeClass(el, className1);
  addClass(el, className2);
}
