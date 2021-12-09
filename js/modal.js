const modalViewOther = document.querySelector(".view_other"),
modalOpenViewOther = document.querySelector(".booking__btn");
  modalOpenViewOther.addEventListener("click", () => {
    document.body.classList.add("stop-scroll"),
      modalViewOther.classList.add("modal_visible");
      let formName = modalViewOther.querySelector('.modal__name');
      let formPhone = modalViewOther.querySelector('.modal__phone');
      let formMail = modalViewOther.querySelector('.modal__mail');
      let formMessage = modalViewOther.querySelector('.modal__message');
      modalViewOther
        .querySelector(".modal__close")
        .addEventListener("click", (o) => {
            formName.value = '';
            formPhone.value = '';
            formMail.value = '';
            formMessage.value = '';
          modalViewOther.classList.remove("modal_visible"),
            document.body.classList.remove("stop-scroll");
        });
      window.addEventListener("keydown", (o) => {
        if ("Escape" === o.code) {
            formName.value = '';
            formPhone.value = '';
            formMail.value = '';
            formMessage.value = '';
            modalViewOther.classList.remove("modal_visible");
            document.body.classList.remove("stop-scroll");
        }    
      });
  });