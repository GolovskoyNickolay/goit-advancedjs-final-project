const backdrop = document.getElementById('backdrop');

window.openMenu = () => {
  backdrop?.classList.add('is-open');
};

window.closeMenu = () => {
  backdrop?.classList.remove('is-open');
};

window.menuLayoutClickHandler = (event) => {
  event.stopPropagation();
};
