/*global $, jQuery, alert*/
$(document).ready(function() {

  'use strict';

  // ========================================================================= //
  //  //SMOOTH SCROLL
  // ========================================================================= //


  $(document).on("scroll", onScroll);

  $('a[href^="#"]').on('click', function(e) {
    e.preventDefault();
    $(document).off("scroll");

    $('a').each(function() {
      $(this).removeClass('active');
      if ($(window).width() < 100) {
        $('.nav-menu').slideUp();
      }
    });

    $(this).addClass('active');

    var target = this.hash,
        menu = target;

    target = $(target);
    $('html, body').stop().animate({
      'scrollTop': target.offset().top - 200
    }, 550, 'swing', function() {
      window.location.hash = target.selector;
      $(document).on("scroll", onScroll);
    });
  });


  function onScroll(event) {
    if ($('.home').length) {
      var scrollPos = $(document).scrollTop();
      $('nav ul li a').each(function() {
        var currLink = $(this);
        var refElement = $(currLink.attr("href"));
      });
    }
  }

  // ========================================================================= //
  //  //NAVBAR SHOW - HIDE
  // ========================================================================= //


  $(window).scroll(function() {
    var scroll = $(window).scrollTop();
    if (scroll > 200 ) {
      $("#main-nav, #main-nav-subpage").slideDown(700);
      $("#main-nav-subpage").removeClass('subpage-nav');
    } else {
      $("#main-nav").slideUp(700);
      $("#main-nav-subpage").hide();
      $("#main-nav-subpage").addClass('subpage-nav');
    }
  });

  // ========================================================================= //
  //  // RESPONSIVE MENU
  // ========================================================================= //

  $('.responsive').on('click', function(e) {
    $('.nav-menu').slideToggle();
  });

  // ========================================================================= //
  //  Typed Js
  // ========================================================================= //

  var typed = $(".typed");

  $(function() {
    typed.typed({
      strings: ["Hi, my name is", "Emil Varnomasing", "It's my portfolio"],
      typeSpeed: 120,
      loop: true,
      showCursor: false,
      loopCount: false,
      attr: null,

    });
  });

  // ========================================================================= //
  //  Contact
  // ========================================================================= //

  $(document).ready(function() {
    // Test for placeholder support
      $.support.placeholder = (function(){
          var i = document.createElement('input');
          return 'placeholder' in i;
      })();

      // Hide labels by default if placeholders are supported
      if($.support.placeholder) {
          $('.form-label').each(function(){
              $(this).addClass('js-hide-label');
          });  

          // Code for adding/removing classes here
          $('.form-group').find('input, textarea').on('keyup blur focus', function(e){
              
              // Cache our selectors
              var $this = $(this),
                  $label = $this.parent().find("label");
            
              switch(e.type) {
                case 'keyup': {
                  $label.toggleClass('js-hide-label', $this.val() == '');
                } break;
                case 'blur': {
                  if( $this.val() == '' ) {
                      $label.addClass('js-hide-label');
                  } else {
                      $label.removeClass('js-hide-label').addClass('js-unhighlight-label');
                  }
                } break;
                case 'focus': {
                  if( $this.val() !== '' ) {
                      $label.removeClass('js-unhighlight-label');
                  }
                } break;
                default: break;
              }
            
          });
      } 
  });
});