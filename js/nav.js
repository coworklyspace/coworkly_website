export function initNav() {
  const burger = document.querySelector("[data-burger]");
  const sheet = document.querySelector("[data-sheet]");
  if (!burger || !sheet) return;
  burger.addEventListener("click", () => {
    const open = sheet.classList.toggle("is-open");
    burger.setAttribute("aria-expanded", String(open));
  });
  const page = document.body.dataset.page;
  document.querySelectorAll("[data-nav]").forEach((link) => {
    if (link.dataset.nav === page) link.setAttribute("aria-current", "page");
  });
}
