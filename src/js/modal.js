(() => {
  const refs = {
    burgerBtn: document.querySelector('[data-modal-open]'),
    closeModalBtn: document.querySelector('[data-modal-close]'),
    modal: document.querySelector('[data-modal]'),
    backdrop: document.querySelector('[data-backdrop]'),
    links: document.querySelectorAll('.modal-nav-link'),
  };

  refs.burgerBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', closeModal);
  refs.backdrop.addEventListener('click', closeModal);

  refs.links.forEach(link => {
    link.addEventListener('click', closeModal);
  });

  function toggleModal() {
    const isOpen = refs.modal.classList.contains('is-hidden');

    refs.modal.classList.toggle('is-hidden');
    refs.backdrop.classList.toggle('is-hidden');
    refs.closeModalBtn.classList.toggle('is-hidden');
    refs.burgerBtn.classList.toggle('open');
  }

  function closeModal() {
    refs.modal.classList.add('is-hidden');
    refs.backdrop.classList.add('is-hidden');
    refs.closeModalBtn.classList.add('is-hidden');
    refs.burgerBtn.classList.remove('open');
  }
})();
