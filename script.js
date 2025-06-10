// DOM Elements
const navLinks = document.querySelectorAll('.nav-link');
const roleBtns = document.querySelectorAll('.role-btn');
const rolePanels = document.querySelectorAll('.role-panel');
const queries = document.querySelectorAll('.query');
const titleSelect = document.getElementById('title-select');
const dynamicSubmit = document.getElementById('dynamic-submit');
const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
const navMenu = document.querySelector('.nav-menu');
const navbar = document.querySelector('.navbar');
const earlyAccessForm = document.querySelector('.early-access-form');
const ctaButtons = document.querySelectorAll('.nav-cta, .btn-primary');

// Rotating Queries Animation
let currentQueryIndex = 0;
function rotateQueries() {
    queries.forEach(query => query.classList.remove('active'));
    queries[currentQueryIndex].classList.add('active');
    currentQueryIndex = (currentQueryIndex + 1) % queries.length;
}
setInterval(rotateQueries, 3000);

// Role Selector Functionality
roleBtns.forEach(btn => {
    btn.addEventListener('click', function() {
        const role = this.getAttribute('data-role');
        
        // Update active button
        roleBtns.forEach(b => b.classList.remove('active'));
        this.classList.add('active');
        
        // Update active panel
        rolePanels.forEach(panel => {
            if (panel.getAttribute('data-role') === role) {
                panel.classList.add('active');
            } else {
                panel.classList.remove('active');
            }
        });
    });
});

// Smooth Scrolling for Navigation Links
navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        if (targetSection) {
            const navHeight = navbar.offsetHeight;
            const targetPosition = targetSection.offsetTop - navHeight - 20;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Dynamic Form Button Text
titleSelect.addEventListener('change', function() {
    const selectedTitle = this.value;
    const buttonTexts = {
        'CEO': 'Get Strategic Intelligence',
        'CFO': 'Get Financial Intelligence',
        'COO': 'Get Operational Intelligence',
        'Procurement Manager': 'Get Procurement Intelligence',
        'Other': 'Get Started',
        '': 'Get Started'
    };
    
    dynamicSubmit.textContent = buttonTexts[selectedTitle] || 'Get Started';
});

// Mobile Menu Toggle
mobileMenuToggle.addEventListener('click', function() {
    this.classList.toggle('active');
    navMenu.classList.toggle('mobile-active');
    
    // Create mobile menu if it doesn't exist
    if (!document.querySelector('.mobile-nav-menu')) {
        const mobileMenu = document.createElement('div');
        mobileMenu.className = 'mobile-nav-menu';
        mobileMenu.innerHTML = `
            <a href="#platform" class="mobile-nav-link">Platform</a>
            <a href="#roles" class="mobile-nav-link">For Your Role</a>
            <a href="#vision" class="mobile-nav-link">Vision</a>
            <a href="#partners" class="mobile-nav-link">Early Partners</a>
            <button class="nav-cta mobile-cta">Join Early Access</button>
        `;
        navbar.appendChild(mobileMenu);
        
        // Add event listeners to mobile menu links
        document.querySelectorAll('.mobile-nav-link').forEach(link => {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                mobileMenuToggle.classList.remove('active');
                mobileMenu.classList.remove('active');
                
                const targetId = this.getAttribute('href');
                const targetSection = document.querySelector(targetId);
                
                if (targetSection) {
                    const navHeight = navbar.offsetHeight;
                    const targetPosition = targetSection.offsetTop - navHeight - 20;
                    
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
            });
        });
    }
    
    const mobileMenu = document.querySelector('.mobile-nav-menu');
    mobileMenu.classList.toggle('active');
});

// Navbar Scroll Effect
let lastScrollTop = 0;
window.addEventListener('scroll', function() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    if (scrollTop > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
    
    // Hide/show navbar on scroll
    if (scrollTop > lastScrollTop && scrollTop > 300) {
        navbar.style.transform = 'translateY(-100%)';
    } else {
        navbar.style.transform = 'translateY(0)';
    }
    
    lastScrollTop = scrollTop;
});

// Form Submission Handler
earlyAccessForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form data
    const formData = new FormData(this);
    const data = Object.fromEntries(formData);
    
    // Show success message
    const successMessage = document.createElement('div');
    successMessage.className = 'success-message';
    successMessage.textContent = 'Thank you! We\'ll be in touch within 48 hours.';
    successMessage.style.cssText = `
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: white;
        color: #28a745;
        padding: 30px 50px;
        border-radius: 12px;
        box-shadow: 0 10px 30px rgba(0,0,0,0.2);
        font-size: 20px;
        font-weight: 600;
        z-index: 10000;
        animation: fadeIn 0.3s ease;
    `;
    
    document.body.appendChild(successMessage);
    
    // Reset form
    this.reset();
    dynamicSubmit.textContent = 'Get Started';
    
    // Remove success message after 3 seconds
    setTimeout(() => {
        successMessage.style.animation = 'fadeOut 0.3s ease';
        setTimeout(() => {
            document.body.removeChild(successMessage);
        }, 300);
    }, 3000);
});

