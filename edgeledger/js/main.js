// Sticky menu background
const navbar = document.querySelector('#navbar');

window.addEventListener('scroll', () => {
    navbar.style.opacity = window.scrollY > 65 ? 0.8 : 1;
});


// Smooth scrolling

$('#navbar a, .btn').on('click', function(event) {
    if (this.hash !== '') {
        event.preventDefault();

        const hash = this.hash;

        $('html, body').animate(
            {
                scrollTop: $(hash).offset().top - 100
            },
            800
        );
    }
});

