const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('.navbar');
const navLinks = document.querySelectorAll('.navbar a');

// Mobile menu toggle
menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

// Highlight active nav link on click
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        // remove active from all
        navLinks.forEach(l => l.classList.remove('active'));

        // add active to the clicked one
        link.classList.add('active');
    });
});

var typed = new Typed('.multiple-text', {
    strings: [ 'Gamer', 'Little Web Designer', 'IS Student', 'Gamer'],
    typeSpeed: 80,
    backSpeed: 80,
    backDelay: 1200,
    startDelay: 300,
    loop: true,
    smartBackspace: true
});
// Auto-highlight navbar based on current page
const currentPage = window.location.pathname.split("/").pop();

// Highlight navbar based on scroll position
let sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {
    let scrollPos = window.scrollY + 150;

    sections.forEach(sec => {
        if (scrollPos >= sec.offsetTop && scrollPos < sec.offsetTop + sec.offsetHeight) {
            let id = sec.getAttribute("id");

            navLinks.forEach(link => {
                link.classList.remove("active");

                if (link.getAttribute("href") === "#" + id) {
                    link.classList.add("active");
                }
            });
        }
    });
});
// Initialize particles.js for glimmering background
particlesJS("particles-js", {
  "particles": {
    "number": { 
      "value": 200,  // More particles for fuller effect
      "density": { 
        "enable": true, 
        "value_area": 800 
      } 
    },
    "color": { 
      "value": ["#00ff51", "#00ff88", "#00ffaa", "#ffffff", "#88ffaa"]  // Multiple green/white shades
    },
    "shape": { 
      "type": "circle"
    },
    "opacity": { 
      "value": 0.8,  // More visible
      "random": true, 
      "anim": { 
        "enable": true, 
        "speed": 3,  // Faster twinkling
        "opacity_min": 0.1,
        "sync": false 
      } 
    },
    "size": { 
      "value": 4,  // Larger particles
      "random": true, 
      "anim": { 
        "enable": true, 
        "speed": 4,  // Faster size animation
        "size_min": 0.3,
        "sync": false 
      } 
    },
    "line_linked": { 
      "enable": true,  // Enable connecting lines
      "distance": 150,
      "color": "#00ff51",
      "opacity": 0.2,  // Subtle lines
      "width": 1
    },
    "move": { 
      "enable": true, 
      "speed": 1.5,  // Slightly faster movement
      "direction": "none", 
      "random": true, 
      "straight": false, 
      "out_mode": "out",
      "bounce": false,
      "attract": {
        "enable": true,  // Particles attract to cursor
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
        "mode": "grab"  // Creates glowing connections on hover
      },
      "onclick": { 
        "enable": true, 
        "mode": "push"  // Adds burst of particles on click
      },
      "resize": true
    },
    "modes": { 
      "grab": { 
        "distance": 200,  // Larger grab radius
        "line_linked": { 
          "opacity": 0.8  // Brighter lines on hover
        } 
      }, 
      "push": { 
        "particles_nb": 6  // More particles per click
      },
      "bubble": {
        "distance": 250,
        "size": 6,
        "duration": 2,
        "opacity": 0.8
      },
      "repulse": {
        "distance": 100,
        "duration": 0.4
      }
    }
  },
  "retina_detect": true
});