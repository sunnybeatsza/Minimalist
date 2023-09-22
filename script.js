// JavaScript to toggle the navigation menu
const navToggle = document.querySelector('.nav-toggle');
const navList = document.querySelector('#nav-list');

navToggle.addEventListener('click', () => {
  navList.classList.toggle('active');
});
