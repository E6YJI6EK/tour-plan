const modalDialog = document.querySelector('.modal'),
modalOpen = document.querySelector('.booking__btn')

modalOpen.addEventListener('click', () => {
    modalDialog.classList.add("modal_visible")
    const modalClose = document.querySelector('.modal__close')
    modalClose.addEventListener('click', e => {
        e.preventDefault()
        modalDialog.classList.remove("modal_visible")
    })
    window.addEventListener('keydown', e => {
        if (e.code === 'Escape') {
            modalDialog.classList.remove("modal_visible")
        }
    })
})


