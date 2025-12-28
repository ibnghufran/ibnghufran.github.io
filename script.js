// Particle Background Animation
class ParticleBackground {
    constructor() {
        this.canvas = document.getElementById('particleCanvas');
        this.ctx = this.canvas.getContext('2d');
        this.particles = [];
        this.mouseX = 0;
        this.mouseY = 0;
        this.init();
        this.animate();
    }

    init() {
        this.resize();
        this.createParticles();
        this.addEventListeners();
    }

    resize() {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
    }

    createParticles() {
        const numberOfParticles = Math.floor((this.canvas.width * this.canvas.height) / 15000);
        this.particles = [];

        for (let i = 0; i < numberOfParticles; i++) {
            this.particles.push({
                x: Math.random() * this.canvas.width,
                y: Math.random() * this.canvas.height,
                vx: (Math.random() - 0.5) * 0.5,
                vy: (Math.random() - 0.5) * 0.5,
                radius: Math.random() * 2 + 1,
                originalX: 0,
                originalY: 0
            });

            this.particles[i].originalX = this.particles[i].x;
            this.particles[i].originalY = this.particles[i].y;
        }
    }

    addEventListeners() {
        window.addEventListener('resize', () => this.resize());
        window.addEventListener('mousemove', (e) => {
            this.mouseX = e.clientX;
            this.mouseY = e.clientY;
        });

        window.addEventListener('touchmove', (e) => {
            if (e.touches.length > 0) {
                this.mouseX = e.touches[0].clientX;
                this.mouseY = e.touches[0].clientY;
            }
        });
    }

    animate() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        this.particles.forEach((particle, index) => {
            // Mouse interaction - repel effect
            const dx = this.mouseX - particle.x;
            const dy = this.mouseY - particle.y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            const maxDistance = 150;

            if (distance < maxDistance) {
                const force = (maxDistance - distance) / maxDistance;
                const angle = Math.atan2(dy, dx);
                const pushX = Math.cos(angle) * force * 50;
                const pushY = Math.sin(angle) * force * 50;

                particle.x -= pushX;
                particle.y -= pushY;
            } else {
                // Return to original position
                particle.x += (particle.originalX - particle.x) * 0.05;
                particle.y += (particle.originalY - particle.y) * 0.05;
            }

            // Update position
            particle.x += particle.vx;
            particle.y += particle.vy;

            // Bounce off walls
            if (particle.x < 0 || particle.x > this.canvas.width) {
                particle.vx *= -1;
            }
            if (particle.y < 0 || particle.y > this.canvas.height) {
                particle.vy *= -1;
            }

            // Draw particle with gradient effect
            this.ctx.beginPath();
            this.ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
            const gradient = this.ctx.createRadialGradient(particle.x, particle.y, 0, particle.x, particle.y, particle.radius);
            gradient.addColorStop(0, 'rgba(138, 43, 226, 0.8)');
            gradient.addColorStop(1, 'rgba(0, 191, 255, 0.4)');
            this.ctx.fillStyle = gradient;
            this.ctx.fill();

            // Draw connections with gradient
            for (let j = index + 1; j < this.particles.length; j++) {
                const otherParticle = this.particles[j];
                const dx = particle.x - otherParticle.x;
                const dy = particle.y - otherParticle.y;
                const distance = Math.sqrt(dx * dx + dy * dy);

                if (distance < 120) {
                    this.ctx.beginPath();
                    this.ctx.moveTo(particle.x, particle.y);
                    this.ctx.lineTo(otherParticle.x, otherParticle.y);
                    const opacity = 0.25 * (1 - distance / 120);
                    this.ctx.strokeStyle = `rgba(138, 43, 226, ${opacity})`;
                    this.ctx.lineWidth = 0.5;
                    this.ctx.stroke();
                }
            }
        });

        requestAnimationFrame(() => this.animate());
    }
}

// Navigation Menu Toggle
function initNavigation() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Close menu when clicking on a link
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });

    // Add scroll effect to navbar
    window.addEventListener('scroll', () => {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 100) {
            navbar.style.background = 'rgba(255, 255, 255, 0.98)';
            navbar.style.boxShadow = '0 2px 20px rgba(0, 191, 255, 0.1)';
        } else {
            navbar.style.background = 'rgba(255, 255, 255, 0.95)';
            navbar.style.boxShadow = 'none';
        }
    });
}

// Smooth Scroll Function
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        const offsetTop = section.offsetTop - 80;
        window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
        });
    }
}

// Back to Top Button
function initBackToTop() {
    const backToTopButton = document.getElementById('backToTop');

    // Show/hide button based on scroll position
    window.addEventListener('scroll', () => {
        if (window.scrollY > 500) {
            backToTopButton.classList.add('show');
        } else {
            backToTopButton.classList.remove('show');
        }
    });

    // Scroll to top when clicked
    backToTopButton.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// Contact Form Functionality
function initContactForm() {
    const contactForm = document.getElementById('contactForm');
    const formButtons = document.querySelector('.form-buttons');
    const submitButton = contactForm.querySelector('button[type="submit"]');

    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Get form data
        const formData = {
            fullName: document.getElementById('fullName').value,
            mobileNumber: document.getElementById('mobileNumber').value,
            email: document.getElementById('email').value,
            projectType: document.getElementById('projectType').value,
            budget: document.getElementById('budget').value,
            timeline: document.getElementById('timeline').value,
            message: document.getElementById('message').value
        };

        // Validate form
        if (!validateForm(formData)) {
            return;
        }

        // Store form data for submission
        window.contactFormData = formData;

        // Show submission buttons
        formButtons.style.display = 'flex';
        submitButton.style.display = 'none';
    });
}

