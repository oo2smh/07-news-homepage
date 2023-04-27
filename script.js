
// NAVIGATION TOGGLE FUNCTIONALITY
const nav = document.querySelector('.header__navlist');
const navToggle = document.querySelector('.mobile-nav-toggle');

function showNav() {
  const visibility = nav.getAttribute('data-visible');


  if(visibility === "false") {
    nav.setAttribute('data-visible', true)
    navToggle.setAttribute('aria-expanded', true);
  } else {
    nav.setAttribute('data-visible', false);
    navToggle.setAttribute('aria-expanded', false);
  }

}

navToggle.addEventListener('click', showNav);
