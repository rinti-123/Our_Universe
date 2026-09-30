/* ==========================================================
   MEMORY AUTO SCROLL
   Cinematic Journey — Part 2
========================================================== */

document.addEventListener("DOMContentLoaded", () => {

    const scenes = document.querySelectorAll(
        ".universe-remembers .memory-scene"
    );

    if (!scenes.length) return;

    let currentScene = 0;
    let autoScrollTimer = null;
    let isAutoScrolling = false;
    let userActive = false;


    /* ===========================
       MOVE TO SCENE
    =========================== */

    function moveToScene(index) {

        if (index < 0 || index >= scenes.length) return;

        currentScene = index;

        isAutoScrolling = true;

        scenes[index].scrollIntoView({
            behavior: "smooth",
            block: "start"
        });

        setTimeout(() => {
            isAutoScrolling = false;
        }, 1200);
    }


    /* ===========================
       NEXT SCENE
    =========================== */

    function nextScene() {

        if (userActive) return;

        if (currentScene >= scenes.length - 1) {
            stopAutoScroll();
            return;
        }

        moveToScene(currentScene + 1);
    }


    /* ===========================
       START AUTO SCROLL
    =========================== */

    function startAutoScroll() {

        stopAutoScroll();

        autoScrollTimer = setInterval(() => {

            nextScene();

        }, 6500);
    }


    /* ===========================
       STOP AUTO SCROLL
    =========================== */

    function stopAutoScroll() {

        if (autoScrollTimer) {

            clearInterval(autoScrollTimer);

            autoScrollTimer = null;
        }
    }


    /* ===========================
       DETECT USER SCROLL
    =========================== */

    window.addEventListener("wheel", () => {

        if (isAutoScrolling) return;

        userActive = true;

        stopAutoScroll();

        clearTimeout(window.memoryResumeTimer);

        window.memoryResumeTimer = setTimeout(() => {

            userActive = false;

            startAutoScroll();

        }, 3000);

    }, { passive: true });


    /* ===========================
       START WHEN MEMORY APPEARS
    =========================== */

    const observer = new IntersectionObserver(

        entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    startAutoScroll();

                } else {

                    stopAutoScroll();

                }

            });

        },

        {
            threshold: 0.2
        }

    );


    observer.observe(
        document.querySelector(".universe-remembers")
    );

});