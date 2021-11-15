let windowHeight = window.innerHeight;
let windowWidth = window.innerWidth;

document.addEventListener("DOMContentLoaded", function(){
    const cards = document.querySelectorAll('.cardItem');
    const button1 = document.querySelectorAll('button')[0];
    const button2 = document.querySelectorAll('button')[1];

    button1.addEventListener('click', function(event) {
        cardRandom();
    });

    button2.addEventListener('click', function(event) {
        cardSetting();
    });

    window.addEventListener('resize', function() {
        resize();
    });

    function resize() {
        windowHeight = window.innerHeight;
        windowWidth = window.innerWidth;
        cardSetting();
    }

    function cardSetting() {
        cards.forEach((card, i) => {
            TweenMax.to(card, 1, {
                top: windowHeight / 2 - i * 40,
                left: windowWidth / 2 + i * 40 - 200,
                rotation: 0,
                ease: Power3.easeInOut,
                delay: i * 0.2,
            });
        });
    }

    function cardRandom() {
        cards.forEach((card, i) => {
            TweenMax.to(card, 1, {
                top: Math.random() * windowHeight,
                left: Math.random() * windowWidth,
                rotation: Math.random() * 180,
                ease: Power4.easeInOut,
                delay: i * 0.1
            })
        })
    }
});