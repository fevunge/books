const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const animationListElement = document.getElementById("book-list");

const markVisibleCards = () => {
  const cards = [...document.querySelectorAll(".book-card")];

  if (prefersReducedMotion || typeof IntersectionObserver === "undefined") {
    cards.forEach((card) => card.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.12,
      rootMargin: "0px 0px -20px 0px"
    }
  );

  cards.forEach((card) => observer.observe(card));
};

const pulseFilterUpdate = () => {
  if (prefersReducedMotion || !animationListElement) return;
  animationListElement.classList.add("is-filtering");
  window.setTimeout(() => animationListElement.classList.remove("is-filtering"), 260);
};

window.addEventListener("DOMContentLoaded", () => {
  window.requestAnimationFrame(() => {
    document.body.classList.add("is-ready");
    markVisibleCards();
  });
});

document.addEventListener("catalog:updated", () => {
  markVisibleCards();
  pulseFilterUpdate();
});
