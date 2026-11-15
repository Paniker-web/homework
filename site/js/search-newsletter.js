const searchInput = document.querySelector(".search-newsletter__search-input");
const suggestions = document.querySelectorAll(".search-newsletter__suggestion");

suggestions.forEach((suggestion) => {
  suggestion.addEventListener("click", (event) => {
    event.preventDefault();

    if (!searchInput) return;

    searchInput.value = suggestion.textContent.trim();
    searchInput.focus();
  });
});
