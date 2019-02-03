$(document).ready(function() {
  // Footer year
  var date = new Date();
  var currentYear = date.getFullYear();

  var footerText = $('.footer-text');
  footerText.append("Copyright &copy; Sason " + currentYear + ". All rights reserved.");

  // Scroll to top
  $('#scroll-top').click(function() {
    $('html, body').animate({
        scrollTop: $("#navigation").offset().top
    }, 1000);
  });
  // Scroll Down
  $('#scroll-down').click(function() {
    $('html, body').animate({
        scrollTop: $("#about-section").offset().top -15
      }, 1000);
  });
  // Scroll to download app
  $('#download').click(function() {
    $('html, body').animate({
        scrollTop: $("#download-app-two").offset().top
    }, 1000);

  });
  // Scroll to app description
  $('#about').click(function() {
    $('html, body').animate({
        scrollTop: $("#description").offset().top
    }, 1000);
  });
  $('#nav-icon').click(function() {

    // Show/Hide navigation menus
      if ($('#nav-narrow').css('display') == 'none') {
        $('#nav-narrow').css('display','block');
      } else {
        $('#nav-narrow').css('display','none');
      }

  });
  // Navigation Menus for narrow screen
  // Scroll to app description on narrow screen
  $('.about-narrow').click(function() {
    $('html, body').animate({
        scrollTop: $("#description").offset().top
    }, 1000);

    if ($('#nav-narrow').css('display') == 'block') {
      $('#nav-narrow').css('display','none');
    } else {
      $('#nav-narrow').css('display','none');
    }
  });
  // Scroll to download on narrow screen app
  $('.download-narrow').click(function() {
    $('html, body').animate({
        scrollTop: $("#download-app-two").offset().top
    }, 1000);

    if ($('#nav-narrow').css('display') == 'block') {
      $('#nav-narrow').css('display','none');
    } else {
      $('#nav-narrow').css('display','none');
    }

  });


});
