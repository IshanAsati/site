// Page Content Configuration
// Edit this file to easily update the website content

const siteContent = {
    // Navigation
    navigation: {
        brand: "Tech Portfolio",
        links: [
            { text: "About", href: "#about" },
            { text: "Projects", href: "#projects" },
            { text: "Contact", href: "#contact" }
        ]
    },

    // Hero Section
    hero: {
        title: "Hi, I'm a Tech Enthusiast",
        subtitle: "Exploring Cybersecurity & Artificial Intelligence",
        buttonText: "View My Work",
        buttonLink: "#projects"
    },

    // About Section
    about: {
        title: "About Me",
        paragraphs: [
            "I'm a teenage tech enthusiast passionate about making the digital world safer and smarter. My journey in technology began with a curiosity about how things work, which led me to explore the fascinating worlds of cybersecurity and artificial intelligence.",
            "When I'm not coding or learning about security vulnerabilities, you can find me experimenting with machine learning models, participating in CTF challenges, or sharing my knowledge with the tech community."
        ],
        skillsTitle: "Areas of Interest",
        skills: [
            "Cybersecurity & Ethical Hacking",
            "Machine Learning & AI",
            "Web Development",
            "Network Security"
        ]
    },

    // Projects Section
    projects: {
        title: "My Projects",
        items: [
            {
                category: "Cybersecurity",
                title: "Network Scanner Tool",
                description: "A Python-based network scanning tool that helps identify open ports and potential vulnerabilities in local networks. Features include service detection and basic vulnerability assessment.",
                tags: ["Python", "Networking", "Security"]
            },
            {
                category: "Cybersecurity",
                title: "Password Strength Analyzer",
                description: "An educational tool that analyzes password strength using multiple criteria including entropy calculation, common pattern detection, and breach database checking.",
                tags: ["JavaScript", "Security", "Web"]
            },
            {
                category: "Artificial Intelligence",
                title: "Sentiment Analysis Bot",
                description: "A machine learning model that analyzes text sentiment using Natural Language Processing. Trained on social media data to understand context and emotional tone.",
                tags: ["Python", "NLP", "TensorFlow"]
            },
            {
                category: "Artificial Intelligence",
                title: "Smart Image Classifier",
                description: "A convolutional neural network that classifies images into various categories. Built with transfer learning techniques for improved accuracy with limited training data.",
                tags: ["Python", "CNN", "PyTorch"]
            }
        ]
    },

    // Contact Section
    contact: {
        title: "Get In Touch",
        intro: "Have a question or want to collaborate? Feel free to reach out!",
        form: {
            nameLabel: "Name",
            emailLabel: "Email",
            messageLabel: "Message",
            submitButton: "Send Message"
        },
        messages: {
            success: "Thank you for your message! I'll get back to you soon.",
            error: "Please fill in all fields.",
            invalidEmail: "Please enter a valid email address."
        }
    },

    // Footer
    footer: {
        text: "© 2024 Tech Portfolio. Built with passion for technology."
    }
};
