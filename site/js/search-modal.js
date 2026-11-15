const modal = document.querySelector("#search-modal");

document.querySelector("[data-search-modal-open]").addEventListener("click", () => modal.showModal());
modal.querySelector("[data-search-modal-close]").addEventListener("click", () => modal.close());
modal.addEventListener("click", (event) => event.target === modal && modal.close());
