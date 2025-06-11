import "itemslide"
import "@aarsteinmedia/dotlottie-player-light";

document.addEventListener("DOMContentLoaded", function () {
  let destaqueItem;
  // Select all the .card elements
  const destaques = document.querySelectorAll(".dest");
  if (window.matchMedia("(max-width: 600px)").matches) {
    document.getElementById("dest_blank").remove();
    destaques.forEach(function (destaque){
      destaque.classList.remove("dest");
      destaque.classList.add("destSwipe");
    });
    document.getElementById("destScroll").setAttribute("id","scrolling");
  };
  // Add event listeners to each card
  destaques.forEach(function (destaque) {
    destaque.addEventListener("mouseenter", function () {
      // Find the dotlottie-player element within the current card
      const lottiePlayer = destaque.querySelector("dotlottie-player");
      // Play the Lottie animation
      lottiePlayer.stop();
      lottiePlayer.play();
    });
    destaque.addEventListener("click", function () {
      destaques.forEach(function (destaque) {
        destaque.classList.remove("active");
      });
      if (destaqueItem != destaque.getAttribute("id")) {
        destaque.classList.add("active");
        destaqueItem = destaque.getAttribute("id");
      } else {
        destaqueItem = null;
      };
      setTimeout(() => {
        destaque.scrollIntoView({block: "center", behavior: "smooth" });
        console.log("teste2")
      }, 750);
    });
  });
  const destaquesMain = document.getElementById("destaques");
  destaquesMain.addEventListener("click", function (event) {
    const parente = event.target.parentElement.getAttribute("id");
    console.log(event.target.getAttribute("id"));
    if (parente == "destaques" ||
        parente == "dest_tittle"||
        event.target.getAttribute("id") == "destaques"||
        event.target.getAttribute("id") == "dest_blank" ) {
      destaques.forEach(function (destaque) {
      destaque.classList.remove("active");
      destaqueItem = null;
    });
    };
  });
});

var itemslide;

window.addEventListener("load", () => {
    var element = document.querySelector("#scrolling ul");
    itemslide = new Itemslide(element, {});
});
