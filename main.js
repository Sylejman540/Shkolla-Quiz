const burger = document.getElementById('burger');
const menuItems = document.getElementById('menu-items');
const iconClose = document.querySelector('.icon-close');
const iconOpen = document.querySelector('.icon-open');

burger.addEventListener('click', () => {
  menuItems.classList.toggle('opacity-0');
  menuItems.classList.toggle('pointer-events-none');
  
  // Toggle icons
  iconClose.classList.toggle('hidden');
  iconOpen.classList.toggle('hidden');
});
