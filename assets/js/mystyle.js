$(document).ready(function () {
  $(".slick.khay").slick({
    slidesPerRow: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    infinite: true,
    dots: true,
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
