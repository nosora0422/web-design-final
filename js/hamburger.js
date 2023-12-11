
document.querySelector('.hamburger').addEventListener('click', function() {
let menu = document.getElementById('m-nav-list');
let closeIcon = document.querySelector('.fa-xmark');
let hbg = document.querySelector('.fa-bars');
menu.classList.toggle('hidden');
closeIcon.classList.toggle('invisible');
});
