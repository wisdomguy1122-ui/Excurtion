document.addEventListener('DOMContentLoaded', () => {
    // 1. Remove Loader smoothly
    setTimeout(() => {
        const loader = document.getElementById('loader');
        if(loader) {
            loader.classList.add('hidden');
        }
    }, 500);

    // 2. Navbar Scroll Effect & Active Links
    const navbar = document.getElementById('navbar');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // 3. Mobile Menu Toggle
    const mobileMenuBtn = document.getElementById('mobile-menu');
    
    if(mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', () => {
            navbar.classList.toggle('mobile-open');
        });
    }

    // Close mobile menu when a link is clicked
    const navLinks = document.querySelectorAll('.nav-links a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if(navbar.classList.contains('mobile-open')){
                navbar.classList.remove('mobile-open');
            }
        });
    });

    // 4. Scroll Reveal Animations using IntersectionObserver
    const revealElements = document.querySelectorAll('.reveal');

    const revealOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    };

    const revealOnScroll = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, revealOptions);

    revealElements.forEach(element => {
        revealOnScroll.observe(element);
    });
});
