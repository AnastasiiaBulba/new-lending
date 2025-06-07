document
  .getElementById('comment-form')
  .addEventListener('submit', function (e) {
    e.preventDefault();

    const message = document.getElementById('message');
    message.classList.remove('hidden');

    this.reset();

    setTimeout(() => {
      message.classList.add('hidden');
    }, 5000);
  });
