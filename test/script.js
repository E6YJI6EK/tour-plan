const sliderItems = document.querySelectorAll('.slider-item'),
    prev = document.querySelector('.left-arrow'),
    next = document.querySelector('.right-arrow')
let slideIndex = 1
let sliderItemsArray = []
sliderItems.forEach(elem => {
    sliderItemsArray.push(elem)
})

function checkCondition () {
    if (slideIndex === sliderItemsArray.length) {
        next.style.display = 'none'
    } else if (slideIndex === 1) {
        prev.style.display = 'none'
    } else {
        next.style.display = 'block'
        prev.style.display = 'block'
    }
}

function showNextSlide () {
    for (let i = 0; i < sliderItemsArray.length; i++) {
        if (sliderItemsArray[i].classList.contains('slider-item_primary') && (i+1) < sliderItemsArray.length) {
            sliderItemsArray[i].style.transform = 'translateX(-100%)'
            sliderItemsArray[i].style.transition = '0.5s'
            sliderItemsArray[i].classList.remove('slider-item_primary')
            sliderItemsArray[i+1].classList.add('slider-item_primary')
            slideIndex = i + 2
            break
        }
    }
    checkCondition()
    console.log('Slide № - ' + slideIndex)
}

function showPrewSlide() {
    for (let i = 0; i < sliderItemsArray.length; i++) {
        if (sliderItemsArray[i].classList.contains('slider-item_primary') && (i-1) >= 0) {
            sliderItemsArray[i-1].style.transform = 'translateX(0)'
            sliderItemsArray[i].style.transition = '0.5s'
            sliderItemsArray[i].classList.remove('slider-item_primary')
            sliderItemsArray[i-1].classList.add('slider-item_primary')
            slideIndex = i 
            break
        }
    }
    checkCondition()
    console.log('Slide № - ' + slideIndex)
}



checkCondition()
next.addEventListener('click', showNextSlide)
prev.addEventListener('click', showPrewSlide)
window.addEventListener('keydown', e => {
    if (e.code == 'ArrowLeft') {
        showPrewSlide()
    } else if (e.code == 'ArrowRight') {
        showNextSlide()
    }
})