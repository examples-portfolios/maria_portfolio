export function toggleDescription(card) {
  const d = document;
  const arrow = card.querySelector(".arrow");
  const descriptionContainer = card.querySelector(".description-container");

  arrow.addEventListener("click", (event) => {
    event.stopPropagation();
    if (descriptionContainer.classList.contains("show")) {
      descriptionContainer.classList.remove("show");
      descriptionContainer.classList.add("hide");
      arrow.classList.remove("rotate");
    } else {
      descriptionContainer.classList.remove("hide");
      descriptionContainer.classList.add("show");
      arrow.classList.add("rotate");
    }
  });

  d.addEventListener("click", (event) => {
    if (
      !card.contains(event.target) &&
      descriptionContainer.classList.contains("show")
    ) {
      descriptionContainer.classList.remove("show");
      descriptionContainer.classList.add("hide");
      arrow.classList.remove("rotate");
    }
  });
}