function validateForm(data) {
    // Check if all fields are filled
    for (const [key, value] of Object.entries(data)) {
        if (!value || value.trim() === '' || value === 'Select Project Type') {
            const fieldName = key.replace(/([A-Z])/g, ' $1').toLowerCase();
            alert(`Please fill in the ${fieldName} field.`);
            return false;
        }
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
        alert('Please enter a valid email address.');
        return false;
    }

    // Validate mobile number (basic validation)
    const mobileRegex = /^[\d\s\-\+\(\)]+$/;
    if (!mobileRegex.test(data.mobileNumber)) {
        alert('Please enter a valid mobile number.');
        return false;
    }

    return true;
}

function submitViaWhatsApp() {
    const data = window.contactFormData;
    if (!data) return;

    const message = `Hello AbdurRahman Ibn Ghufran! I'm interested in your educational video editing services.

📝 *Contact Details:*
• *Name:* ${data.fullName}
• *Mobile:* ${data.mobileNumber}
• *Email:* ${data.email}

🎓 *Educational Project Details:*
• *Project Type:* ${data.projectType}
• *Budget:* ${data.budget}
• *Timeline:* ${data.timeline}

📄 *Project Description:*
${data.message}

I'm excited to transform my educational content with your expertise!
Ready to inspire millions of learners 🎓✨`;

    const whatsappUrl = `https://wa.me/918825164657?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
}

function submitViaEmail() {
    const data = window.contactFormData;
    if (!data) return;

    const subject = `Educational Video Editing Inquiry - ${data.fullName}`;
    const body = `Hello AbdurRahman Ibn Ghufran Educational Video Team,

I'm interested in your specialized educational video editing services. Here are my project details:

CONTACT INFORMATION:
==================
Name: ${data.fullName}
Mobile: ${data.mobileNumber}
Email: ${data.email}

EDUCATIONAL PROJECT DETAILS:
===========================
Project Type: ${data.projectType}
Budget Range: ${data.budget}
Expected Timeline: ${data.timeline}

PROJECT DESCRIPTION:
==================
${data.message}

I'm passionate about creating impactful educational content that reaches and inspires learners. I believe your expertise in educational video editing would be perfect for this project.

Looking forward to discussing how we can work together to make learning more engaging and effective!

Best regards,
${data.fullName}`;

    const mailtoUrl = `mailto:ibnghufran.com@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoUrl;
}

// Intersection Observer for animations
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe elements
    document.querySelectorAll('.service-card, .feature, .testimonial, .video-item, .short-item').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
}

// Add active state to navigation based on scroll
function initActiveNavigation() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');

    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            const sectionHeight = section.clientHeight;
            if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').slice(1) === current) {
                link.classList.add('active');
            }
        });
    });
}

// Parallax effect for hero section
function initParallax() {
    const hero = document.querySelector('.hero');
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        if (hero) {
            hero.style.transform = `translateY(${scrolled * 0}px)`;
        }
    });
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Initialize all components
    new ParticleBackground();
    initNavigation();
    initBackToTop();
    initContactForm();
    initScrollAnimations();
    initActiveNavigation();
    initParallax();

    // Add loading animation
    document.body.classList.add('fade-in');

    // Handle external links
    document.querySelectorAll('a[target="_blank"]').forEach(link => {
        link.addEventListener('click', (e) => {
            // Allow external links to open normally
            return true;
        });
    });
});

// Add smooth reveal animation for sections
const revealOnScroll = () => {
    const reveals = document.querySelectorAll('.section');
    
    reveals.forEach(element => {
        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < windowHeight - elementVisible) {
            element.classList.add('active');
        }
    });
};

window.addEventListener('scroll', revealOnScroll);

// Add hover effect for cards
document.querySelectorAll('.service-card, .feature, .testimonial').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-10px) scale(1.02)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
});

// Form field focus animations
document.querySelectorAll('.form-group input, .form-group textarea').forEach(field => {
    field.addEventListener('focus', function() {
        this.parentElement.classList.add('focused');
    });
    
    field.addEventListener('blur', function() {
        if (this.value === '') {
            this.parentElement.classList.remove('focused');
        }
    });
});

// Add CSS for form focus states
const focusStyles = document.createElement('style');
focusStyles.textContent = `
    .form-group.focused input,
    .form-group.focused textarea {
        background: white;
        transform: translateY(-2px);
    }
    
    .nav-link.active {
        color: #00BFFF;
        font-weight: 600;
    }
    
    .section.active {
        opacity: 1;
        transform: translateY(0);
    }
`;
document.head.appendChild(focusStyles);