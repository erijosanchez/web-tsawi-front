// Header scroll effect
window.addEventListener('scroll', () => {
    const header = document.getElementById('header');
    if (window.scrollY > 100) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

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

// Newsletter form
document.querySelector('.newsletter-form').addEventListener('submit', function (e) {
    e.preventDefault();
    const email = this.querySelector('.newsletter-input').value;
    if (email) {
        alert('¡Gracias por suscribirte! Te mantendremos informada sobre nuestras novedades.');
        this.reset();
    }
});

// Product buttons
document.querySelectorAll('.product-btn').forEach(btn => {
    btn.addEventListener('click', function () {
        alert('¡Próximamente! Estamos preparando nuestra tienda online para ti.');
    });
});

// Mobile menu toggle
document.querySelector('.mobile-menu-toggle').addEventListener('click', function () {
    const navMenu = document.querySelector('.nav-menu');
    navMenu.style.display = navMenu.style.display === 'flex' ? 'none' : 'flex';
});

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animationDelay = '0.3s';
            entry.target.style.animationPlayState = 'running';
        }
    });
}, observerOptions);

// Observe elements for animation
document.querySelectorAll('.slide-up').forEach(el => {
    observer.observe(el);
});

// <<<<<<<<<< SLIDER SECTION SCRIPTS >>>>>>>>>>>>>>>
// Testimonials slider functionality

let testimonialCurrentIndex = 0;
const testimonialTotalCards = 5;
const testimonialTrackElement = document.getElementById('testimonialsTrack');
const testimonialCards = document.querySelectorAll('.testimonial-card');
let testimonialAutoInterval;

function updateTestimonialSlider() {
    const testimonialCardWidth = 320;
    const testimonialGap = 30;
    const testimonialOffset = testimonialCurrentIndex * (testimonialCardWidth + testimonialGap);
    
    testimonialTrackElement.style.transform = `translateX(-${testimonialOffset}px)`;
    
    testimonialCards.forEach((card, index) => {
        card.classList.toggle('active', index === testimonialCurrentIndex);
    });
}

function nextTestimonialSlide() {
    testimonialCurrentIndex = (testimonialCurrentIndex + 1) % testimonialTotalCards;
    updateTestimonialSlider();
}

function startTestimonialAuto() {
    testimonialAutoInterval = setInterval(nextTestimonialSlide, 3000);
}

function stopTestimonialAuto() {
    clearInterval(testimonialAutoInterval);
}

// Inicializar slider cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', () => {
    updateTestimonialSlider();
    startTestimonialAuto();

    const testimonialSliderContainer = document.querySelector('.testimonials-slider');
    testimonialSliderContainer.addEventListener('mouseenter', stopTestimonialAuto);
    testimonialSliderContainer.addEventListener('mouseleave', startTestimonialAuto);
});
