  let navbar = document.getElementById("nav-section");
  let navOffset = navbar.offsetTop;

  window.addEventListener("scroll", () => {
    console.log("navbar==>", scrollY);
    (window.scrollY > navOffset) ? navbar.classList.add("fixed-nav") : navbar.classList.remove("fixed-nav");
    (window.scrollY > navOffset) ? navbar.classList.remove("nav-bar") : navbar.classList.add("nav-bar");
  });