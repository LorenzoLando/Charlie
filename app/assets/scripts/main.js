////////////////////////////////////////
//ANIMAZIONE PER LA COVER IN DISSOLVENZA
////////////////////////////////////////

// $('.text').on('click', function() {
//     //la sezione structure va in dissolvenza
//       $('.structure').fadeOut("slow", function(){
//           $('.structure').remove();
//           $('#charlie').removeClass("hide");

//       });



// });

/////////////////////////////////////////////
//FINE ANIMAZIONE PER LA COVER IN DISSOLVENZA
/////////////////////////////////////////////

/////////////////////////////////////////////
//DISSOLVENZA TITOLO ON SCROLL
/////////////////////////////////////////////
$(window).scroll(function(){
    $(".main-title").css("opacity", 1 - $(window).scrollTop() / 250);
  });
/////////////////////////////////////////////
//FINE DISSOLVENZA TITOLO ON SCROLL
/////////////////////////////////////////////

/////////////////////////////////////////////
//Animazione navbar
/////////////////////////////////////////////

$(document).ready(function() {
	$('.toggle-nav').click(function(e) {
		$(this).toggleClass('active');
		$('.menu ul').toggleClass('active');

		e.preventDefault();
	});
});

//when scrolling down nav background rgb(0,0,128)


 $(window).on('scroll', function() {    
      var scroll = $(window).scrollTop();

      if (scroll >= 500) {
        
 			$('.menu').removeClass('background-top');

 //when scrolling up nav background back to normal
      } else {

      		$('.menu').addClass('background-top');
      }
 });
/////////////////////////////////////////////
//FINE animazione navbar
/////////////////////////////////////////////
/////////////////////////////////////////////
//CAROSELLO HEADER
/////////////////////////////////////////////

  let i = 0; // Start point
  let images = [];
  let time = 3000;

  // Image List
  images[0] = 'assets/images/annie.jpg';
  images[1] = 'assets/images/josh.jpg';
  images[2] = 'assets/images/kyaw.jpg';
  images[3] = 'assets/images/josh.jpg';

  // Change Image
  function changeImg(){
    document.slide.src = images[i];

    if(i < images.length - 1){
      
      i++;
    } else {
      i = 0;
    }

    setTimeout("changeImg()", time);
  }

  window.onload = changeImg;

  /////////////////////////////////////////////
/////////////////////////////////////////////
// FINE CAROSELLO HEADER
/////////////////////////////////////////////



