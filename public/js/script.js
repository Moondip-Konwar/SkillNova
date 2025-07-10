document.addEventListener("DOMContentLoaded", () => {
  const elements = document.querySelectorAll('.fade-up');

  elements.forEach((el, index) => {
    setTimeout(() => {
      el.classList.add('visible');
    }, index * 150); // 150ms gap between each element
  });
});
