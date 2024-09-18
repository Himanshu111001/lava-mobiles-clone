//HEADER MOBILE

let nav = document.getElementById("mobileNav");
let bars = document.getElementById("bars");
let cross = document.getElementById("cross");

function openNav() {
  nav.style.top = "64px";
  bars.style.display = "none";
  cross.style.display = "block";
}
function closeNav() {
  nav.style.top = "-100%";
  bars.style.display = "block";
  cross.style.display = "none";
}

function showMobileNavButton() {
  const screenSize = window.matchMedia("(max-width : 992px)");
  if (screenSize.matches) {
    cross.style.display = "none";
    bars.style.display = "block";
  } else {
    bars.style.display = "none";
    cross.style.display = "none";
  }
}
showMobileNavButton();

window.addEventListener("resize", showMobileNavButton);
