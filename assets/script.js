const slides = [
  {
    "image": "slide1.jpg",
    "tagLine": "Impressions tous formats <span>en boutique et en ligne</span>",
  },
  {
    "image": "slide2.jpg",
    "tagLine":
      "Tirages haute définition grand format <span>pour vos bureaux et events</span>",
  },
  {
    "image": "slide3.jpg",
    "tagLine": "Grand choix de couleurs <span>de CMJN aux pantones</span>",
  },
  {
    "image": "slide4.png",
    "tagLine": "Autocollants <span>avec découpe laser sur mesure</span>",
  },
];
console.log(slides);

const bannerImg = document.querySelector(".banner-img");
const arrowLeft = document.querySelector(".arrow_left");
const arrowRight = document.querySelector(".arrow_right");
const dots = document.querySelectorAll(".dot");

let navPosition = 0;
let i = 0;

/* Mettre un event listener sur chacune des flèches */

arrowRight.addEventListener("click", () => {
  // incrementation navPosition variable
  navPosition++;
  // length table when at right
  if (navPosition === slides.length) {
    navPosition = 0;
  }
  genererImage(navPosition);
  updateDots(navPosition);
});

arrowLeft.addEventListener("click", () => {
  // décrémentation navPosition variable
  navPosition--;

  if (navPosition === -1) {
    navPosition = slides.length -1
  }
  
  genererImage(navPosition);
  updateDots(navPosition);
});

/* Fonction pour generer l'image */

function genererImage(navPosition) {
  // select the image and text from the banner
  const baliseImage = document.querySelector(".banner-img");
  const baliseP = document.querySelector("#banner p");

  // create the link to the new banner
  baliseImage.src = `./assets/images/slideshow/` + slides[navPosition].image;
  baliseP.innerHTML = slides[navPosition].tagLine;
}

/* Ajouter les bullet points sur la partie basse du slider */

function updateDots(navPosition) {
  dots.forEach((dot, i) => {
    if (i === navPosition) {
      dot.classList.add("dot_selected");
    } else {
      dot.classList.remove("dot_selected");
    }
  });
}

