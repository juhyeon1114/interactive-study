let wrap;
let x = 0;
let y = 0;
let mx = 0;
let my = 0;

document.addEventListener('DOMContentLoaded', function() {
    wrap = document.querySelector('.contentWrap');

    window.addEventListener('mousemove', function(e) {
        /**
         * 마우스 위치값이 정가운데에서 0,0이 되게 함
         */
        x = e.clientX - window.innerHeight/2;
        y = e.clientY - window.innerWidth/2;

        // wrap.style.transform = `translate3d(-50%, -50%, 0) rotateX(${y/10}deg) rotateY(${-x/10}deg)`
    })
    loop();
})

function loop() {
    mx += (x-mx)*0.05;
    my += (y-my)*0.05;

    wrap.style.transform = `translate3d(-50%, -50%, 0) rotateX(${my/10}deg) rotateY(${-mx/10}deg)`;

    window.requestAnimationFrame(loop);
    /**
     * .requestAnimationFrame()
     * - 백그라운드 동작 및 비활성화시 중지 -> 성능 최적화
     * - 1초에 최대 60번 동작
     * - 다수의 애니메이션도 각각 타이머 값을 생성/참조하지 않고 내부의 동일한 타이머 참조
     */
}