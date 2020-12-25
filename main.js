const nav = document.querySelector('.nav-links');
const toggle = document.querySelector('.toggle');

toggle.addEventListener('click', function() {
    nav.classList.toggle('active');
    toggle.classList.toggle('clicked');
});