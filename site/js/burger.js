// Мобильное меню: открывается кнопкой-бургером на экранах ≤1024px
const burger = document.querySelector(".burger");
const menu = document.getElementById("header__menu");

if (burger && menu) {
  const desktopQuery = window.matchMedia("(min-width: 1025px)");

  const setOpen = (isOpen) => {
    menu.classList.toggle("header__menu--open", isOpen);
    burger.setAttribute("aria-expanded", String(isOpen));
    burger.setAttribute("aria-label", isOpen ? "Закрыть меню" : "Открыть меню");
  };

  burger.addEventListener("click", () => {
    setOpen(burger.getAttribute("aria-expanded") !== "true");
  });

  // Клик по ссылке в меню — закрываем
  menu.addEventListener("click", (event) => {
    if (event.target.closest("a")) setOpen(false);
  });

  // Клик вне меню — закрываем
  document.addEventListener("click", (event) => {
    if (!menu.contains(event.target) && !burger.contains(event.target)) {
      setOpen(false);
    }
  });

  // Escape — закрываем и возвращаем фокус на бургер
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && burger.getAttribute("aria-expanded") === "true") {
      setOpen(false);
      burger.focus();
    }
  });

  // Переход на десктопную ширину — сбрасываем состояние
  desktopQuery.addEventListener("change", (event) => {
    if (event.matches) setOpen(false);
  });
}
