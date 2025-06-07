function loadHTML(id, file) {
  fetch(file)
    .then(response => response.text())
    .then(data => {
      document.getElementById(id).innerHTML = data;
    })
    .catch(error => console.error('Error loading HTML:', error));
}

loadHTML('header', 'partials/header.html');
loadHTML('modal', 'partials/modal.html');
loadHTML('hero', 'partials/hero.html');

loadHTML('modern', 'partials/modern.html');
loadHTML('medan', 'partials/medan.html');
loadHTML('premium', 'partials/premium.html');
loadHTML('formeln', 'partials/formeln.html');
loadHTML('premium-two', 'partials/premium-two.html');
loadHTML('fred', 'partials/fred.html');
loadHTML('premium-three', 'partials/premium-three.html');
loadHTML('jag', 'partials/jag.html');
loadHTML('enligt', 'partials/enligt.html');
loadHTML('comments', 'partials/comments.html');
loadHTML('form', 'partials/form.html');

loadHTML('footer', 'partials/footer.html');
