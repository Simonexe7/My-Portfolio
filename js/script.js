// toggle icon navbar
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let button = document.querySelector('#btnCV');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active'); 
};

// scroll section active link
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            })
        }
    });

    // sticky navbar
    let header = document.querySelector('.header');

    header.classList.toggle('sticky', window.scrollY > 100);

    // remove toggle icon and navbar when click navbar link (scroll)
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active'); 
};

button.onclick = () => {
    Swal.fire({
        title: 'Error',
        text: 'Currently CV is not available',
        icon: 'error',
        background: '#1f242d',
        iconColor: '#0ef',
        color: '#fff',
        width: '50em',
        confirmButtonColor: '#0ef'
    })
}

// scroll reveal
ScrollReveal ({ 
    // reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form, .gallery-box .dream img', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });

// typed js
const typed = new Typed('.multiple-text', {
    strings: ['Frontend Developer', 'Photographer'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});


// Google spreadsheet code
const scriptURL = 'https://script.google.com/macros/s/AKfycby6eDX7fSe1kXoP1N72gOeJnlbhX2-tXwQAbEpykTozpxwt3OCxMXWhDFNWd9XF0xJW/exec'
const form = document.forms['contact-form']
// button form display
let btnForm = document.querySelector('.btn-form');
let loading = document.querySelector('.loading');

form.addEventListener('submit', e => {
    e.preventDefault()
    btnForm.classList.toggle('d-none');
    loading.classList.toggle('d-none');
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
        .then(response => {
            btnForm.classList.toggle('d-none');
            loading.classList.toggle('d-none');
            Swal.fire({
                title: 'Success!',
                text: 'Your message has been sent',
                icon: 'success',
                background: '#1f242d',
                iconColor: '#0ef',
                color: '#fff',
                width: '50em',
                confirmButtonColor: '#0ef'
            })
        })
        .catch(error => {
            btnForm.classList.toggle('d-none');
            loading.classList.toggle('d-none');
            Swal.fire({
                title: 'Error',
                text: 'Your message was not sent',
                icon: 'error',
                background: '#1f242d',
                iconColor: '#0ef',
                color: '#fff',
                width: '50em',
                confirmButtonColor: '#0ef'
            })
        }) 
})


