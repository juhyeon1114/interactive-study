let windowHeight = window.innerHeight;
let windowWidth = window.innerWidth;

document.addEventListener("DOMContentLoaded", function(){
    const cards = document.querySelectorAll('.cardItem');
    const buttonAll = document.querySelectorAll('button');
    let page = 0;

    for (let i = 0; i < buttonAll.length; i++) {
        const button = buttonAll[i];
        button.onclick = function() {
            page = i;
            cardSetting();
        }
    }

    TweenMax.from('h1', 1, {
        top: -50,
        autoAlpha: 0,
        ease: Power3.easeOut,
    });

    buttonAll.forEach(function(button, i) {
        TweenMax.from(button, 0.4, {
            top: 100,
            autoAlpha: 0,
            ease: Power3.easeInOut,
            delay: i * 0.1 + 1,
        })
    });

    /**
     * rotationZ를 적용하기 위함
     */
    TweenMax.set('section', {perspective: 400});

    function cardSetting() {
        for (let i=0; i<buttonAll.length; i++) {
            buttonAll[i].classList.remove('active');
        }
        buttonAll[page].classList.add('active');

        if (page === 0) {
            cards.forEach((card, i) => {
                TweenMax.to(card, 1, {
                    top: windowHeight/2-i*50,
                    left: windowWidth/2 -i*60-200,
                    rotationX: 0,
                    rotationY: 0,
                    rotationZ: 0,
                    ease: Power4.easeInOut,
                    delay: i*0.15
                })
            })
        } else if (page === 1) {
            cards.forEach((card, i) => {
                TweenMax.to(card, 1, {
                    top: Math.random() * (windowHeight-300)+100,
                    left: Math.random() * (windowWidth-300)+100,
                    rotationX: 'random(-60,60)', // Math.random()*30
                    rotationY: 'random(-60,60)',
                    rotationZ: 'random(-90,90)',
                    scale: Math.random() * 0.6+0.6,
                    ease: Power4.easeInOut,
                    delay: 'random(0,0.5)'
                })
            })
        } else if (page === 2) {
            cards.forEach((card, i) => {
                TweenMax.to(card, 1, {
                    top: windowHeight/2+i*30-100,
                    left: windowWidth/2-i*80,
                    rotationX: 0,
                    rotationY: -10 * i,
                    rotationZ: 20* i,
                    ease: Power4.easeInOut,
                    delay: i*0.15
                })
            })
        } else if (page === 3) {
            cards.forEach((card, i) => {
                TweenMax.to(card, 1, {
                    top: windowHeight/2,
                    left: windowWidth/2,
                    rotationX: (i+1)*5,
                    rotationY: (i+1)*10,
                    rotationZ: (i+1)*15,
                    ease: Power4.easeInOut,
                    delay: i*0.15
                })
            })
        }
    }

    window.addEventListener('resize', function() {
        resize();
    });

    function resize() {
        windowHeight = window.innerHeight;
        windowWidth = window.innerWidth;
        cardSetting();
    }

    resize();
});