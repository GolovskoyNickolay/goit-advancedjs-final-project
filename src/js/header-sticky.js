const header = document.querySelector('.router');
const body = document.body;

let lastScrollTop = 0;
let scrollTimeoutId;

const onScroll = () => {
  if (!body.hasAttribute('data-user-scrolling')) {
    return;
  }

  const scrollTop = document.documentElement.scrollTop;

  header.classList.add('sticky');

  if (scrollTop > 0) {
    header.classList.toggle('hidden', scrollTop > lastScrollTop);
  } else {
    header.classList.remove('sticky');
  }

  lastScrollTop = scrollTop;
};

const onWheel = () => {
  body.setAttribute('data-user-scrolling', 'true');

  clearTimeout(scrollTimeoutId);
  scrollTimeoutId = setTimeout(() => {
    body.removeAttribute('data-user-scrolling');
  }, 100);
};

// window.addEventListener('scroll', onScroll);
document.addEventListener('wheel', onWheel);

const menuLinks = document.querySelectorAll('.menu-items.router .menu-item a');

menuLinks.forEach((link) => {
  if (link.href === window.location.href || window.location.pathname.endsWith(link.getAttribute('href'))) {
    link.parentElement.classList.add('active');
  } else {
    link.parentElement.classList.remove('active');
  }
});
