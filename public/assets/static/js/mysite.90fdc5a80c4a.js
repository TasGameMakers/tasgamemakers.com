document.addEventListener("DOMContentLoaded", function() {
  var $navTrigger = document.querySelector("[data-nav-trigger]");
  var $navTarget = document.querySelector("[data-nav-target]");
  var $header = document.querySelector(".header");

  var $body = document.getElementById("main");

  // Navigation
  if ($navTrigger && $navTarget) {
    var $navLinks = $navTarget.querySelectorAll("a");

    $navTrigger.addEventListener("click", e => {
      if ($navTarget.classList.contains("is-active")) {
        $navTrigger.classList.remove("is-active");
        $navTarget.classList.remove("is-active");
        document.body.classList.remove("menu-open");
        $header.classList.remove("is-light");
      } else {
        $navTarget.classList.add("is-active");
        document.body.classList.add("menu-open");
        $navTrigger.classList.add("is-active");
        $navTrigger.classList.remove("is-dark");
      }
      e.preventDefault();
    });

    $navLinks.forEach($l => {
      $l.addEventListener("click", e => {
        $navTrigger.classList.toggle("is-active");
        $navTarget.classList.toggle("is-active");
      });
    });
  }

  // Loading anims
  $body.classList.add("main__show");
});
