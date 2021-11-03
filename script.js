$(document).ready(function() {

  $('.color-choose button').on('click', function() {
      var headphonesColor = $(this).attr('data-id');

      $('.active').removeClass('active');
      $('.left-column img[data-id = ' + headphonesColor + ']').addClass('active');
      $(this).addClass('active');
  });

});
