// Script for hamburger animations
const hamburger = document.getElementById('hamburger');
const bar1 = document.getElementById('bar1');
const bar2 = document.getElementById('bar2');
const bar3 = document.getElementById('bar3');
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

  addClass(bar1, 'turn-up');
  removeClass(bar1, 'back-up');
  addClass(bar3, 'turn-down');
  removeClass(bar3, 'back-down');

} // end of toCross()

// Morphs cross to hamburger
function toBurger() {

  removeClass(bar1, 'turn-up')
  addClass(bar1, 'back-up');
  removeClass(bar3, 'turn-down')
  addClass(bar3, 'back-down');

  // Shows middle line
  bar2.style.opacity = '1';

} // end of toBurger()
