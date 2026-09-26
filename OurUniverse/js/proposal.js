/* ==========================================================
   OUR UNIVERSE
   PROPOSAL
   Envelope Reveal
========================================================== */

"use strict";


/* ===========================
   ELEMENTS
=========================== */

const proposalSection =
    document.querySelector("#proposal");

const proposalEnvelope =
    document.querySelector(".proposal-envelope");


/* ===========================
   STATE
=========================== */

let proposalOpened = false;


/* ===========================
   ENVELOPE OPEN
=========================== */

function openProposalEnvelope() {

    if (!proposalEnvelope || proposalOpened) return;

    proposalOpened = true;

    proposalEnvelope.classList.add("opened");
}


/* ===========================
   SCROLL TRIGGER
=========================== */

if (proposalSection && proposalEnvelope) {

    const proposalObserver =
        new IntersectionObserver(

            (entries) => {

                entries.forEach(entry => {

                    if (entry.isIntersecting) {

                        openProposalEnvelope();

                    }

                });

            },

            {
                threshold: 0.55
            }

        );

    proposalObserver.observe(proposalSection);

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