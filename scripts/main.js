import hamburgerMenu from "./hamburguer_menu.js";
import { toggleDescription } from "./arrow.js";

document.addEventListener("DOMContentLoaded", () => {
  hamburgerMenu(".menu-btn", ".panel", ".menu-link");

  addGoBackFunctionality();

  const cards = document.querySelectorAll(".work-card");
  cards.forEach((card) => {
    toggleDescription(card);
  });
});

const addGoBackFunctionality = () => {
  const goBackButton = document.querySelector("[data-go-back]");
  if (goBackButton) {
    goBackButton.addEventListener("click", (e) => {
      e.preventDefault();
      window.history.back();
    });
  }
};
