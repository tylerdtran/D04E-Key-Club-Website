
    let mainNav = document.getElementById('nav-bar'); 
    let navBarToggle = document.getElementById('js-navbar-toggle');

    navBarToggle.addEventListener('click', function () {
        mainNav.classList.toggle('active');
    });

if(window.outerWidth < 768) {
    $(function() { // DOM ready
        // If a link has a dropdown, add sub menu toggle.
        $('nav ul li a:not(:only-child)').click(function(e) {
        $(this).siblings('.submenu').slideToggle('fast');
        // Close one dropdown when selecting another
        $('.submenu').not($(this).siblings()).hide();
        e.stopPropagation();
        });
        // Clicking away from dropdown will remove the dropdown class
        $('html').click(function() {
        $('.submenu').hide();
        });
        // Toggle open and close nav styles on click
        /*
        $('.menu-btn').click(function() {
        $('.nav-bar').toggle(); 
        });*/ 
        // Hamburger to X toggle
        $('.menu-btn').on('click', function() {
        this.classList.toggle('active');
        });
    });
    
}






