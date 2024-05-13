  let navbar = document.getElementById("nav-section");
console.log("nav-setion==>", navbar);
  let navOffset = navbar.offsetTop;
  window.addEventListener("scroll", () => {
    (window.scrollY >= navOffset) ? navbar.classList.add("fixed-nav") : navbar.classList.remove("fixed-nav")
  });