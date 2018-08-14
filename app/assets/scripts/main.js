//animazione per eleiminare la cover
//quando clikko sul testo

$('.text').on('click', function() {
    //la sezione structure va in dissolvenza
      $('.structure').fadeOut("slow", function(){
          $('.structure').remove();

      });

});
