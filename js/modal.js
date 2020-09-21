(() => {
  const refs = {
    openModalBtn: [...document.querySelectorAll('[data-modal-open]')],
    closeModalBtn: document.querySelector('[data-modal-close]'),
    modal: document.querySelector('[data-modal]'),
    bodyModal: document.querySelector('[body-modal]'),
  };

  refs.openModalBtn.forEach(e => {
    e.addEventListener('click', toggleModal);
  });

  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.bodyModal.classList.toggle('is-unlocked'),
      refs.modal.classList.toggle('is-hidden');
  }
})();
