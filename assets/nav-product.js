  let navbar = document.getElementById("nav-section");
  let navOffset = navbar.offsetTop;
console.log("nav-setion==>", window.scrollY);

  window.addEventListener("scroll", () => {
    (window.scrollY >= navOffset) ? navbar.classList.add("fixed-nav") : navbar.classList.remove("fixed-nav")
  });