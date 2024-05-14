  let navbar = document.getElementById("nav-section");
  let navOffset = navbar.offsetTop;
  let naveOverProduct = 1200;

  window.addEventListener("scroll", () => {
    console.log("navbar==>", scrollY);
    (window.scrollY > naveOverProduct) ? navbar.classList.add("fixed-nav") : navbar.classList.remove("fixed-nav");
    (window.scrollY > naveOverProduct) ? navbar.classList.remove("nav-bar") : navbar.classList.add("nav-bar");
  });