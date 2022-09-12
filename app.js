const menu = document.querySelector('.menu');
// const menuItems = document.querySelectorAll(".menuItem");
const hamburger = document.querySelector('.hamburger');
const closeIcon = document.querySelector('.closeIcon');
const menuIcon = document.querySelector('.menuIcon');

closeIcon.style.display = 'none';
function toggleMenu() {
  if (menu.classList.contains('showMenu')) {
    menu.classList.remove('showMenu');
    closeIcon.style.display = 'none';
    menuIcon.style.display = 'block';
  } else {
    menu.classList.add('showMenu');
    closeIcon.style.display = 'flex';
    menuIcon.style.display = 'none';
  }
}

hamburger.addEventListener('click', toggleMenu);
