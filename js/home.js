$(document).ready(function() {

  var wow = new WOW(
    {
      boxClass:     'wow',      // default
      animateClass: 'animated', // default
      offset:       20,
      mobile:       true,       // default
      live:         true        // default
    }
  );
  wow.init();

	var introSection = $("#intro");
	introSection.height(window.innerHeight - 20);

  var menuToggle = $('#js-mobile-menu').unbind();
  $('#js-navigation-menu').removeClass("show");

  menuToggle.on('click', function(e) {
    e.preventDefault();
    $('#js-navigation-menu').slideToggle(function(){
      if($('#js-navigation-menu').is(':hidden')) {
        $('#js-navigation-menu').removeAttr('style');
      }
    });
  });


  var setEvenHeights = function(){
    var maxHeight = 0;
    var $evenHeightElements = $('.evenHeights');
    $evenHeightElements.each(function(index) {
      var $el = $(this);
      if($el.height() > maxHeight) {
        maxHeight = $el.height();
      }
    });
    $evenHeightElements.height(maxHeight);
  };

  setEvenHeights();

});
