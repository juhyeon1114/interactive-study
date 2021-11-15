windowHeight = window.innerHeight;
windowWidth = window.innerWidth;

document.addEventListener('DOMContentLoaded', function() {
    const body = document.querySelector('body');
    const buttonAll = document.querySelectorAll('button');
    let page = 0;
    const bgColorArr = ['#2eccc4', '#ea204f', '#20a9ea'];

    for (let i=0; i<buttonAll.length; i++) {
        const button = buttonAll[i];
        button.onclick = function() {
            page = i;
            motionSetting();
        }
    }

    TweenMax.from('h1', 1, {
        top: -50,
        autoAlpha: 0,
        ease: Power3.easeOut,
    });

    buttonAll.forEach((button, i) => {
        TweenMax.from(button, 0.4, {
            top: 100,
            autoAlpha: 0,
            ease: Power3.easeInOut,
            delay: i * 0.1 + 1,
        })
    });

    TweenMax.set('section', {perspective: 400});

    /**
     * Make 100 text items
     */
    const section = document.querySelector('section');

    for (i=0; i<100; i++) {
        const item = document.createElement('div');
        item.setAttribute('class', 'textItem');
        // item.style.top = `${windowHeight/2}px`;
        // item.style.left = `${windowWidth/2}px`;
        item.style.top = 0;
        item.style.left = 0;
        item.innerHTML = i;
        section.appendChild(item);
    }

    const textItems = document.querySelectorAll('.textItem');

    function motionSetting() {
        // Change background color
        body.style.background = bgColorArr[page];

        for (let i=0; i<buttonAll.length; i++) {
            buttonAll[i].classList.remove('active');
        }
        buttonAll[page].classList.add('active');

        TweenMax.killTweensOf(textItems); // Remove duplicated TweenMax

        if (page === 0) {
            textItems.forEach((textItem, i) => {
                TweenMax.to(textItem, 1, {
                    top: Math.random() * (windowHeight-100)+50,
                    left: Math.random() * (windowWidth-100)+50,
                    rotationX: 0,
                    rotationY: 0,
                    rotationZ: 0,
                    autoAlpha: 'random(0.1,1)',
                    scale: 0.5,
                    ease: Power4.easeOut,
                    delay: 'random(0, 0.1)'
                })
            })
        } else if (page === 1) {
            textItems.forEach((textItem, i) => {
                const scaleNum = Math.random() * 3;
                TweenMax.to(textItem, 1, {
                    top: Math.random() * (windowHeight-100) + 50,
                    left: Math.random() * (windowWidth-100) + 50,
                    rotationX: 'random(-60,60)',
                    rotationY: 'random(-60,60)',
                    rotationZ: 'random(-90,90)',
                    autoAlpha: scaleNum/3,
                    scale: scaleNum,
                    ease: Power4.easeInOut,
                    delay: 'random(0, 0.5)'
                })
            })
        } else if (page === 2) {
            textItems.forEach((textItem, i) => {
                TweenMax.to(textItem, 1, {
                    top: windowHeight/2 + Math.sin(i/3)*40,
                    left: i*20,
                    rotationX: 0,
                    rotationY: 0,
                    rotationZ: 0,
                    autoAlpha: 1,
                    scale: 0.5,
                    ease: Power4.easeInout,
                    delay: 'random(0, 0.5)'
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
        motionSetting();
    }

    resize();
})