// CTA Button Click Handlers
ctaButtons.forEach(button => {
    button.addEventListener('click', function(e) {
        if (!this.closest('form')) {
            e.preventDefault();
            const finalCTA = document.querySelector('.final-cta');
            const navHeight = navbar.offsetHeight;
            const targetPosition = finalCTA.offsetTop - navHeight - 20;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Intersection Observer for Animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
            
            // Special animations for specific sections
            if (entry.target.classList.contains('data-source')) {
                const delay = entry.target.getAttribute('data-delay');
                entry.target.style.animationDelay = `${delay}ms`;
            }
        }
    });
}, observerOptions);

// Observe elements for animation
document.querySelectorAll('.section-title, .faq-item, .use-case-card, .timeline-item').forEach(el => {
    observer.observe(el);
});

// Add CSS for animations
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeIn {
        from { opacity: 0; transform: translateY(20px); }
        to { opacity: 1; transform: translateY(0); }
    }
    
    @keyframes fadeOut {
        from { opacity: 1; transform: translateY(0); }
        to { opacity: 0; transform: translateY(20px); }
    }
    
    .animate-in {
        animation: fadeIn 0.6s ease forwards;
    }
    
    .mobile-nav-menu {
        position: fixed;
        top: 70px;
        left: 0;
        right: 0;
        background: white;
        padding: 20px;
        box-shadow: 0 4px 6px rgba(0,0,0,0.1);
        display: none;
        z-index: 999;
    }
    
    .mobile-nav-menu.active {
        display: block;
        animation: slideDown 0.3s ease;
    }
    
    .mobile-nav-link {
        display: block;
        padding: 15px 0;
        color: var(--text-dark);
        text-decoration: none;
        font-weight: 500;
        border-bottom: 1px solid #eee;
    }
    
    .mobile-cta {
        width: 100%;
        margin-top: 20px;
    }
    
    @keyframes slideDown {
        from { transform: translateY(-20px); opacity: 0; }
        to { transform: translateY(0); opacity: 1; }
    }
    
    .navbar.scrolled {
        padding: 0.5rem 0;
        box-shadow: 0 4px 6px rgba(0,0,0,0.1);
    }
    
    .mobile-menu-toggle.active span:nth-child(1) {
        transform: rotate(45deg) translate(5px, 5px);
    }
    
    .mobile-menu-toggle.active span:nth-child(2) {
        opacity: 0;
    }
    
    .mobile-menu-toggle.active span:nth-child(3) {
        transform: rotate(-45deg) translate(7px, -6px);
    }
`;
document.head.appendChild(style);

// Initialize animations on page load
window.addEventListener('load', function() {
    // Trigger initial query animation
    if (queries.length > 0) {
        queries[0].classList.add('active');
    }
    
    // Add loaded class to body for initial animations
    document.body.classList.add('loaded');
    
    // Animate hero section elements
    const heroElements = document.querySelectorAll('.pre-headline, .main-headline, .sub-headline, .hero-cta');
    heroElements.forEach((el, index) => {
        setTimeout(() => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(20px)';
            el.style.animation = 'fadeIn 0.6s ease forwards';
            el.style.animationDelay = `${index * 0.1}s`;
        }, 100);
    });
});

// Handle Use Case Card Interactions (for touch devices)
document.querySelectorAll('.use-case-card').forEach(card => {
    card.addEventListener('touchstart', function() {
        this.classList.add('touch-hover');
    });
    
    card.addEventListener('touchend', function() {
        setTimeout(() => {
            this.classList.remove('touch-hover');
        }, 3000);
    });
});

// Add touch-hover styles
const touchStyle = document.createElement('style');
touchStyle.textContent = `
    .use-case-card.touch-hover .card-front {
        transform: rotateY(-180deg);
    }
    
    .use-case-card.touch-hover .card-back {
        transform: rotateY(0);
    }
`;
document.head.appendChild(touchStyle);

// Console Easter Egg
console.log('%c🦷 Welcome to DentalAI!', 'font-size: 24px; font-weight: bold; color: #0066ff;');
console.log('%cWe\'re building the future of dental business intelligence.', 'font-size: 16px; color: #00d4ff;');
console.log('%cInterested in joining our team? Email us at careers@dentalai.com', 'font-size: 14px; color: #666;'); 