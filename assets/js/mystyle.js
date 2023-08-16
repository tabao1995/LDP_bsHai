$(document).ready(function () {
  $(".section3__content").slick({
    slidesToShow: 3,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    infinite: true,
  });
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

  let width = $(".width50.img").width();
  console.log(width);
  $(".width50 .sure-smile").attr(
    "style",
    "clip : rect( 0 ," + width / 2 + "px," + width + "px,0)"
  );
  $(".width50 .Invisalign").on("mouseover", function () {
    $(".width50 .sure-smile").attr(
      "style",
      "clip : rect( 0 ,0 ," + width + "px,0)"
    );
  });
  $(".width50 .Invisalign").on("mouseout", function () {
    $(".width50 .sure-smile").attr(
      "style",
      "clip : rect( 0 ," + width / 2 + "px," + width + "px,0)"
    );
  });
  $(".width50 .sure-smile").on("mouseover", function () {
    $(".width50 .sure-smile").attr(
      "style",
      "clip : rect( 0 ," + width + "px," + width + "px,0)"
    );
  });
  $(".width50 .sure-smile").on("mouseout", function () {
    $(".width50 .sure-smile").attr(
      "style",
      "clip : rect( 0 ," + width / 2 + "px," + width + "px,0)"
    );
  });
});
