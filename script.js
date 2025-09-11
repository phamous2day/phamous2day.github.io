// Custom Cursor
class CustomCursor {
    constructor() {
        this.cursor = document.getElementById('custom-cursor');
        this.position = { x: 0, y: 0 };
        this.isClicked = false;
        
        this.init();
    }
    
    init() {
        this.bindEvents();
    }
    
    bindEvents() {
        document.addEventListener('mousemove', (e) => this.updatePosition(e));
        document.addEventListener('mousedown', () => this.handleMouseDown());
        document.addEventListener('mouseup', () => this.handleMouseUp());
    }
    
    updatePosition(e) {
        this.position.x = e.clientX;
        this.position.y = e.clientY;
        
        this.cursor.style.left = `${this.position.x}px`;
        this.cursor.style.top = `${this.position.y}px`;
    }
    
    handleMouseDown() {
        this.isClicked = true;
        this.cursor.classList.add('clicked');
    }
    
    handleMouseUp() {
        this.isClicked = false;
        this.cursor.classList.remove('clicked');
    }
}

// Smooth scroll functionality
class SmoothScroll {
    constructor() {
        this.init();
    }
    
    init() {
        const heroButton = document.getElementById('hero-button');
        if (heroButton) {
            heroButton.addEventListener('click', () => this.scrollToAbout());
        }
    }
    
    scrollToAbout() {
        const aboutSection = document.getElementById('about');
        if (aboutSection) {
            aboutSection.scrollIntoView({ behavior: 'smooth' });
        }
    }
}

// Intersection Observer for animations
class AnimationObserver {
    constructor() {
        this.observer = null;
        this.init();
    }
    
    init() {
        this.observer = new IntersectionObserver(
            (entries) => this.handleIntersection(entries),
            {
                threshold: 0.1,
                rootMargin: '0px 0px -50px 0px'
            }
        );
        
        // Observe all animated elements
        const animatedElements = document.querySelectorAll('.animate-fade-up, .animate-fade-in-delay');
        animatedElements.forEach(el => this.observer.observe(el));
    }
    
    handleIntersection(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }
}

// Hover effects for interactive elements
class HoverEffects {
    constructor() {
        this.init();
    }
    
    init() {
        this.bindCardHovers();
        this.bindJobCardHovers();
        this.bindSocialLinkHovers();
    }
    
    bindCardHovers() {
        const cards = document.querySelectorAll('[data-hover="card"]');
        cards.forEach(card => {
            card.addEventListener('mouseenter', (e) => this.handleCardHover(e));
            card.addEventListener('mouseleave', (e) => this.handleCardLeave(e));
        });
    }
    
    bindJobCardHovers() {
        const jobCards = document.querySelectorAll('[data-hover="job"]');
        jobCards.forEach(card => {
            card.addEventListener('mouseenter', (e) => this.handleJobCardHover(e));
            card.addEventListener('mouseleave', (e) => this.handleJobCardLeave(e));
        });
    }
    
    bindSocialLinkHovers() {
        const socialLinks = document.querySelectorAll('[data-hover="social"]');
        socialLinks.forEach(link => {
            link.addEventListener('mouseenter', (e) => this.handleSocialLinkHover(e));
            link.addEventListener('mouseleave', (e) => this.handleSocialLinkLeave(e));
        });
    }
    
    handleCardHover(e) {
        e.currentTarget.style.transform = 'translateY(-2px)';
        e.currentTarget.style.boxShadow = 'var(--shadow-glow)';
    }
    
    handleCardLeave(e) {
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.boxShadow = 'var(--shadow-elegant)';
    }
    
    handleJobCardHover(e) {
        e.currentTarget.style.transform = 'translateY(-2px)';
        e.currentTarget.style.boxShadow = 'var(--shadow-glow)';
        
        const companyName = e.currentTarget.querySelector('.company-name');
        if (companyName) {
            companyName.style.color = 'hsl(var(--primary))';
        }
    }
    
    handleJobCardLeave(e) {
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.boxShadow = 'var(--shadow-elegant)';
        
        const companyName = e.currentTarget.querySelector('.company-name');
        if (companyName) {
            companyName.style.color = 'hsl(var(--foreground))';
        }
    }
    
    handleSocialLinkHover(e) {
        e.currentTarget.style.transform = 'translateY(-2px)';
        e.currentTarget.style.boxShadow = 'var(--shadow-glow)';
        e.currentTarget.style.borderColor = 'hsl(var(--primary) / 0.5)';
        
        const iconWrapper = e.currentTarget.querySelector('.icon-wrapper');
        const label = e.currentTarget.querySelector('.label');
        
        if (iconWrapper) {
            iconWrapper.style.backgroundColor = 'hsl(var(--primary) / 0.3)';
        }
        if (label) {
            label.style.color = 'hsl(var(--primary))';
        }
    }
    
    handleSocialLinkLeave(e) {
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.boxShadow = 'var(--shadow-elegant)';
        e.currentTarget.style.borderColor = 'hsl(var(--border) / 0.5)';
        
        const iconWrapper = e.currentTarget.querySelector('.icon-wrapper');
        const label = e.currentTarget.querySelector('.label');
        
        if (iconWrapper) {
            iconWrapper.style.backgroundColor = 'hsl(var(--primary) / 0.2)';
        }
        if (label) {
            label.style.color = 'hsl(var(--foreground))';
        }
    }
}

// Initialize all functionality when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    new CustomCursor();
    new SmoothScroll();
    new AnimationObserver();
    new HoverEffects();
    
    // Set initial opacity for animated elements
    const animatedElements = document.querySelectorAll('.animate-fade-up, .animate-fade-in-delay');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.8s ease-out, transform 0.8s ease-out';
    });
    
    // Trigger animations for elements in viewport on load
    setTimeout(() => {
        const heroElements = document.querySelectorAll('.hero-section .animate-fade-up, .hero-section .animate-fade-in-delay');
        heroElements.forEach(el => {
            el.style.opacity = '1';
            el.style.transform = 'translateY(0)';
        });
    }, 100);
});