$(document).ready(function() {
    var prevScrollpos = window.pageYOffset;
    $(window).scroll(function() {
        if (window.scrollY == 0) {
            $(".navbar").removeClass("navbar-background");
            navbar.classList.remove('show');
        }
        var currentScrollpos = window.pageYOffset;
        if (prevScrollpos > currentScrollpos) {
            $(".navbar").addClass("navbar-background");
            $(".navbar").removeClass("navbar-hidden");
            $(".navbar").css("transition", "transform 0.5s ease-out");
        } else {
            $(".navbar").removeClass("navbar-background");
            if (window.scrollY === 0) {
                $(".navbar").removeClass("navbar-hidden");
            } else {
                $(".navbar").addClass("navbar-hidden");
                $(".navbar").css("transition", "transform 0.5s ease-out");
            }
        }
        prevScrollpos = currentScrollpos;
    });

    // Remove the background color from the navbar on page load
    $(".navbar").removeClass("navbar-background");

    // Select the navbar and the navbar background
    const navbar = document.querySelector('.navbar');
    // const navbarBackground = document.querySelector('.navbar-background');

    // Get the height of the navbar
    const navbarHeight = navbar.offsetHeight;

    // Listen for scroll events on the window
    window.addEventListener('scroll', () => {
        // Check if the user has scrolled more than the height of the navbar
        if (window.scrollY > navbarHeight) {
            // Add the navbar background class
            navbar.classList.add('show');
        } else {
            // Remove the navbar background class
            navbar.classList.remove('show');
        }
    });

    // Set the initial state of the navbar background
    if (window.scrollY > navbarHeight) {
        navbar.classList.add('show');
    } else {
        navbar.classList.remove('show');
    }

    // on click scroll functions

    // Get the links you want to use for scrolling
    const aboutLink = document.querySelector('#about-link');
    const workLink = document.querySelector('#experience-link');
    const projectsLink = document.querySelector('#projects-link');
    const contactLink = document.querySelector('#contact-link');

    // // Get the sections you want to scroll to
    // const aboutSection = document.querySelector('#about-karaniku');
    // const workSection = document.querySelector('#work-history');
    // const projectsSection = document.querySelector('#project-showcase');
    // const contactSection = document.querySelector('#contact-me');

    // // Add event listeners to the links
    // aboutLink.addEventListener('click', (event) => {
    // event.preventDefault();
    // aboutSection.scrollIntoView({ behavior: 'smooth' });
    // });

    // workLink.addEventListener('click', (event) => {
    // event.preventDefault();
    // workSection.scrollIntoView({ behavior: 'smooth' });
    // });

    // projectsLink.addEventListener('click', (event) => {
    // event.preventDefault();
    // projectsSection.scrollIntoView({ behavior: 'smooth' });
    // });

    // contactLink.addEventListener('click', (event) => {
    // event.preventDefault();
    // contactSection.scrollIntoView({ behavior: 'smooth' });
    // });

});