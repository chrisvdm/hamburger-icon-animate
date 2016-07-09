// Script for hamburger animations

const hamburger = document.getElementById('hamburger');
const bar1 = document.getElementById('bar1');
const bar2 = document.getElementById('bar2');
const bar3 = document.getElementById('bar3');

hamburger.addEventListener('click', animateIcon);

function animateIcon() {
  var stateActive = false;

  if(!stateActive){
    toCross();
    showMenu();
  } else {
    toBurger();
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
function toCross() {

  $('#bar1').addClass('turn-up').removeClass('back-up');
 $('#bar3').addClass('turn-down').removeClass('back-down');

  // hides the second bar
  $('#bar2').animate({
    opacity: '0'
  }, 500

} // end of toCross()

function toBurger() {

  $('#bar3').removeClass('turn-down').addClass('back-down');
  $('#bar1').removeClass('turn-up').addClass('back-up');

  $('#bar2').animate({
    opacity: '1'
  }, 500, function(){

   $('#mobile-nav').slideUp(500);

 }); // end of closing animate
} // end of toBurger()
