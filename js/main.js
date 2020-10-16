window.addEventListener("scroll", function () {
	let header = document.querySelector("#nav");
	let windowPosition = window.scrollY > 0;
	header.classList.toggle("scrolling-active", windowPosition);
});
// Slider
const sliders1 = document.querySelector(".carouselbox1");
const sliders2 = document.querySelector(".carouselbox2");
const sliders3 = document.querySelector(".carouselbox3");
// const sliders4 = document.querySelector(".carouselbox4");


var scrollPerClick1;
var scrollPerClick2;
var scrollPerClick3;

var ImagePadding = 20;

showMoviesData1();
showMoviesData2();
showMoviesData3();

// Scroll Functionality
var scrollAmount1 = 0;
var scrollAmount2 = 0;
var scrollAmount3 = 0;

function sliderScrollLeft1() {
  sliders1.scrollTo({
    top: 0,
    left: (scrollAmount1 -= scrollPerClick1),
    behavior: "smooth",
  });

  if (scrollAmount1 < 0) {
    scrollAmount1 = 0;
  }

  console.log("Scroll Amount: ", scrollAmount1);
}

function sliderScrollRight1() {
  if (scrollAmount1 <= sliders1.scrollWidth - sliders1.clientWidth) {
    sliders1.scrollTo({
      top: 0,
      left: (scrollAmount1 += scrollPerClick1),
      behavior: "smooth",
    });
  }
  console.log("Scroll Amount: ", scrollAmount1);
}


function sliderScrollLeft2() {
  sliders2.scrollTo({
    top: 0,
    left: (scrollAmount2 -= scrollPerClick2),
    behavior: "smooth",
  });

  if (scrollAmount2 < 0) {
    scrollAmount2 = 0;
  }

  console.log("Scroll Amount: ", scrollAmount2);
}

function sliderScrollRight2() {
  if (scrollAmount2 <= sliders2.scrollWidth - sliders2.clientWidth) {
    sliders2.scrollTo({
      top: 0,
      left: (scrollAmount2 += scrollPerClick2),
      behavior: "smooth",
    });
  }
  console.log("Scroll Amount: ", scrollAmount2);
}
function sliderScrollLeft3() {
  sliders3.scrollTo({
    top: 0,
    left: (scrollAmount3 -= scrollPerClick3),
    behavior: "smooth",
  });

  if (scrollAmount3 < 0) {
    scrollAmount3 = 0;
  }

  console.log("Scroll Amount: ", scrollAmount3);
}

function sliderScrollRight3() {
  if (scrollAmount3 <= sliders3.scrollWidth - sliders3.clientWidth) {
    sliders3.scrollTo({
      top: 0,
      left: (scrollAmount3 += scrollPerClick3),
      behavior: "smooth",
    });
  }
  console.log("Scroll Amount: ", scrollAmount3);
}




 function showMoviesData1() {
 
  scrollPerClick1 = document.querySelector(".img-1").clientWidth + 20;
}
function showMoviesData2() {
 
  scrollPerClick2 = document.querySelector(".img-1").clientWidth + 20;
}
function showMoviesData3() {
 
  scrollPerClick3 = document.querySelector(".img-1").clientWidth + 20;
}
