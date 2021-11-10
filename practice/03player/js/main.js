let prevBtn;
let nextBtn;
let page = 0;
let total = 0;
let album;
let pointButtons = [];
let contentWrap;
let diskInner = [];
let startX = 0;
let endX = 0;

const bgArray = [
    ["#0272a4","#f6a564"],
    ["#b6bfc8","#36595b"],
    ["#e58e82","#6f569f"]
];

function minusPage() {
    if (page > 0) {
        page --;
    } else {
        page = total + 1;
    }
}

function plusPage() {
    if (page < total - 1) {
        page ++;
    } else {
        page = 0;
    }
}

document.addEventListener("DOMContentLoaded", function(){
    prevBtn = document.querySelectorAll('button')[0];
    nextBtn = document.querySelectorAll('button')[1];
    contentWrap = document.querySelector('.contentWrap');
    diskInner = document.querySelectorAll('.disk_inner');
    pointButtons = document.querySelectorAll('.pointWrap li');

    album = document.querySelectorAll('.album');
    total = album.length;

    prevBtn.addEventListener('click', function() {
        minusPage();
        pageChangeFunc();
    });

    nextBtn.addEventListener('click', function() {
        plusPage();
        pageChangeFunc();
    });

    pointButtons.forEach((pointButton, idx) => {
        pointButton.addEventListener('click', function() {
            page = idx;
            pageChangeFunc();
        });
    });

    contentWrap.addEventListener('touchstart', touchFunc, false);
    contentWrap.addEventListener('touchend', touchFunc, false);

    pageChangeFunc();

});

function touchFunc(e) {
    let type = null;
    let touch = null;

    switch (e.type) {
        case 'touchstart' :
            type = 'mousedown';
            touch = e.changedTouches[0];
            startX = touch.clientX;
            endX = 0;
            break;
        case 'touchend' :
            type = 'mouseup';
            touch = e.changedTouches[0];
            endX = touch.clientX;

            let checkNum = startX - endX;
            let checkNumAbs = Math.abs(checkNum);

            if (checkNumAbs > 100) {
                if (checkNum < 0) {
                    minusPage();
                } else {
                    plusPage();
                }
                pageChangeFunc();
            }
            break;
        default: break;
    }
}

function pageChangeFunc(){

    contentWrap.style.background = `linear-gradient(120deg, ${bgArray[page][0]}, ${bgArray[page][1]})`

    if (total > 0) {
        for (let i=0; i<total; i++) {
            if (page === i) {
                album[page].classList.add('active');
                pointButtons[page].classList.add('active');
            } else {
                album[i].classList.remove('active');
                pointButtons[i].classList.remove('active');
            }
        }
    }

    diskInner[page].style.background = bgArray[page][0];
}