document.addEventListener('DOMContentLoaded', function () {
  const hamMenu = document.querySelector('.ham-menu');
  const offScreenMenu = document.querySelector('.off-screen-menu');

  if (hamMenu && offScreenMenu) {
    hamMenu.addEventListener('click', () => {
      hamMenu.classList.toggle('active');
      offScreenMenu.classList.toggle('active');
    });

    // Optional: Close the menu when a link inside the menu is clicked
    offScreenMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        hamMenu.classList.remove('active');
        offScreenMenu.classList.remove('active');
      });
    });
  }
});
