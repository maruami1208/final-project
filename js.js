const searchInput = document.getElementById('floatingInput');
const form = document.querySelector('form');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const searchTerm = searchInput.value.toLowerCase();
  // Do something with the search term, like perform a search or filter items on the page
});
