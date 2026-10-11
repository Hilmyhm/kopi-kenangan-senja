const navbar = document.querySelector('.navbar-nav');
const menu = document.querySelector('#humberger-menu');


// toggle kelas active
menu.
onclick = () => {
    navbar.classList.toggle('active');
}

// klik diluar side bar untu menghilangkannya
document.
onclick = (Event) => {
    if (!navbar.contains(Event.target) && !menu.contains(Event.target)) 
        navbar.classList.remove('active');
}
