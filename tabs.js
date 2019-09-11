$(document).ready(function () {
  $('.js-tabs .item').click(function() {
    var $this = $(this);
    $tab_content = $('.ct-tab-content');
    $el_tab = $('.js-tabs .item');

      var target;
      target = $this.attr('data-tab');
      if (!$this.hasClass('active')) {
        $el_tab.removeClass('active');
        $tab_content.removeClass('active');
        $this.addClass('active');
        return $('.ct-tab-content[data-tab="' + target + '"]').addClass('active');
      } else {
        $this.removeClass('active');
        return $tab_content.removeClass('active');
      }
  });

  $('.js-closeSection').click(function() {
    var $this = $(this);
    $(".ct-tabs-outer .item").removeClass("active");
    $this.closest(".ct-tab-content").removeClass("active");
  });
});