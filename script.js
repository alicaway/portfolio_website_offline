// Smooth scrolling for navigation links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add scroll to top button functionality
window.addEventListener('scroll', function() {
    const scrollToTopButton = document.getElementById('scrollToTop');
    
    if (window.pageYOffset > 300) {
        if (scrollToTopButton) {
            scrollToTopButton.style.display = 'block';
        }
    } else {
        if (scrollToTopButton) {
            scrollToTopButton.style.display = 'none';
        }
    }
});

// Add active link highlighting
window.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('nav a');
    
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (pageYOffset >= (sectionTop - 50)) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').substring(1) === current) {
            link.classList.add('active');
        }
    });
});

// Add animation for skill items when they come into view
document.addEventListener('DOMContentLoaded', function() {
    const skillItems = document.querySelectorAll('.skill-category li');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = 1;
                entry.target.style.transform = 'translateX(0)';
            }
        });
    }, { threshold: 0.1 });
    
    skillItems.forEach(item => {
        item.style.opacity = 0;
        item.style.transform = 'translateX(-20px)';
        item.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        observer.observe(item);
    });
});

// Add basic form validation for contact section
document.addEventListener('DOMContentLoaded', function() {
    const contactSection = document.getElementById('contact');
    
    if (contactSection) {
        // This would be useful if you had a contact form
        console.log('Contact section loaded');
    }
});