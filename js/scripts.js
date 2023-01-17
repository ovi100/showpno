$(document).ready(function () {
  $(window).scroll(function () {
    if ($(this).scrollTop() > 0) {
      $('.scrollup').fadeIn();
      //$(".header").addClass("menu-on-scroll");

    } else {
      $('.scrollup').fadeOut();
      //$(".header").removeClass("menu-on-scroll");
    }
  });

  if ($(window).width() < 768) {
    $(".sidenav-toggle").click(function (e) {
      e.preventDefault();
      $("body").addClass('scroll-off');
      $(".sidenav").addClass("show-sidenav");
    });
  
    $(".sidenav-close,.sidenav-overlay").click(function (e) {
      e.preventDefault();
      $("body").removeClass('scroll-off');
      $(".sidenav").removeClass("show-sidenav");
    });
  }


  $('.scrollup').click(function () {
    if (navigator.userAgent.match(/(iPod|iPhone|iPad|Android)/)) {
      window.scrollTo(0, 0);
    }
    else {
      $('html,body').animate({
        scrollTop: 0
      }, 500, function () {
        $('html,body').clearQueue();
      });
    }
  });

  // Sidebar Cart JS
  $(".mini-cart").click(function (event) {
    event.preventDefault();
    $("body").addClass('scroll-off');
    $(".sidebar-cart-holder").addClass("show-sidebar-cart");
  });

  $(".sidecart-close-button,.sidebar-cart-overlay").click(function (event) {
    event.preventDefault();
    $("body").removeClass('scroll-off');
    $(".sidebar-cart-holder").removeClass("show-sidebar-cart");
  });

  $("#sidebar-toggle").click(function () {
    $("#sidenav").toggleClass("show-sidenav");
  });

  $("#sidenav-overlay").click(function (event) {
    event.preventDefault();
    $("#sidenav").removeClass("show-sidenav");
  });

  // Collection Slider/Slick

  $('.collection-slider').slick({
    infinite: false,
    slidesToShow: 5,
    slidesToScroll: 5,
    speed: 800,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 1025,
        settings: {
          //arrows: false,
          slidesToShow: 3,
          slidesToScroll: 3
        }
      }
    ]
  });

  //Mobile search icon click
  $(".mobile-search-icon").click(function () {
    $("#searchbox-holder").toggleClass("slide");
  });
  $(".search-close").click(function () {
    $("#searchbox-holder").toggleClass("slide");
  });
});
