$(document).ready(function() {
    $('nav ul li a').click(function(e) {
      e.preventDefault();
      $('html, body').animate({
        scrollTop: $($(this).attr('href')).offset().top - 50
      }, 1000);
    });
  
    
    $(window).scroll(function() {
      $('.section').each(function() {
        if ($(this).offset().top < $(window).scrollTop() + $(window).height() - 100) {
          $(this).fadeIn(1000);
        }
      });
    });
  
    
    $('.project').hover(
      function() {
        $(this).css('background-color', '##00bfff');
      }, 
      function() {
        $(this).css('background-color', '#00bfff'); 
      }
    );
    

    
  });
  