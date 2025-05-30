document.addEventListener('DOMContentLoaded', function() {

    const crmsImages = [
        "/assets/images/crms/crms-login-form.jpeg",
        "/assets/images/crms/crms-admin-dashboard.png",
        "/assets/images/crms/crms-cashier-home.jpeg",
        "/assets/images/crms/crms-customer-form.png",
        "/assets/images/crms/crms-car-form.png",
        "/assets/images/crms/crms-driver-form.jpeg",
        "/assets/images/crms/crms-reservation-form.jpeg",
        "/assets/images/crms/crms-payment-form.jpeg",
        "/assets/images/crms/crms-credits-form.png",
        "/assets/images/crms/crms-report-form.png"
    ];

    const smsImages = [
        "/assets/images/sms/sms-home.png",
        "/assets/images/sms/sms-supplier-manage.png",
        "/assets/images/sms/sms-view-suppliers.png",
        "/assets/images/sms/sms-item-category.png",
        "/assets/images/sms/sms-ranked-unit-price.png",
        "/assets/images/sms/sms-search-suppliers.png",
        "/assets/images/sms/sms-stock-management.png"
    ];

    let crmsIndex = 0;
    let smsIndex = 0;

    updateSlider('crms', crmsImages, crmsIndex);
    updateSlider('sms', smsImages, smsIndex);

    $(".crms-wrapper .cert-nav-btn").click(function() {
        const isRight = $(this).attr('id').includes('right');
        
        if (isRight) {
            crmsIndex = (crmsIndex + 1) % crmsImages.length;
        } else {
            crmsIndex = (crmsIndex - 1 + crmsImages.length) % crmsImages.length;
        }
        
        updateSlider('crms', crmsImages, crmsIndex);
    });

    $(".sms-wrapper .cert-nav-btn").click(function() {
        const isRight = $(this).attr('id').includes('right');
        
        if (isRight) {
            smsIndex = (smsIndex + 1) % smsImages.length;
        } else {
            smsIndex = (smsIndex - 1 + smsImages.length) % smsImages.length;
        }
        
        updateSlider('sms', smsImages, smsIndex);
    });

    function updateSlider(sliderType, images, index) {
        $(`.${sliderType}-slider > div`).css("background-image", `url(${images[index]})`);
    }
});