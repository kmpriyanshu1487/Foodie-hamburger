window.addEventListener("scroll", function () {
  const gototop = document.querySelector(".gototop");
  if (window.scrollY > 300) {
    gototop.style.display = "block";
  } else {
    gototop.style.display = "none";
  }
});

const hamburgerIcon = document.querySelector(".hamburger-icon");
const closeIcon = document.querySelector(".close-icon");
const headerContent = document.querySelector(".header-content");

hamburgerIcon.addEventListener("click", () => {
  headerContent.classList.add("menu-open");
});

closeIcon.addEventListener("click", () => {
  headerContent.classList.remove("menu-open");
});

