// scroll reveal
ScrollReveal ({ 
    // reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.profile-container img, .heading', { origin: 'top' });
ScrollReveal().reveal('.profile-container h1, .profile-container h3,  .contentBot', { origin: 'bottom' });
ScrollReveal().reveal('.btn-back i', { origin: 'left' });
ScrollReveal().reveal('.title, .contentTop', { origin: 'right' });