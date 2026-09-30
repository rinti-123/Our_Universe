/* ==========================================================
   OUR UNIVERSE
   Transition Scene + Video Memory
   Part 1 : Foundation
========================================================== */

'use strict';


/* ==========================================================
   ELEMENTS
========================================================== */

const transitionScene = document.querySelector('#transition-scene');

const transitionTitle = document.querySelector('.transition-title');

const transitionSubtitle = document.querySelector('.transition-subtitle');

const playButton = document.querySelector('#video-start-btn');

const memoryVideo = document.querySelector('#memory-video');


/* ==========================================================
   CONTENT
========================================================== */

const transitionMessages = {

    title: 'Some memories are too beautiful to stay frozen...',

    subtitle: "Let's relive one of them."

};


/* ==========================================================
   SETTINGS
========================================================== */

const TYPE_SPEED = 55;

const SUBTITLE_DELAY = 700;

const BUTTON_DELAY = 800;


/* ==========================================================
   SAFETY CHECK
========================================================== */

if (
    !transitionScene ||
    !transitionTitle ||
    !transitionSubtitle ||
    !playButton ||
    !memoryVideo
) {

    console.warn(
        '[Our Universe] Video section elements not found.'
    );

}/* ==========================================================
   TYPEWRITER
========================================================== */

let transitionPlayed = false;

function typeText(element, text, speed = TYPE_SPEED) {

    return new Promise(resolve => {

        element.textContent = '';

        let index = 0;

        const timer = setInterval(() => {

            element.textContent += text.charAt(index);

            index++;

            if (index >= text.length) {

                clearInterval(timer);

                resolve();

            }

        }, speed);

    });

}


/* ==========================================================
   START TRANSITION
========================================================== */

async function playTransitionSequence() {

    if (transitionPlayed) return;

    transitionPlayed = true;

    transitionTitle.classList.add('is-visible');

    await typeText(
    transitionTitle,
    transitionMessages.title
);

await revealSubtitleAndButton();

}


/* ==========================================================
   SCROLL OBSERVER
========================================================== */

const transitionObserver = new IntersectionObserver(

    entries => {

        entries.forEach(entry => {

            if (!entry.isIntersecting) return;

            playTransitionSequence();

            transitionObserver.unobserve(entry.target);

        });

    },

    {

        threshold: 0.55

    }

);

transitionObserver.observe(transitionScene);
/* ==========================================================
   CONTINUE TRANSITION SEQUENCE
========================================================== */

async function revealSubtitleAndButton() {

    await new Promise(resolve => {

        setTimeout(resolve, SUBTITLE_DELAY);

    });

    transitionSubtitle.classList.add('is-visible');

    await typeText(
        transitionSubtitle,
        transitionMessages.subtitle,
        45
    );

    await new Promise(resolve => {

        setTimeout(resolve, BUTTON_DELAY);

    });

    playButton.classList.add('is-visible');

}/* ==========================================================
   VIDEO REVEAL
========================================================== */

const videoSection = document.querySelector('#video-memory');

playButton.addEventListener('click', async () => {

    /* Hide Transition */

    transitionScene.style.opacity = '0';

    transitionScene.style.transition = 'opacity 1.2s ease';

    await new Promise(resolve => setTimeout(resolve, 1200));

    /* Reveal Video Section */
videoSection.classList.remove('is-hidden');

await new Promise(resolve => requestAnimationFrame(resolve));

videoSection.scrollIntoView({

    behavior: 'smooth',

    block: 'start'

});

    });

    await new Promise(resolve => setTimeout(resolve, 800));

    /* Try autoplay */

    try{

        await memoryVideo.play();

    }

    catch(error){

        console.warn(
            '[Our Universe] Autoplay prevented.',
            error
        );

    }

    /* Try Fullscreen */

    if(document.fullscreenEnabled){

        try{

            await memoryVideo.requestFullscreen();

        }

        catch(error){

            console.warn(
                '[Our Universe] Fullscreen unavailable.'
            );

        }

    }
/* ==========================================================
   MEMORY AUTO SCROLL
   Cinematic Journey
========================================================== */

document.addEventListener("DOMContentLoaded", () => {

    const memorySection =
        document.querySelector(".universe-remembers");

    const memoryScenes =
        document.querySelectorAll(".universe-remembers .memory-scene");

    if (!memorySection || memoryScenes.length < 2) {
        return;
    }

    let currentScene = 0;
    let timer = null;
    let sectionActive = false;
    let userScrolling = false;


    /* ===========================
       GO TO NEXT MEMORY
    =========================== */

    function nextMemory(){

        if (!sectionActive || userScrolling) {
            return;
        }

        if(currentScene >= memoryScenes.length - 1){

            clearInterval(timer);

            return;
        }

        currentScene++;

        memoryScenes[currentScene].scrollIntoView({
            behavior:"smooth",
            block:"start"
        });

    }


    /* ===========================
       START JOURNEY
    =========================== */

    function startJourney(){

        clearInterval(timer);

        timer = setInterval(() => {

            nextMemory();

        }, 7000);

    }


    /* ===========================
       DETECT MEMORY SECTION
    =========================== */

    const sectionObserver =
        new IntersectionObserver(
            (entries) => {

                entries.forEach(entry => {

                    if(entry.isIntersecting){

                        sectionActive = true;

                        startJourney();

                    }else{

                        sectionActive = false;

                        clearInterval(timer);

                    }

                });

            },
            {
                threshold:0.15
            }
        );


    sectionObserver.observe(memorySection);


    /* ===========================
       MANUAL SCROLL
    =========================== */

    window.addEventListener(
        "wheel",
        () => {

            userScrolling = true;

            clearTimeout(
                window.memoryManualScroll
            );

            window.memoryManualScroll =
                setTimeout(() => {

                    userScrolling = false;

                    if(sectionActive){
                        startJourney();
                    }

                }, 2500);

        },
        { passive:true }
    );

});