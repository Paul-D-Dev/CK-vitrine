const burgerBtn = document.getElementById('burger-menu');
const header = document.getElementById('header');
burgerBtn.addEventListener('click', () => {
    burgerBtn.classList.toggle('open');
    header.classList.toggle('open');
})