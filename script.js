// Smooth scrolling for discover button
document.addEventListener('DOMContentLoaded', function() {
    const discoverBtn = document.getElementById('discover-btn');
    
    if (discoverBtn) {
        discoverBtn.addEventListener('click', function() {
            const aboutSection = document.getElementById('about');
            if (aboutSection) {
                aboutSection.scrollIntoView({ 
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    }

    // Intersection Observer for animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -10% 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe all animated elements
    const animatedElements = document.querySelectorAll('.animate-fade-up, .animate-fade-in-delay');
    animatedElements.forEach(el => {
        // Set initial state for elements that aren't immediately visible
        if (el.getBoundingClientRect().top > window.innerHeight) {
            el.style.opacity = '0';
            el.style.transform = 'translateY(30px)';
            el.style.transition = 'opacity 0.8s ease-out, transform 0.8s ease-out';
        }
        observer.observe(el);
    });

    // Parallax effect for hero background
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const heroSection = document.querySelector('.hero-section');
        const heroBg = document.querySelector('.hero-bg');
        
        if (heroSection && heroBg) {
            const heroHeight = heroSection.offsetHeight;
            const scrollProgress = scrolled / heroHeight;
            
            if (scrollProgress <= 1) {
                heroBg.style.transform = `translateY(${scrolled * 0.5}px)`;
            }
        }
    });

    // Add smooth reveal animation to work items on scroll
    const workItems = document.querySelectorAll('.work-item');
    workItems.forEach((item, index) => {
        item.style.animationDelay = `${index * 0.1}s`;
    });

    // Enhanced hover effects for social items
    const socialItems = document.querySelectorAll('.social-item');
    socialItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-2px)';
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });

    // Add click ripple effect to buttons
    function createRipple(event) {
        const button = event.currentTarget;
        const circle = document.createElement('span');
        const diameter = Math.max(button.clientWidth, button.clientHeight);
        const radius = diameter / 2;

        circle.style.width = circle.style.height = `${diameter}px`;
        circle.style.left = `${event.clientX - button.offsetLeft - radius}px`;
        circle.style.top = `${event.clientY - button.offsetTop - radius}px`;
        circle.classList.add('ripple');

        const ripple = button.getElementsByClassName('ripple')[0];
        if (ripple) {
            ripple.remove();
        }

        button.appendChild(circle);
    }

    // Add ripple styles
    const style = document.createElement('style');
    style.textContent = `
        .ripple {
            position: absolute;
            border-radius: 50%;
            transform: scale(0);
            animation: ripple 600ms linear;
            background-color: rgba(255, 255, 255, 0.6);
            pointer-events: none;
        }

        @keyframes ripple {
            to {
                transform: scale(4);
                opacity: 0;
            }
        }

        .hero-btn {
            position: relative;
            overflow: hidden;
        }
    `;
    document.head.appendChild(style);

    // Apply ripple effect to hero button
    if (discoverBtn) {
        discoverBtn.addEventListener('click', createRipple);
    }

    // Keyboard navigation improvements
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Tab') {
            document.body.classList.add('keyboard-navigation');
        }
    });

    document.addEventListener('mousedown', function() {
        document.body.classList.remove('keyboard-navigation');
    });

    // Add keyboard navigation styles
    const keyboardStyle = document.createElement('style');
    keyboardStyle.textContent = `
        .keyboard-navigation *:focus {
            outline: 2px solid var(--primary) !important;
            outline-offset: 2px !important;
        }
    `;
    document.head.appendChild(keyboardStyle);
});