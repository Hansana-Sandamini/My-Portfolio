// Burger menu functionality
document.addEventListener('DOMContentLoaded', function() {
    const burgerIcon = document.getElementById('burger-icon');
    const navMenu = document.querySelector('header nav ul');
    const navLinks = document.querySelectorAll('header nav ul li a');
    
    // Toggle menu when burger icon is clicked
    burgerIcon.addEventListener('click', function(e) {
        e.stopPropagation(); // Prevent the click from bubbling up
        navMenu.classList.toggle('active');
        burgerIcon.classList.toggle('active');
        
        // Toggle the visibility of nav items with animation
        const navItems = document.querySelectorAll('header nav ul li');
        navItems.forEach((item, index) => {
            if (navMenu.classList.contains('active')) {
                item.style.opacity = '1';
                item.style.transform = 'translateX(0)';
                item.style.transition = `opacity 0.3s ease ${index * 0.1}s, transform 0.3s ease ${index * 0.1}s`;
            } else {
                item.style.opacity = '0';
                item.style.transform = 'translateX(20px)';
            }
        });
    });
    
    // Close menu when a nav link is clicked (for mobile)
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            if (window.innerWidth <= 768) { // Only for mobile view
                navMenu.classList.remove('active');
                burgerIcon.classList.remove('active');
                
                // Hide nav items with animation
                const navItems = document.querySelectorAll('header nav ul li');
                navItems.forEach((item, index) => {
                    item.style.opacity = '0';
                    item.style.transform = 'translateX(20px)';
                    item.style.transition = `opacity 0.3s ease ${index * 0.1}s, transform 0.3s ease ${index * 0.1}s`;
                });
            }
        });
    });
    
    // Close menu when clicking outside of it
    document.addEventListener('click', function(event) {
        if (!event.target.closest('#navbar') && navMenu.classList.contains('active')) {
            navMenu.classList.remove('active');
            burgerIcon.classList.remove('active');
            
            // Hide nav items with animation
            const navItems = document.querySelectorAll('header nav ul li');
            navItems.forEach((item, index) => {
                item.style.opacity = '0';
                item.style.transform = 'translateX(20px)';
                item.style.transition = `opacity 0.3s ease ${index * 0.1}s, transform 0.3s ease ${index * 0.1}s`;
            });
        }
    });
    
    // Smooth scrolling for all links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80, 
                    behavior: 'smooth'
                });
            }
        });
    });
});