$(document).ready(function () {

  document.getElementById("intro").style.height = (window.innerHeight - 20) + 'px';

  $('.loader-overlay').hide();

  var wow = new WOW({boxClass: 'wow', animateClass: 'animated', offset: 20, mobile: true, live: true});
  wow.init();

  var menuToggle = $('#js-mobile-menu').unbind();
  $('#js-navigation-menu').removeClass("show");
  menuToggle.on('click', function (e) {
    e.preventDefault();
    var $navigationMenu = $('#js-navigation-menu');
    $navigationMenu.slideToggle(function () {
      if ($navigationMenu.is(':hidden')) {
        $navigationMenu.removeAttr('style');
      }
    });
  });

  var trigger = $('#hamburger'),
    isClosed = true;

  function burgerTime() {
    if (isClosed == true) {
      trigger.removeClass('is-closed');
      trigger.addClass('is-open');
      isClosed = false;
    } else {
      trigger.removeClass('is-open');
      trigger.addClass('is-closed');
      isClosed = true;
    }
  }


  trigger.click(function () {
    burgerTime();
  });


  var setEvenHeights = function () {
    var maxHeight = 0;
    var $evenHeightElements = $('.evenHeights');
    $evenHeightElements.each(function (index) {
      var $el = $(this);
      if ($el.height() > maxHeight) {
        maxHeight = $el.height();
      }
    });
    $evenHeightElements.height(maxHeight);
  };
  setEvenHeights();


  (function setupModal() {
    $(function () {
      $("#modal-1").on("change", function () {
        if ($(this).is(":checked")) {
          $("body").addClass("modal-open");
        } else {
          $("body").removeClass("modal-open");
        }
      });

      $(".modal-fade-screen, .modal-close").on("click", function () {
        $(".modal-state:checked").prop("checked", false).change();
      });

      $(".modal-inner").on("click", function (e) {
        e.stopPropagation();
      });
    });

  })();
});
