const element = document.querySelector('.footer-date');

if (element) {
  const year = new Date().getFullYear();
  element.textContent = year < 2025 ? '©' + 2025 : '©' + year;
}
