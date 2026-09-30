/* ==========================================================
   OUR UNIVERSE
   Universe Timeline
   Typewriter Reveal
========================================================== */

"use strict";

document.addEventListener("DOMContentLoaded", () => {

    const timelineSection =
        document.querySelector(".universe-timeline");

    const timelineText =
        document.querySelector("#timeline-text");

    if (!timelineSection || !timelineText) {
        return;
    }


    /* ===========================
       TIMELINE DATA
    =========================== */

    const timelineLines = [

        "13.8 Billion Years Ago...",

        "The Universe Was Born.",

        "Billions Of Galaxies Found Their Place.",

        "Millions Of Stars Began To Shine.",

        "One Tiny Planet...",

        "One Country...",

        "One City...",

        "One Beautiful Soul...",

        "And Somehow...",

        "I Found...",

        "You."

    ];


    let currentLine = 0;
    let typingTimer = null;
    let nextLineTimer = null;
    let started = false;


    /* ===========================
       TYPEWRITER
    =========================== */

    function typeText(text) {

        clearInterval(typingTimer);

        timelineText.textContent = "";

        let index = 0;

        typingTimer = setInterval(() => {

            if (index >= text.length) {

                clearInterval(typingTimer);

                nextLineTimer = setTimeout(
                    showNextLine,
                    2000
                );

                return;
            }

            timelineText.textContent += text[index];

            index++;

        }, 110);

    }


    /* ===========================
       SHOW LINE
    =========================== */

    function showTimelineLine() {

        if (currentLine >= timelineLines.length) {
            return;
        }

        timelineText.classList.remove("hide");
        timelineText.classList.add("show");


        if (
            currentLine ===
            timelineLines.length - 1
        ) {

            timelineText.classList.add("final");

        }


        typeText(
            timelineLines[currentLine]
        );

        currentLine++;

    }


    /* ===========================
       NEXT LINE
    =========================== */

    function showNextLine() {

        timelineText.classList.remove("show");
        timelineText.classList.add("hide");

        nextLineTimer = setTimeout(() => {

            showTimelineLine();

        }, 800);

    }


    /* ===========================
       START ON SCROLL
    =========================== */

    const observer =
        new IntersectionObserver(

            (entries) => {

                entries.forEach(entry => {

                    if (
                        entry.isIntersecting &&
                        !started
                    ) {

                        started = true;

                        setTimeout(
                            showTimelineLine,
                            500
                        );

                        observer.unobserve(
                            timelineSection
                        );

                    }

                });

            },

            {
                threshold: 0.25
            }

        );


    observer.observe(
        timelineSection
    );

});
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
/* ==========================================================
   MOBILE TIMELINE CARD EXPAND
========================================================== */

document.addEventListener("DOMContentLoaded", () => {

    const timelineCards =
        document.querySelectorAll(
            "#timeline .timeline-card"
        );

    if (!timelineCards.length) {
        return;
    }


    timelineCards.forEach(card => {

        card.addEventListener("click", () => {

            if (
                window.innerWidth > 768
            ) {
                return;
            }


            const wasExpanded =
                card.classList.contains(
                    "timeline-expanded"
                );


            /* Close every card */

            timelineCards.forEach(otherCard => {

                otherCard.classList.remove(
                    "timeline-expanded"
                );

            });


            /* Toggle selected card */

            if (!wasExpanded) {

                card.classList.add(
                    "timeline-expanded"
                );

            }

        });

    });

});