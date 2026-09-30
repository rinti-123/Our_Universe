/* ==========================================================
   OUR UNIVERSE
   Shared Effects Module
   Production Version
========================================================== */

"use strict";

/* ==========================================================
   RIPPLE EFFECT
========================================================== */

function createRipple(event) {

    const host = event.currentTarget;

    if (!host) return;

    const rect = host.getBoundingClientRect();

    const ripple = document.createElement("span");

    ripple.className = "effect-ripple";

    ripple.style.left = `${event.clientX - rect.left}px`;
    ripple.style.top = `${event.clientY - rect.top}px`;

    host.appendChild(ripple);

    ripple.addEventListener(
        "animationend",
        () => ripple.remove(),
        { once: true }
    );

}

/* ==========================================================
   INITIALIZE RIPPLE
========================================================== */

function initRipple() {

    const rippleElements =
        document.querySelectorAll(".ripple-effect");

    rippleElements.forEach((element) => {

        element.addEventListener(
            "pointerdown",
            createRipple,
            { passive: true }
        );

    });

}

/* ==========================================================
   GLOBAL EFFECTS INITIALIZER
========================================================== */

function initEffects() {

    initRipple();

    /*
        Future Modules

        initParticles();
        initFireworks();
        initConfetti();
        initHearts();
        initGlow();
    */

}

/* ==========================================================
   AUTO INITIALIZATION
========================================================== */

if (document.readyState === "loading") {

    document.addEventListener(
        "DOMContentLoaded",
        initEffects,
        { once: true }
    );

} else {

    initEffects();

}/* ==========================================================
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