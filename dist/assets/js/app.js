const navToggle = document.querySelector('.header__nav--toggle');
const nav = document.querySelector('.header__nav');

navToggle.addEventListener('click', e => {
    e.preventDefault();
    nav.classList.toggle('active');
});