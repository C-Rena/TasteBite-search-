document.addEventListener('DOMContentLoaded', () => {
    const searchIcon = document.getElementById('search-icon');
    const searchInput = document.getElementById('search-input');

    searchIcon.addEventListener('click', () => {
        if (searchInput.style.display === 'none' || searchInput.style.display === '') {
            searchInput.style.display = 'block';
            searchInput.focus();
        } else {
            searchInput.style.display = 'none';
        }
    });
});
