// Script for hamburger animations

// Checks whether class is attached to element
function hasClass(el, className) {
  if (el.classList)
    return el.classList.contains(className)
  else
    return !!el.className.match(new RegExp('(\\s|^)' + className + '(\\s|$)'))
}

// Adds Class
function addClass(el, className) {
  if (el.classList)
    el.classList.add(className)
  else if (!hasClass(el, className)) el.className += " " + className
}

// Removes class
function removeClass(el, className) {
  if (el.classList)
    el.classList.remove(className)
  else if (hasClass(el, className)) {
    var reg = new RegExp('(\\s|^)' + className + '(\\s|$)')
    el.className = el.className.replace(reg, ' ')
  }
}

  $('#hamburger').on('click', function(){

    if(!$('#mobile-nav').is(':visible')){


       $('#bar1').addClass('turn-up').removeClass('back-up');
      $('#bar3').addClass('turn-down').removeClass('back-down');

       // hides the second bar
       $('#bar2').animate({
         opacity: '0'
       }, 500, function(){

         // slides down mobile navigation
        $('#mobile-nav').slideDown(500);

      }); // end of opening animate

    } else {

      $('#bar3').removeClass('turn-down').addClass('back-down');
      $('#bar1').removeClass('turn-up').addClass('back-up');

      $('#bar2').animate({
        opacity: '1'
      }, 500, function(){

       $('#mobile-nav').slideUp(500);

     }); // end of closing animate

    }

  }); // end of hamburger animation
