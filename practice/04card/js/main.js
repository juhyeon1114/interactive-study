document.addEventListener("DOMContentLoaded", function(){
    const starBg = document.querySelector('.starBg');
    const title = document.querySelector('.title');
    const topBtn = document.querySelector('.topBtn');

    window.addEventListener('scroll', function(event) {
        const scroll = window.scrollY;
        starBg.style.transform = `translateY(${-scroll/3}px)`;
        title.style.transform = `translateY(${-scroll/1.5}px)`;
    });

    topBtn.addEventListener('click', function() {
        TweenMax.to(window, 1, {
            scrollTo: {
                y: 0,
                autoKill: true,
            },
            ease: Power3.easeInOut
        })
    })

    const texts = title.querySelectorAll('div')
    for (let i=0; i<texts.length; i++) {
        const text = texts[i];

        /**
         * .from() : 애니메이션의 시작점을 명시
         * -> autoAlpha가 0부터 시작해서 원래 상태로 변화
         * .to() : 애니메이션의 끝점을 명시
         * -> autoAlpha가 원래 상태부터 시작해서 0으로 변화
         * 
         * TweenMax.<method>(<element>, <seconds>, <options>);
         */
        TweenMax.from(text, 1, {
            autoAlpha: 0, // === opacity
            delay: Math.random() * 1,
            ease: Power3.easeInOut
        });
    }

    // setTimeout(function() {
    //     /** Auto scrolling #1 */
    //     window.scrollTo({
    //         top: document.querySelector('.bottom').offsetTop, behavior: 'smooth'
    //     });
    //     /** Auto scrolling #2 */
    //     document.querySelector('.bottom').scrollIntoView({behavior: 'smooth'})
    // }, 2000)

    /** Auto scrolling #3 */
    TweenMax.to(window, 2, {
        scrollTo: {
            y: '.bottom',
            autoKill: true,
        },
        delay: 1.7,
        ease: Power4.easeInOut
    });

    TweenMax.from('.bottom', 2, {
        scale: 0.8,
        y: 100,
        delay: 2.2,
        ease: Power3.easeInOut
    })

});