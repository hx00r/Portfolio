var typed = new Typed("#typed", {
  strings: [
    "Software Developer",
    "Full Stack Web Developer",
    "Python Developer",
    "Django Developer",
    "JavaScript Developer",
    "Back-end Specialist",
  ],
  backSpeed: 70,
  typeSpeed: 40,
  loop: true,
});
var myNav = document.getElementById("main-nav");
window.onscroll = function () {
  ("use strict");
  if (
    document.body.scrollTop >= 200 ||
    document.documentElement.scrollTop >= 200
  ) {
    myNav.classList.add("bg-dark");
  } else {
    myNav.classList.remove("bg-dark");
  }
};
