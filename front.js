

window.addEventListener('scroll', function() {
    var top = document.querySelector('.top');

    if (window.scrollY > 50) { // Change '50' to the number of pixels after which you want the color to change
        top.classList.add('scrolled');
    } else {
        top.classList.remove('scrolled');
    }
});
