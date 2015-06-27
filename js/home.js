$(document).ready(function(){document.getElementById("intro").style.height=window.innerHeight-20+"px",$(".loader-overlay").hide();var e=new WOW({boxClass:"wow",animateClass:"animated",offset:20,mobile:!0,live:!0});e.init();var n=$("#js-mobile-menu").unbind();$("#js-navigation-menu").removeClass("show"),n.on("click",function(e){e.preventDefault();var n=$("#js-navigation-menu");n.slideToggle(function(){n.is(":hidden")&&n.removeAttr("style")})});var i=function(){var e=0,n=$(".evenHeights");n.each(function(){var n=$(this);n.height()>e&&(e=n.height())}),n.height(e)};i()});

//$(document).ready(function () {
//
//  document.getElementById("intro").style.height = (window.innerHeight-20)+'px';
//
//  $('.loader-overlay').hide();
//
//  var wow = new WOW({boxClass: 'wow', animateClass: 'animated', offset: 20, mobile: true, live: true});
//  wow.init();
//
//  var menuToggle = $('#js-mobile-menu').unbind();
//  $('#js-navigation-menu').removeClass("show");
//  menuToggle.on('click', function (e) {
//    e.preventDefault();
//    var $navigationMenu = $('#js-navigation-menu');
//    $navigationMenu.slideToggle(function () {
//      if ($navigationMenu.is(':hidden')) {
//        $navigationMenu.removeAttr('style');
//      }
//    });
//  });
//  var setEvenHeights = function () {
//    var maxHeight = 0;
//    var $evenHeightElements = $('.evenHeights');
//    $evenHeightElements.each(function (index) {
//      var $el = $(this);
//      if ($el.height() > maxHeight) {
//        maxHeight = $el.height();
//      }
//    });
//    $evenHeightElements.height(maxHeight);
//  };
//  setEvenHeights();
//});