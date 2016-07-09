// Script for hamburger animations

const hamburger = document.getElementById('hamburger');
const bar1 = document.getElementById('bar1');
const bar2 = document.getElementById('bar2');
const bar3 = document.getElementById('bar3');

hamburger.addEventListener('click', animateIcon);

function animateIcon() {
  var stateActive = false;

  if(!stateActive){
    stateActive = true;

    toCross();
    showMenu();
  } else {
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

  // hides the second bar
  bar2.style.opacity = '0';

  bar1.addClass('turn-up').removeClass('back-up');
  bar3.addClass('turn-down').removeClass('back-down');

} // end of toCross()

// Morphs cross to hamburger
function toBurger() {

  bar1.removeClass('turn-up').addClass('back-up');
  bar3.removeClass('turn-down').addClass('back-down');

  bar2.style.opacity = '1';

} // end of toBurger()
