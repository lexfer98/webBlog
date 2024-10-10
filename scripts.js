document.addEventListener('DOMContentLoaded', function() {
    const dropdown = document.querySelector('.dropdown');
    dropdown.addEventListener('click', function() {
        const content = document.querySelector('.dropdown-content');
        content.classList.toggle('show');
    });
});
