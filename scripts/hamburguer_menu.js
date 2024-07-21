export default function hamburgerMenu(btn, panel, links) {
  const d = document;

  d.addEventListener("click", (e) => {
    const isButton = e.target.matches(btn) || e.target.closest(btn);
    const isLink = e.target.matches(links);
    const isOutsidePanel = !e.target.closest(panel) && !e.target.matches(btn);

    if (isButton) {
      d.querySelector(panel).classList.toggle("is-active");
      d.querySelector(btn).classList.toggle("is-active");
    } else if (isLink || isOutsidePanel) {
      d.querySelector(panel).classList.remove("is-active");
      d.querySelector(btn).classList.remove("is-active");
    }
  });
}
