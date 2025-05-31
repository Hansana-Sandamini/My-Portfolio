document.addEventListener('DOMContentLoaded', function() {

    const lolwImages = [
        "/assets/images/lolw/lolw-home.png",
        "/assets/images/lolw/lolw-mammals.png",
        "/assets/images/lolw/lolw-reptiles.png",
        "/assets/images/lolw/lolw-invertraberts.png",
        "/assets/images/lolw/lolw-mammal-content.png",
        "/assets/images/lolw/lolw-fish-content.png"
    ];

    const hotelImages = [
        "/assets/images/hotel/hotel-home.png",
        "/assets/images/hotel/hotel-about.png",
        "/assets/images/hotel/hotel-rooms.png",
        "/assets/images/hotel/hotel-dining.png",
        "/assets/images/hotel/hotel-services.png",
        "/assets/images/hotel/hotel-contact.png"
    ];

    let lolwIndex = 0;
    let hotelIndex = 0;

    updateSlider('lolw', lolwImages, lolwIndex);
    updateSlider('hotel', hotelImages, hotelIndex);

    $(".lolw-wrapper .cert-nav-btn").click(function() {
        const isRight = $(this).attr('id').includes('right');
        
        if (isRight) {
            lolwIndex = (lolwIndex + 1) % lolwImages.length;
        } else {
            lolwIndex = (lolwIndex - 1 + lolwImages.length) % lolwImages.length;
        }
        
        updateSlider('lolw', lolwImages, lolwIndex);
    });

    $(".hotel-wrapper .cert-nav-btn").click(function() {
        const isRight = $(this).attr('id').includes('right');
        
        if (isRight) {
            hotelIndex = (hotelIndex + 1) % hotelImages.length;
        } else {
            hotelIndex = (hotelIndex - 1 + hotelImages.length) % hotelImages.length;
        }
        
        updateSlider('hotel', hotelImages, hotelIndex);
    });

    function updateSlider(sliderType, images, index) {
        $(`.${sliderType}-slider > div`).css("background-image", `url(${images[index]})`);
    }
});