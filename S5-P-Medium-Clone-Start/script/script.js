document.addEventListener("DOMContentLoaded", function () {
  let header = document.getElementsByTagName("header");
  let headerbutton = document.getElementsByTagName("button");

  window.onscroll = function () {
    if (window.scrollY > 360) {
      header[0].classList.remove("headerFirstBGColor");
      header[0].classList.add("headerSecondBGColor");
      headerbutton[0].classList.remove("ButtonFirstBGColor");
      headerbutton[0].classList.add("buttonSecondBGColor");
    } else {
      header[0].classList.remove("headerSecondBGColor");
      header[0].classList.add("headerFirstBGColor");
      headerbutton[0].classList.remove("buttonSecondBGColor");
      headerbutton[0].classList.add("ButtonFirstBGColor");
    }
  };
});
