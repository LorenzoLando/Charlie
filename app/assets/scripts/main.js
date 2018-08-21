//animazione per eleiminare la cover
//quando clikko sul testo

// $('.text').on('click', function() {
//     //la sezione structure va in dissolvenza
//       $('.structure').fadeOut("slow", function(){
//           $('.structure').remove();
//           $('#charlie').removeClass("hide");

//       });



// });

////////////////////////////////////////
//ANIMAZIONE HEADER CARUSEL
////////////////////////////////////////

$(function() {
	$('#carousel').carouFredSel({
		responsive: true,
		items: {
			visible: 1,
			width: 900,
			height: 500
		},
		scroll: {
			duration: 250,
			timeoutDuration: 2500,
			fx: 'uncover-fade'
		},
		pagination: '#pager'
	});
});

////////////////////////////////////////
//FINE ANIMAZIONE HEADER CARUSEL
////////////////////////////////////////
