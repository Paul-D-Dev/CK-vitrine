const burgerBtn = document.getElementById('burger-menu');
const header = document.getElementById('header');
const body = document.getElementById('body');

burgerBtn.addEventListener('click', () => {
    burgerBtn.classList.toggle('open');
    header.classList.toggle('open');
    body.classList.toggle('unscroll')
})