function menuItemClick(event) {
  // switches the clicked menu item to the selected class
  const navMenu = document.querySelectorAll('.nav-menu .item');
  navMenu.forEach((element) => {
    element.classList.remove('selected');
  })
  event.target.classList.add('selected');
}
const navMenu = document.querySelector('.nav-menu');
navMenu.addEventListener('click', menuItemClick);
