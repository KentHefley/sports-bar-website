document.addEventListener('DOMContentLoaded', () => {
    initApp();
})

const initApp = () => {
    const menuBtn = document.querySelector('.nav__burger-btn');
    const list = document.querySelector('.nav__list');
    menuBtn.addEventListener('click', toggleButtonAndMenu);
    list.addEventListener('click', toggleButtonAndMenu);
    getCurrentYear();
}

const toggleButtonAndMenu = () => {
    const menuBtn = document.querySelector('.nav__burger-btn');
    const list = document.querySelector('.nav__list');
    menuBtn.classList.toggle('open');
    list.classList.toggle('open');
}

const getCurrentYear = () => {
    const year = new Date().getFullYear();
    document.getElementById('year').textContent = year;
}