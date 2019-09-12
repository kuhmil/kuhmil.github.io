const navburger = () => {
  const burger = document.querySelector('.burger')
  const nav = document.querySelector('.nav-links')
  const navlinks = document.querySelectorAll('.nav-links li')

  burger.addEventListener('click', () => {
    nav.classList.toggle('nav-active');
  });

  navlinks.foreach((link, index) => {
    link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 1}s`;

  });
}



const app = () => {
  navburger();
}

navburger();