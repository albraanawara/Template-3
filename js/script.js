document.addEventListener("DOMContentLoaded", () => {
  const section = document.querySelector(".parallax-section");
  const image = document.querySelector(".parallax-img");

  if (!section || !image) return;

  window.addEventListener("scroll", () => {
    const rect = section.getBoundingClientRect();
    const windowHeight = window.innerHeight;

    if (rect.bottom > 0 && rect.top < windowHeight) {
      const progress = (windowHeight - rect.top) / (windowHeight + rect.height);
      const translateY = (progress - 0.5) * 120; // كل ما الرقم أكبر الحركة أكبر
      image.style.transform = `translateY(${translateY}px)`;
    }
  });
});
