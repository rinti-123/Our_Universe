/* ==========================================================
   OUR UNIVERSE
   Gallery Module
   Part 1 : Setup
========================================================== */

"use strict";

/* ==========================
   GALLERY ELEMENTS
========================== */

const galleryItems = document.querySelectorAll(".gallery-item");

const lightbox = document.getElementById("galleryLightbox");

const lightboxImage = document.getElementById("galleryLightboxImage");

const lightboxCaption = document.getElementById("galleryLightboxCaption");

const closeButton = document.getElementById("galleryClose");

const previousButton = document.getElementById("galleryPrev");

const nextButton = document.getElementById("galleryNext");

const overlay = document.querySelector(".gallery-lightbox-overlay");

/* ==========================
   GALLERY STATE
========================== */

let currentIndex = 0;

/* ==========================
   IMAGE DATA
========================== */

const galleryData = Array.from(galleryItems).map((item) => ({

    src: item.querySelector(".gallery-image").src,

    alt: item.querySelector(".gallery-image").alt,

    caption: item.querySelector(".gallery-caption").textContent.trim()

}));
/* ==========================================================
   LIGHTBOX FUNCTIONS
========================================================== */

/**
 * Update the lightbox with the current image.
 */
function updateLightbox() {

    const image = galleryData[currentIndex];

    lightboxImage.src = image.src;

    lightboxImage.alt = image.alt;

    lightboxCaption.textContent = image.caption;

}

/**
 * Open the lightbox.
 * @param {number} index
 */
function openLightbox(index) {

    currentIndex = index;

    updateLightbox();

    lightbox.classList.add("active");

    lightbox.setAttribute("aria-hidden", "false");

    document.body.style.overflow = "hidden";

}

/**
 * Close the lightbox.
 */
function closeLightbox() {

    lightbox.classList.remove("active");

    lightbox.setAttribute("aria-hidden", "true");

    document.body.style.overflow = "";

}/* ==========================================================
   EVENT LISTENERS
========================================================== */

/* Open Lightbox */

galleryItems.forEach((item, index) => {

    item.addEventListener("click", () => {

        openLightbox(index);

    });

});

/* Close Button */

closeButton.addEventListener("click", closeLightbox);

/* Overlay Click */

overlay.addEventListener("click", closeLightbox);
/* ==========================================================
   NAVIGATION FUNCTIONS
========================================================== */

/**
 * Show the next image.
 */
function showNextImage() {

    currentIndex++;

    if (currentIndex >= galleryData.length) {

        currentIndex = 0;

    }

    updateLightbox();

}

/**
 * Show the previous image.
 */
function showPreviousImage() {

    currentIndex--;

    if (currentIndex < 0) {

        currentIndex = galleryData.length - 1;

    }

    updateLightbox();

}

/* ==========================
   BUTTON EVENTS
========================== */

nextButton.addEventListener("click", showNextImage);

previousButton.addEventListener("click", showPreviousImage);

/* ==========================
   KEYBOARD SUPPORT
========================== */

document.addEventListener("keydown", (event) => {

    if (!lightbox.classList.contains("active")) {

        return;

    }

    switch (event.key) {

        case "Escape":
            closeLightbox();
            break;

        case "ArrowRight":
            showNextImage();
            break;

        case "ArrowLeft":
            showPreviousImage();
            break;

    }

});
/* ==========================================================
   ACCESSIBILITY
========================================================== */

/* Open with Enter or Space */

galleryItems.forEach((item, index) => {

    item.addEventListener("keydown", (event) => {

        if (
            event.key === "Enter" ||
            event.key === " "
        ) {

            event.preventDefault();

            openLightbox(index);

        }

    });

});

/* ==========================================================
   INITIALIZATION
========================================================== */

updateLightbox();
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