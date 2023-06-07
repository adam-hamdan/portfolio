/*$(document).ready(function() {
  $('a.nav-link').on('click', function(event) {
    event.preventDefault();
    var targetPage = $(this).attr('href');

    if (targetPage === 'about.html') {
      $.ajax({
        url: targetPage,
        success: function(data) {
          $('#aboutContent').load('about.html #about', function() {
            $('html, body').animate({
              scrollTop: $('#about').offset().top
            }, 800);
          });
        }
        
      });
    } else {
      $('html, body').animate({
        scrollTop: $(targetPage).offset().top
      }, 800);
    }
  });
});*/
/*
$(document).ready(function() {
  $('a.nav-link').on('click', function(event) {
    event.preventDefault();
    var targetPage = $(this).attr('href');
    $('html, body').animate({
      scrollTop: $(targetPage).offset().top
    }, 800);
  });
});

*/