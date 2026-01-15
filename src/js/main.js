
document.addEventListener('DOMContentLoaded', () => {

    /* ---------------- Boot Screen ---------------- */
    const bootScreen = document.getElementById('bootScreen');

    const hideBootScreen = () => {
        bootScreen.classList.add('fade-out');
        setTimeout(() => {
            bootScreen.style.display = 'none';
        }, 500);
    };

    // Auto hide after 6s
    setTimeout(hideBootScreen, 6000);

    // Hide on any key press or click
    document.addEventListener('keydown', hideBootScreen, { once: true });
    bootScreen.addEventListener('click', hideBootScreen, { once: true });


    /* ---------------- Fade-in Scroll ---------------- */
    const fadeObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.fade-in').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'all 0.6s ease-out';
        fadeObserver.observe(el);
    });


    /* ---------------- Skill Bars Scroll ---------------- */
    const skillObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const bars = entry.target.querySelectorAll('.skill-progress');
                bars.forEach(bar => {
                    const width = bar.getAttribute('data-width');
                    bar.style.width = width; // rellena la barra
                });
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.3 });

    document.querySelectorAll('.skill-category').forEach(category => {
        skillObserver.observe(category);
    });


    /* ---------------- Smooth Scroll ---------------- */
    document.querySelectorAll('a[href^="#"]').forEach(link => {
        link.addEventListener('click', (e) => {
            const href = link.getAttribute('href');
            if (href !== '#') {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    const offset = 80; // ajustar según altura de nav
                    const targetPosition = target.offsetTop - offset;
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });


    /* ---------------- Hamburger Menu ---------------- */
    window.toggleMenu = () => {
        const navLinks = document.getElementById('navLinks');
        navLinks.classList.toggle('active');
    };

    window.closeMenu = () => {
        const navLinks = document.getElementById('navLinks');
        navLinks.classList.remove('active');
    };

});


