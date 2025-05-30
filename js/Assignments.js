document.addEventListener('DOMContentLoaded', function() {

    const ticTacToeImages = [
        "/assets/images/tic-tac-toe/tic-tac-toe-home.png",
        "/assets/images/tic-tac-toe/tic-tac-toe-x-win.png",
        "/assets/images/tic-tac-toe/tic-tac-toe-ai-win.png",
        "/assets/images/tic-tac-toe/tic-tac-toe-tie.png"
    ];

    const posImages = [
        "/assets/images/pos/pos-home.png",
        "/assets/images/pos/pos-customer.png",
        "/assets/images/pos/pos-item.png",
        "/assets/images/pos/pos-orders.png"
    ];

    let ticTacToeIndex = 0;
    let posIndex = 0;

    updateSlider('tic-tac-toe', ticTacToeImages, ticTacToeIndex);
    updateSlider('pos', posImages, posIndex);

    $(".tic-tac-toe-wrapper .cert-nav-btn").click(function() {
        const isRight = $(this).attr('id').includes('right');
        
        if (isRight) {
            ticTacToeIndex = (ticTacToeIndex + 1) % ticTacToeImages.length;
        } else {
            ticTacToeIndex = (ticTacToeIndex - 1 + ticTacToeImages.length) % ticTacToeImages.length;
        }
        
        updateSlider('tic-tac-toe', ticTacToeImages, ticTacToeIndex);
    });

    $(".pos-wrapper .cert-nav-btn").click(function() {
        const isRight = $(this).attr('id').includes('right');
        
        if (isRight) {
            posIndex = (posIndex + 1) % posImages.length;
        } else {
            posIndex = (posIndex - 1 + posImages.length) % posImages.length;
        }
        
        updateSlider('pos', posImages, posIndex);
    });

    function updateSlider(sliderType, images, index) {
        $(`.${sliderType}-slider > div`).css("background-image", `url(${images[index]})`);
    }
});