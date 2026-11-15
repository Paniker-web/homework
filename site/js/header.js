const solutionsButton = document.querySelector(
  '[aria-controls="solutions-menu"]'
);
const solutionsMenu = document.getElementById("solutions-menu");

if (solutionsButton && solutionsMenu) {
  solutionsButton.addEventListener("click", (event) => {
    event.stopPropagation();

    const isOpen = solutionsMenu.classList.toggle("is-open");
    solutionsButton.setAttribute("aria-expanded", String(isOpen));
  });

  document.addEventListener("click", (event) => {
    if (!solutionsMenu.contains(event.target)) {
      solutionsMenu.classList.remove("is-open");
      solutionsButton.setAttribute("aria-expanded", "false");
    }
  });
}
