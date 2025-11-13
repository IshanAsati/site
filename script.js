// Load and render content on page load
document.addEventListener('DOMContentLoaded', function() {
    loadContent();
    initializeAnimations();
});

// Function to load all content from content.js
function loadContent() {
    // Load Navigation
    document.querySelector('.nav-brand').textContent = siteContent.navigation.brand;
    const navMenu = document.querySelector('.nav-menu');
    siteContent.navigation.links.forEach(link => {
        const li = document.createElement('li');
        const a = document.createElement('a');
        a.href = link.href;
        a.textContent = link.text;
        li.appendChild(a);
        navMenu.appendChild(li);
    });

    // Load Hero Section
    document.querySelector('.hero-title').textContent = siteContent.hero.title;
    document.querySelector('.hero-subtitle').textContent = siteContent.hero.subtitle;
    const heroButton = document.querySelector('.hero .btn-primary');
    heroButton.textContent = siteContent.hero.buttonText;
    heroButton.href = siteContent.hero.buttonLink;

    // Load About Section
    const aboutSection = document.querySelector('#about');
    aboutSection.querySelector('.section-title').textContent = siteContent.about.title;
    
    const aboutParagraphs = aboutSection.querySelector('.about-paragraphs');
    siteContent.about.paragraphs.forEach(text => {
        const p = document.createElement('p');
        p.textContent = text;
        aboutParagraphs.appendChild(p);
    });
    
    aboutSection.querySelector('.skills h3').textContent = siteContent.about.skillsTitle;
    const skillsList = aboutSection.querySelector('.skills-list');
    siteContent.about.skills.forEach(skill => {
        const li = document.createElement('li');
        li.textContent = skill;
        skillsList.appendChild(li);
    });

    // Load Projects Section
    const projectsSection = document.querySelector('#projects');
    projectsSection.querySelector('.section-title').textContent = siteContent.projects.title;
    
    const projectsGrid = document.querySelector('.projects-grid');
    siteContent.projects.items.forEach(project => {
        const card = document.createElement('div');
        card.className = 'project-card';
        
        const category = document.createElement('div');
        category.className = 'project-category';
        category.textContent = project.category;
        
        const title = document.createElement('h3');
        title.className = 'project-title';
        title.textContent = project.title;
        
        const description = document.createElement('p');
        description.className = 'project-description';
        description.textContent = project.description;
        
        const tags = document.createElement('div');
        tags.className = 'project-tags';
        project.tags.forEach(tagText => {
            const tag = document.createElement('span');
            tag.className = 'tag';
            tag.textContent = tagText;
            tags.appendChild(tag);
        });
        
        card.appendChild(category);
        card.appendChild(title);
        card.appendChild(description);
        card.appendChild(tags);
        projectsGrid.appendChild(card);
    });

    // Load Contact Section
    const contactSection = document.querySelector('#contact');
    contactSection.querySelector('.section-title').textContent = siteContent.contact.title;
    contactSection.querySelector('.contact-intro').textContent = siteContent.contact.intro;
    
    const form = contactSection.querySelector('#contactForm');
    form.querySelector('label[for="name"]').textContent = siteContent.contact.form.nameLabel;
    form.querySelector('label[for="email"]').textContent = siteContent.contact.form.emailLabel;
    form.querySelector('label[for="message"]').textContent = siteContent.contact.form.messageLabel;
    form.querySelector('button[type="submit"]').textContent = siteContent.contact.form.submitButton;

    // Load Footer
    document.querySelector('.footer p').textContent = siteContent.footer.text;
}

// Initialize animations and interactions
function initializeAnimations() {
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Add animation on scroll for project cards
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe all project cards
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });
}

// Contact form handling
const contactForm = document.getElementById('contactForm');
const formMessage = document.getElementById('formMessage');

contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form values
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
    
    // Basic validation
    if (!name || !email || !message) {
        showMessage(siteContent.contact.messages.error, 'error');
        return;
    }
    
    // Email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        showMessage(siteContent.contact.messages.invalidEmail, 'error');
        return;
    }
    
    // Simulate form submission (in a real application, this would send to a server)
    showMessage(siteContent.contact.messages.success, 'success');
    
    // Reset form
    contactForm.reset();
});

function showMessage(text, type) {
    formMessage.textContent = text;
    formMessage.className = 'form-message ' + type;
    
    // Hide message after 5 seconds
    setTimeout(() => {
        formMessage.className = 'form-message';
    }, 5000);
}
