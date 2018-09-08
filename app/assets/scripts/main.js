
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





