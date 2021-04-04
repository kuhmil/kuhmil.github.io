$(document).ready(function() {
  var cTable = $("#card-table");
  $(".load-cards").on('click', function(e) {
    if($(this).hasClass('animated')) {
      $(this).removeClass('animated');
      $('.card-table').removeClass('animated');
    } else {
      $(this).addClass('animated');
      $('.card-table').addClass('animated');
    }
  });
});