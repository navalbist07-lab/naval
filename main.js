// Main JavaScript for Gaming Universe

// Custom Gaming Crosshair Cursor
const gamingCursor = document.querySelector('.gaming-cursor');
let cursorPosX = 0;
let cursorPosY = 0;
let mouseX = 0;
let mouseY = 0;
let animationId;

// Smooth cursor movement with GSAP
function updateCursorPosition() {
    // Add slight delay for smooth movement
    cursorPosX += (mouseX - cursorPosX) / 5;
    cursorPosY += (mouseY - cursorPosY) / 5;
    
    // Apply position to cursor
    gamingCursor.style.left = cursorPosX + 'px';
    gamingCursor.style.top = cursorPosY + 'px';
    
    // Continue animation loop
    animationId = requestAnimationFrame(updateCursorPosition);
}

// Track mouse movement
document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    
    // Start animation if not already running
    if (!animationId) {
        animationId = requestAnimationFrame(updateCursorPosition);
    }
});

// Cursor hover effects
const interactiveElements = document.querySelectorAll('a, button, .game-card, .feature-card, .stat-card, .social-icon, .glow-button');

interactiveElements.forEach(element => {
    element.addEventListener('mouseenter', () => {
        gamingCursor.classList.add('locked');
        
        // Play subtle sound effect (muted by default)
        // Uncomment the following lines if you want to add sound
        /*
        const audio = new Audio('sounds/lock-on.mp3');
        audio.volume = 0.2;
        audio.play().catch(e => console.log("Audio play prevented by browser policy"));
        */
    });
    
    element.addEventListener('mouseleave', () => {
        gamingCursor.classList.remove('locked');
    });
});

// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    hamburger.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        hamburger.classList.remove('active');
    });
});

// Particle.js Configuration
document.addEventListener('DOMContentLoaded', function() {
    if (typeof particlesJS !== 'undefined') {
        particlesJS('particles-js', {
            "particles": {
                "number": {
                    "value": 80,
                    "density": {
                        "enable": true,
                        "value_area": 800
                    }
                },
                "color": {
                    "value": "#00f3ff"
                },
                "shape": {
                    "type": "circle",
                    "stroke": {
                        "width": 0,
                        "color": "#000000"
                    }
                },
                "opacity": {
                    "value": 0.5,
                    "random": true,
                    "anim": {
                        "enable": true,
                        "speed": 1,
                        "opacity_min": 0.1,
                        "sync": false
                    }
                },
                "size": {
                    "value": 3,
                    "random": true,
                    "anim": {
                        "enable": true,
                        "speed": 2,
                        "size_min": 0.1,
                        "sync": false
                    }
                },
                "line_linked": {
                    "enable": true,
                    "distance": 150,
                    "color": "#bd00ff",
                    "opacity": 0.4,
                    "width": 1
                },
                "move": {
                    "enable": true,
                    "speed": 1,
                    "direction": "none",
                    "random": true,
                    "straight": false,
                    "out_mode": "out",
                    "bounce": false,
                    "attract": {
                        "enable": false,
                        "rotateX": 600,
                        "rotateY": 1200
                    }
                }
            },
            "interactivity": {
                "detect_on": "canvas",
                "events": {
                    "onhover": {
                        "enable": true,
                        "mode": "grab"
                    },
                    "onclick": {
                        "enable": true,
                        "mode": "push"
                    },
                    "resize": true
                },
                "modes": {
                    "grab": {
                        "distance": 140,
                        "line_linked": {
                            "opacity": 1
                        }
                    },
                    "push": {
                        "particles_nb": 4
                    }
                }
            },
            "retina_detect": true
        });
    }
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            window.scrollTo({
                top: target.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

// Position social media icons in a circle and make them revolve
document.addEventListener('DOMContentLoaded', function() {
    const socialIconsContainer = document.querySelector('.revolving-icons');
    const socialIcons = document.querySelectorAll('.social-icon');
    
    if (socialIconsContainer && socialIcons.length > 0) {
        // Set container size
        const containerSize = 350; // Increased from 280 to 350
        socialIconsContainer.style.width = containerSize + 'px';
        socialIconsContainer.style.height = containerSize + 'px';
        
        // Position icons in a circle with larger radius
        const radius = containerSize / 2 - 20; // Larger radius
        const centerX = containerSize / 2;
        const centerY = containerSize / 2;
        
        socialIcons.forEach((icon, index) => {
            const angle = (index / socialIcons.length) * 2 * Math.PI;
            const x = centerX + radius * Math.cos(angle);
            const y = centerY + radius * Math.sin(angle);
            
            icon.style.position = 'absolute';
            icon.style.left = x + 'px';
            icon.style.top = y + 'px';
            icon.style.transform = 'translate(-50%, -50%)';
        });
        
        // Add revolving animation using CSS animation
        socialIconsContainer.style.animation = 'rotate 20s linear infinite';
    }
});