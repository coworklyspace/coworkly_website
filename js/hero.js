export function initHero() {
  const hero = document.querySelector(".hero");
  if (!hero) return;
  const img = hero.querySelector("img");
  const ready = () => hero.classList.add("is-ready");
  if (!img || img.complete) ready();
  else img.addEventListener("load", ready, { once: true });
}
