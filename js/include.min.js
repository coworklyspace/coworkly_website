export async function includePartials() {
  const slots = document.querySelectorAll("[data-include]");
  await Promise.all([...slots].map(async (slot) => {
    const res = await fetch(slot.dataset.include);
    slot.outerHTML = await res.text();
  }));
  document.dispatchEvent(new Event("partials:ready"));
}
