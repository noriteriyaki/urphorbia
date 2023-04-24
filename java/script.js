const navbarNav = document.querySelector('.navbar-nav');

document.querySelector('#star').onclick = () => {
  navbarNav.classList.toggle('active');
};

const star = document.querySelector('#star');

document.addEventListener('click', function (e) {
    if(!star.contains(e.target) && !navbarNav.contains(e.target)) {
        navbarNav.classList.remove('active');
    }
});