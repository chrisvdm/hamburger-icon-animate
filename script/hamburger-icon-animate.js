// Script for hamburger animations
;(function(root, factory){
  if (typeof exports === 'object' && typeof module === 'object') {
    module.exports = factory();
  } else if (typeof define === 'function' && define.amd) {
    define(factory);
  } else if (typeof exports === 'object') {
    exports.hamburgerIcon = factory();
  } else {
    root.hamburgerIcon = factory();
  }
})(this, function(){
  function hamburgerIcon(opts) {
    opts = opts || {};

    var hamburger = document.querySelector('.hia-hamburger');

    var ui = {
      showMenu: opts.showMenu || noop,
      hideMenu: opts.hideMenu || noop,
      hamburger: hamburger,
      bar1: hamburger.querySelector('[data-bar="1"]'),
      bar2: hamburger.querySelector('[data-bar="2"]'),
      bar3: hamburger.querySelector('[data-bar="3"]'),
      stateActive: false
    }

    hamburger.addEventListener('click', function(){
      animateIcon(ui);
    });

  }

  function animateIcon(ui) {
    if(!ui.stateActive){
      ui.stateActive = true;

      toCross(ui);
      ui.showMenu();
    } else{
      ui.stateActive = false;

      toBurger(ui);
      ui.hideMenu();
    }
  }

  function noop(){}

  // Functions to activate animation
  // Morphs hamburger to cross
  function toCross(ui) {

    // hides the middle line
    ui.bar2.style.opacity = '0';

    swapClass(ui.bar1, 'hia-back-up', 'hia-turn-up');
    swapClass(ui.bar3, 'hia-back-down', 'hia-turn-down');

  } // end of toCross()

  // Morphs cross to hamburger
  function toBurger(ui) {

    swapClass(ui.bar1, 'hia-turn-up', 'hia-back-up');
    swapClass(ui.bar3, 'hia-turn-down', 'hia-back-down');

    // Shows middle line
    ui.bar2.style.opacity = '1';

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

  return hamburgerIcon;
});
