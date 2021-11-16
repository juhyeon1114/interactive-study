let wrap;
let x = 0;
let y = 0;
let mx = 0;
let my = 0;
let isIos = false;
let button;

document.addEventListener('DOMContentLoaded', function () {
    wrap = document.querySelector('.contentWrap');
    button = document.querySelector('button');

    button.addEventListener('click', function () {
        this.classList.add('dimd');
        wrap.classList.add('active');
        if (iosCheck()) {

            DeviceOrientationEvent.requestPermission()
                .then(() => {
                    mobileOrientationCheck();
                })
                .catch(err => {
                    console.error(err);
                })
        } else {
            mobileOrientationCheck();
        }
    })
});

function loop() {
    mx += (x - mx) * 0.1;
    my += (x - my) * 0.1;
    wrap.style.transform = `translate3d(-50%, -50%, 0) rotateX(${my-50}deg) rotateY(${mx}deg)`;
    window.requestAnimationFrame(loop);
}

function iosCheck() {
    const mbKeywords = ['iPhone', 'iPad'];
    for (let info in mbKeywords) {
        if (navigator.userAgent.match(mbKeywords[info]) !== null) {
            return true;
        }
    }
    return false;
}

function mobileOrientationCheck() {
    /**
     * Device가 움직일 때, 발생하는 이벤트
     */
    window.addEventListener('deviceorientation', function (e) {
        /**
         * alpha : rotation around (z-axis)
         * gamma : left, right
         * beta : front, back
         */
        x = e.gamma;
        y = e.beta;
    });
    loop();
}