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
  $(".width50 .img1").on("mouseover", function () {
    let a = $(".width50 .content1 > *");
    for (let i = 0; i < a.length; i++) {
      console.log(a[i]);
      setTimeout(function () {
        $(a[i]).addClass("onhover");
      }, 500);
    }
  });
  $(".width50 .img1").on("mouseout", function () {
    let a = $(".width50 .content1 > *");
    a.removeClass("onhover");
  });
  $(".width50 .img2").on("mouseover", function () {
    let a = $(".width50 .content2 > *");
    for (let i = 0; i < a.length; i++) {
      console.log(a[i]);
      setTimeout(function () {
        $(a[i]).addClass("onhover");
      }, 200);
    }
  });
  $(".width50 .img2").on("mouseout", function () {
    let a = $(".width50 .content2 > *");
    a.removeClass("onhover");
  });
});
