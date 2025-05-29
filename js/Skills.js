// Languages and Tools
document.addEventListener('DOMContentLoaded', function() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            const filterValue = this.getAttribute('data-filter');
            filterSkills(filterValue);
        });
    });
    
    function filterSkills(filter) {
        const skillsItems = document.querySelectorAll('.skills-item');
        
        skillsItems.forEach(item => {
            const categories = item.getAttribute('data-category').split(' ');
            
            if (filter === 'all' || categories.includes(filter)) {
                item.classList.remove('hidden');
            } else {
                item.classList.add('hidden');
            }
        });
    }
});

// certificates
document.addEventListener('DOMContentLoaded', function() {
    let certificates = [
        "/assets/images/certifications/sololearn-sql-intro.jpg",
        "/assets/images/certifications/hackerrank-sql-basic.png",
        "/assets/images/certifications/sololearn-intro-java.jpg",
        "/assets/images/certifications/hackerrank-java-basic.png",
        "/assets/images/certifications/hackerrank-javascript-basic.png"
    ];

    let currentIndex = 0;

    function updateCertificates() {
        $(".certificate-slider > div").each(function(index) {
            let certIndex = (currentIndex + index) % certificates.length;
            $(this).css("background-image", `url(${certificates[certIndex]})`);
        });
    }

    $("#cert-right").click(function() {
        currentIndex = (currentIndex + 1) % certificates.length;
        updateCertificates();
    });

    $("#cert-left").click(function() {
        currentIndex = (currentIndex - 1 + certificates.length) % certificates.length;
        updateCertificates();
    });

    updateCertificates();
});