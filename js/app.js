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

//CAROUSEL
const track = document.querySelector(".carousel-track");
const items = Array.from(track.children);
const nextButton = document.querySelector(".next");
const prevButton = document.querySelector(".prev");
let currentIndex = 0;

function updateCarousel(position) {
  track.style.transform = `translateX(${position}px)`;
}

function moveToNext() {
  if (currentIndex === items.length - 1) {
    currentIndex = 0;
  } else {
    currentIndex++;
  }
  const position = -currentIndex * track.clientWidth;
  updateCarousel(position);
}

function moveToPrev() {
  if (currentIndex === 0) {
    currentIndex = items.length - 1;
  } else {
    currentIndex--;
  }
  const position = -currentIndex * track.clientWidth;
  updateCarousel(position);
}

nextButton.addEventListener("click", moveToNext);
prevButton.addEventListener("click", moveToPrev);

//AOS
AOS.init();
