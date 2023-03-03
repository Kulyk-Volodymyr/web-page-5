/* ------------------------- Onload animation start ------------------------- */
let section1Divs = document.getElementsByClassName('s1-3-1');
window.addEventListener('load', function () {
    setTimeout( (function () { section1Divs[0].classList.add('s1-3-1-onload'); }), 400);
    setTimeout( (function () { section1Divs[1].classList.add('s1-3-1-onload'); }), 800);
    setTimeout( (function () { section1Divs[2].classList.add('s1-3-1-onload'); }), 1200);
    setTimeout( (function () { section1Divs[3].classList.add('s1-3-1-onload'); }), 1600);
});
/* -------------------------- Onload animation end -------------------------- */

/* -------------------- 1-st scroll animation data start -------------------- */
const section2img1 = document.querySelector('#section-2 .s2-1');
const section2img1Visible = 240;
let section2img1Appeared = false;
const section2s22 = document.querySelector('#section-2 .s2-2');
const section2s23 = document.querySelector('#section-2 .s2-3');
/* --------------------- 1-st scroll animation data end --------------------- */
/* -------------------- 2-nd scroll animation data start -------------------- */
const section2img2 = document.querySelector('#section-2 .s2-4');
const section2img2Visible = 220;
let section2img2Appeared = false;
const section2s25 = document.querySelector('#section-2 .s2-5');
const section2s26 = document.querySelector('#section-2 .s2-6');
/* --------------------- 2-nd scroll animation data end --------------------- */
/* -------------------- 3-rd scroll animation data start -------------------- */
const section3text = document.querySelector('#section-3 .s3-1');
const section3textVisible = 180;
let section3textAppeared = false;
const section3s31 = document.querySelector('#section-3 .s3-1');
const section3s32 = document.querySelector('#section-3 .s3-2-2-1');
const section3s33 = document.querySelector('#section-3 .s3-2-2-2');
/* --------------------- 3-rd scroll animation data end --------------------- */
/* -------------------- 4-th scroll animation data start -------------------- */
const section3img1 = document.querySelector('#section-3 .s3-3');
const section3img1Visible = 10;
let section3img1Appeared = false;
const section3s42 = document.querySelector('#section-3 .s3-4-2');
const section3s421 = document.querySelector('#section-3 .s3-4-2-1');
/* --------------------- 4-th scroll animation data end --------------------- */
/* -------------------- 5-th scroll animation data start -------------------- */
const section4div1 = document.querySelector('#section-4 .s4-1');
const section4div1Visible = -400;
let section4div1Appeared = false;
const section4div2 = document.querySelector('#section-4 .s4-2');
const section4text = document.getElementsByClassName('s4-1-text');
/* --------------------- 5-th scroll animation data end --------------------- */
/* -------------------- 6-th scroll animation data start -------------------- */
const section4img1 = document.querySelector('#section-4 .s4-4');
const section4img1Visible = 400;
let section4img1Appeared = false;
const section4s43 = document.querySelector('#section-4 .s4-3');
const section4s442 = document.querySelector('#section-4 .s4-4-2');
/* --------------------- 6-th scroll animation data end --------------------- */
window.addEventListener("scroll", counters);
function counters() {
    /* -------------------- 1-st scroll animation start --------------------- */
    let section2img1Bottom = section2img1.getBoundingClientRect().bottom;
    if (section2img1Bottom < window.innerHeight - section2img1Visible && section2img1Appeared === false) {
        section2img1Appeared = true;
        //alert('1-st ANIMATION');
        section2s22.classList.add('s2-2-appears');
        setTimeout( (function () { section2s23.querySelector("p:nth-child(1)").classList.add('opacity-1');}), 1000);
        setTimeout( (function () { section2s23.querySelector("p:nth-child(2)").classList.add('opacity-1');}), 1200);
        setTimeout( (function () { section2s23.querySelector("p:nth-child(3)").classList.add('opacity-1');}), 1400);
        setTimeout( (function () { section2s23.querySelector("p:nth-child(4)").classList.add('opacity-1');}), 1600);
        setTimeout( (function () { section2s23.querySelector("button").classList.add('opacity-1');}), 1800);
    }
    if (section2img1Bottom> window.innerHeight && section2img1Appeared === true) {
        section2img1Appeared = false;
        section2s22.classList.remove('s2-2-appears');
        section2s23.querySelector("p:nth-child(1)").classList.remove('opacity-1');
        section2s23.querySelector("p:nth-child(2)").classList.remove('opacity-1');
        section2s23.querySelector("p:nth-child(3)").classList.remove('opacity-1');
        section2s23.querySelector("p:nth-child(4)").classList.remove('opacity-1');
        section2s23.querySelector("button").classList.remove('opacity-1');
    }
    /* --------------------- 1-st scroll animation end ---------------------- */
    /* -------------------- 2-nd scroll animation start --------------------- */
    let section2img2Bottom = section2img2.getBoundingClientRect().bottom;
    if (section2img2Bottom < window.innerHeight - section2img2Visible && section2img2Appeared === false) {
        section2img2Appeared = true;
        //alert('2-nd ANIMATION');
        section2s25.classList.add('s2-5-appears');
        section2s26.classList.add('s2-6-appears');
    }
    if (section2img2Bottom > window.innerHeight && section2img2Appeared === true) {
        section2img2Appeared = false;
        section2s25.classList.remove('s2-5-appears');
        section2s26.classList.remove('s2-6-appears');
    }
    /* --------------------- 2-nd scroll animation end ---------------------- */
    /* -------------------- 3-rd scroll animation start --------------------- */
    let section3textBottom = section3text.getBoundingClientRect().bottom;
    if (section3textBottom < window.innerHeight - section3textVisible && section3textAppeared === false) {
        section3textAppeared = true;
        //alert('3-rd ANIMATION');
        section3s31.classList.add('s3-text-appears');
        section3s32.classList.add('s3-text-appears');
        section3s33.classList.add('s3-text-appears');
    }
    if (section3textBottom > window.innerHeight && section3textAppeared === true) {
        section3textAppeared = false;
        section3s31.classList.remove('s3-text-appears');
        section3s32.classList.remove('s3-text-appears');
        section3s33.classList.remove('s3-text-appears');
    }
    /* --------------------- 3-rd scroll animation end ---------------------- */
    /* -------------------- 4-th scroll animation start --------------------- */
    let section3img1Bottom = section3img1.getBoundingClientRect().bottom;
    if (section3img1Bottom < window.innerHeight - section3img1Visible && section3img1Appeared === false) {
        section3img1Appeared = true;
        //alert('4-th ANIMATION');
        section3s42.classList.add('s3-4-2-appears');
        section3s421.classList.add('opacity-1');
    }
    if (section3img1Bottom > window.innerHeight && section3img1Appeared === true) {
        section3img1Appeared = false;
        section3s42.classList.remove('s3-4-2-appears');
        section3s421.classList.remove('opacity-1');
    }
    /* --------------------- 4-th scroll animation end ---------------------- */
    /* -------------------- 5-th scroll animation start --------------------- */
    let section4div1Top = section4div1.getBoundingClientRect().top;
    if (section4div1Top < window.innerHeight - section4div1Visible && section4div1Appeared === false) {
        section4div1Appeared = true;
        //alert('5-th ANIMATION');
        section4div1.classList.add('s4-1-transform');
        section4div2.classList.add('s4-2-appears');
        for (i of section4text) {i.classList.add('opacity-1');}
    }
    if (section4div1Top > window.innerHeight && section4div1Appeared === true) {
        section4div1Appeared = false;
        section4div1.classList.remove('s4-1-transform');
        section4div2.classList.remove('s4-2-appears');
        for (i of section4text) {i.classList.remove('opacity-1');}
    }
    /* --------------------- 5-th scroll animation end ---------------------- */
    /* -------------------- 6-th scroll animation start --------------------- */
    let section4img1Top = section4img1.getBoundingClientRect().top;
    if (section4img1Top < window.innerHeight - section4img1Visible && section4img1Appeared === false) {
        section4img1Appeared = true;
        //alert('6-th ANIMATION');
        section4s43.classList.add('s4-3-appears');
        section4s442.classList.add('s4-4-2-appears');
    }
    if (section4img1Top > window.innerHeight && section4img1Appeared === true) {
        section4img1Appeared = false;
        section4s43.classList.remove('s4-3-appears');
        section4s442.classList.remove('s4-4-2-appears');
    }
    /* --------------------- 6-th scroll animation end ---------------------- */
}

/* ---------------------------- Modal Image start --------------------------- */
const modalImageWindow = document.getElementById('modal-img');
modalImageWindow.addEventListener('click', hideModalImage);
let allImages = document.getElementsByTagName('img');
for (let i of allImages) i.addEventListener('click', showModalImage);
let modalImage = document.getElementById('modal-img-image');

function showModalImage() {
    modalImage.src = `${this.src}`;
    modalImageWindow.style.display = 'block';
    modalImage.classList.add('modal-img-image-appears');
}

function hideModalImage() {
    modalImage.classList.remove('modal-img-image-appears');
    modalImage.classList.add('modal-img-image-disappears');
    setTimeout( (function () {
        modalImage.classList.remove('modal-img-image-disappears');
        modalImageWindow.style.display = 'none';
    }), 1000);
}
/* ----------------------------- Modal Image end ---------------------------- */
