const burgerBtn = document.getElementById('burger-menu');
const header = document.getElementById('header');
const body = document.getElementById('body');

burgerBtn.addEventListener('click', () => {
    burgerBtn.classList.toggle('open');
    header.classList.toggle('open');
    body.classList.toggle('unscroll')
})


// handle active in header
const links = document.querySelectorAll('.link')


function removeActive() {
    const current = document.getElementsByClassName('active');
    current[0].classList.remove('active');
}

for (let i = 0; i < links.length; i++) {
    const link = links[i];
    link.addEventListener('click', () => {
        removeActive();
        link.classList.add('active');
    })
}

// if click on Author, ACCUEIL is active;
const author = document.getElementsByClassName('header__nav__ck');
author[0].addEventListener('click', () => {
    if(!links[0].classList.contains('active')) {
        removeActive();
        links[0].classList.add('active');
    }
})


// change link active when user scrool
let sections = document.querySelectorAll("section");

window.addEventListener('scroll', () => {
    // Get the position of the window in the top
    let fromTop = window.scrollY;

    links.forEach(link => {
        // Get the hash from link #home, #biography, ...)
        let section = document.querySelector(link.hash);
        console.log(section, section.offsetTop, section.offsetHeight)
        if (
            section.offsetTop <= fromTop &&
            section.offsetTop + section.offsetHeight > fromTop
        ) {
            link.classList.add("active");
        } else {
            link.classList.remove("active");
        }
    })
})