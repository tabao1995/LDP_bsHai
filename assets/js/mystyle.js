$(document).ready(function () {
  $(".section2").attr("style", "margin-top:" + $(".section1").height() + "px");
  $(".section3__content").slick({
    slidesToShow: 3,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    infinite: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
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
    arrows: false,
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
  var startDate = new Date();
  var endDate = new Date();
  endDate.setDate(startDate.getDate() + 10);

  function updateCountdown() {
    var now = new Date();
    var timeLeft = endDate - now;

    if (timeLeft <= 0) {
      $(".countdown-number").text("0");
    } else {
      var days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
      var hours = Math.floor(
        (timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      var minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

      $("#days").text(days);
      $("#hours").text(hours);
      $("#minutes").text(minutes);
      $("#seconds").text(seconds);
    }
  }

  setInterval(updateCountdown, 1000);
});
