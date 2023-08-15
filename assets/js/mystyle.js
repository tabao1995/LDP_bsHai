$(document).ready(function () {
  $(".slick.khay").slick({
    slidesToShow: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    infinite: true,
    dots: false,
    fade: true,
    cssEase: "linear",
  });
  $(".section11__chungnhan").slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
  });
  $(".section13__review").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: true,
  });
});
