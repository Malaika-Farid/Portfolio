window.addEventListener('DOMContentLoaded', event => {

    const sidebarWrapper = document.getElementById('sidebar-wrapper');
    const menuToggle = document.body.querySelector('.menu-toggle');
    let scrollToTopVisible = false;

    // Open/Close Sidebar on Menu Toggle
    menuToggle.addEventListener('click', event => {
        event.preventDefault();
        sidebarWrapper.classList.toggle('active');
        _toggleMenuIcon();
        menuToggle.classList.toggle('active');
    })

    // Closes the sidebar when clicking anywhere outside
    document.addEventListener('click', function(event) {
        const isClickInsideSidebar = sidebarWrapper.contains(event.target);
        const isClickOnMenuToggle = menuToggle.contains(event.target);
        
        if (!isClickInsideSidebar && !isClickOnMenuToggle && sidebarWrapper.classList.contains('active')) {
            sidebarWrapper.classList.remove('active');
            menuToggle.classList.remove('active');
            _toggleMenuIcon();
        }
    });

    // Scroll to top button appear
    document.addEventListener('scroll', () => {
        const scrollToTop = document.body.querySelector('.scroll-to-top');
        if (document.documentElement.scrollTop > 100) {
            if (!scrollToTopVisible) {
                fadeIn(scrollToTop);
                scrollToTopVisible = true;
            }
        } else {
            if (scrollToTopVisible) {
                fadeOut(scrollToTop);
                scrollToTopVisible = false;
            }
        }
    })
})

function _toggleMenuIcon() {
    const menuToggleBars = document.body.querySelector('.menu-toggle > .fa-bars');
    const menuToggleTimes = document.body.querySelector('.menu-toggle > .fa-xmark');
    if (menuToggleBars) {
        menuToggleBars.classList.remove('fa-bars');
        menuToggleBars.classList.add('fa-xmark');
    }
    if (menuToggleTimes) {
        menuToggleTimes.classList.remove('fa-xmark');
        menuToggleTimes.classList.add('fa-bars');
    }
}

function fadeOut(el) {
    el.style.opacity = 1;
    (function fade() {
        if ((el.style.opacity -= .1) < 0) {
            el.style.display = "none";
        } else {
            requestAnimationFrame(fade);
        }
    })();
};

function fadeIn(el, display) {
    el.style.opacity = 0;
    el.style.display = display || "block";
    (function fade() {
        var val = parseFloat(el.style.opacity);
        if (!((val += .1) > 1)) {
            el.style.opacity = val;
            requestAnimationFrame(fade);
        }
    })();
};

function openPDF() {
    window.open('path/to/yourfile.pdf', '_blank'); // Change the path to your PDF file
};
