document.addEventListener('DOMContentLoaded', function() {
    const burgerIcon = document.getElementById('burger-icon');
    const navMenu = document.querySelector('header nav ul');
    const navLinks = document.querySelectorAll('header nav ul li a');
    
    burgerIcon.addEventListener('click', function(e) {
        e.stopPropagation(); 
        navMenu.classList.toggle('active');
        burgerIcon.classList.toggle('active');
        
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
    
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            if (window.innerWidth <= 768) { 
                navMenu.classList.remove('active');
                burgerIcon.classList.remove('active');
                
                const navItems = document.querySelectorAll('header nav ul li');
                navItems.forEach((item, index) => {
                    item.style.opacity = '0';
                    item.style.transform = 'translateX(20px)';
                    item.style.transition = `opacity 0.3s ease ${index * 0.1}s, transform 0.3s ease ${index * 0.1}s`;
                });
            }
        });
    });
    
    document.addEventListener('click', function(event) {
        if (!event.target.closest('#navbar') && navMenu.classList.contains('active')) {
            navMenu.classList.remove('active');
            burgerIcon.classList.remove('active');
            
            const navItems = document.querySelectorAll('header nav ul li');
            navItems.forEach((item, index) => {
                item.style.opacity = '0';
                item.style.transform = 'translateX(20px)';
                item.style.transition = `opacity 0.3s ease ${index * 0.1}s, transform 0.3s ease ${index * 0.1}s`;
            });
        }
    });
    
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