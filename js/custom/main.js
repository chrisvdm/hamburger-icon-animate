// Script for hamburger animations

const hamburger = document.getElementById('hamburger');

hamburger.addEventListener('click', animateIcon);

var stateActive = false;

if(!stateActive){
  // Morph to cross icon
} else {
  // Morph to hamburger icon
}


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
