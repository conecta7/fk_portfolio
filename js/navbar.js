$(document).ready(function() {
    var prevScrollpos = window.pageYOffset;
    $(window).scroll(function() {
        if (window.scrollY == 0) {
            $(".navbar").removeClass("navbar-background");
            navbarBackground.classList.remove('show');
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
});

// Select the navbar and the navbar background
const navbar = document.querySelector('.navbar');
const navbarBackground = document.querySelector('.navbar-background');

// Get the height of the navbar
const navbarHeight = navbar.offsetHeight;

// Listen for scroll events on the window
window.addEventListener('scroll', () => {
    // Check if the user has scrolled more than the height of the navbar
    if (window.scrollY > navbarHeight) {
        // Add the navbar background class
        navbarBackground.classList.add('show');
    } else {
        // Remove the navbar background class
        navbarBackground.classList.remove('show');
    }
});

// Set the initial state of the navbar background
if (window.scrollY > navbarHeight) {
    navbarBackground.classList.add('show');
} else {
    navbarBackground.classList.remove('show');
}
