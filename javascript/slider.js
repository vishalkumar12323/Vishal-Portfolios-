document.addEventListener("DOMContentLoaded", function () {
  var splide = new Splide(".splide", {
    type: "loop",
    autoplay: true,
    arrows: false,
    theme: "Skyblue",
  });
  //   splide.arrows = false;
  splide.mount();
});
