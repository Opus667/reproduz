// import { Application } from '@splinetool/runtime';
// // import SimpleParallax from "simple-parallax-js/vanilla";

// const canvas = document.getElementById('creative_3d');
// const spline = new Application(canvas);
// spline.load('/3d/creative.splinecode');

import "@aarsteinmedia/dotlottie-player-light";

document.addEventListener("DOMContentLoaded", function () {
  let destaqueItem
  // Select all the .card elements
  const destaques = document.querySelectorAll(".dest");
  // Add event listeners to each card
  destaques.forEach(function (destaque) {
    destaque.addEventListener("mouseenter", function () {
      // Find the dotlottie-player element within the current card
      const lottiePlayer = destaque.querySelector("dotlottie-player");
      // Play the Lottie animation
      lottiePlayer.stop();
      lottiePlayer.play();
    });
    destaque.addEventListener("click", function() {
      console.log(destaqueItem + " e " +destaque.getAttribute("id"))
      destaques.forEach(function (destaque) {
        destaque.classList.remove("active");
      });
      // destaqueItem == destaque.getAttribute("id") ? console.log(destaqueItem);
      if (destaqueItem != destaque.getAttribute("id")){
        destaque.classList.add("active");
        destaqueItem = destaque.getAttribute("id");
      } else {
        destaqueItem = null;

      };
      });
      /*     destaque.addEventListener("click", function () {
      /*     destaque.addEventListener("click", function () {
      console.log(destaque);
      destaques.forEach(function (destaque) {
        destaque.classList.remove("active");
      });
      !destaque.classList.contains("active") && destaque.classList.add("active");
    //   destaque.setTimeOut(console.log("teste"),2000);
      setTimeout(() => {
        destaque.scrollIntoView({block: "center", behavior: "smooth" });
      }, 2000);
    });
 */    //   destaque.addEventListener('mouseleave', function() {
    //     // Find the dotlottie-player element within the current card
    //     const lottiePlayer = destaque.querySelector('dotlottie-player');
    //     // Stop the Lottie animation
    //     lottiePlayer.stop();
    //   });
  });
});
