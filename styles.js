// Smooth Scrolling
document.querySelectorAll("nav ul li a").forEach(link => {
    link.addEventListener("click", event => {
        event.preventDefault();
        const targetId = event.target.getAttribute("href").substring(1);
        document.getElementById(targetId).scrollIntoView({ behavior: "smooth" });
    });
});

// Add smooth scroll for home link
document.querySelector('.home-link').addEventListener('click', function(event) {
    event.preventDefault();
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('.section');

    const revealSection = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.remove('hidden');
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    };

    const sectionObserver = new IntersectionObserver(revealSection, {
        root: null,
        threshold: 0.15,
    });

    sections.forEach(section => {
        sectionObserver.observe(section);
    });

    // Certification preview functionality
    const preview = document.querySelector('.cert-preview');
    const certLinks = document.querySelectorAll('.cert-link');

    certLinks.forEach(link => {
        link.addEventListener('mousemove', (e) => {
            const imageUrl = link.getAttribute('data-image');
            preview.style.backgroundImage = `url(${imageUrl})`;
            preview.style.left = e.pageX + 20 + 'px';
            preview.style.top = e.pageY + 20 + 'px';
            preview.classList.add('visible');
        });

        link.addEventListener('mouseleave', () => {
            preview.classList.remove('visible');
        });
    });
});

