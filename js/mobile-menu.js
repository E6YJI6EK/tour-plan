const menuBtn = document.querySelector('.menu-btn')
menuBtn.addEventListener('click', () => {
    document.querySelector('.header__nav').classList.toggle('header__nav_visible')
})