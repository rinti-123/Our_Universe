/* ==========================================================
   OUR UNIVERSE
   Hero Module
   Production Hero Engine
========================================================== */

class HeroModule {

    constructor() {

        this.hero = null;
        this.content = null;
        this.glow = null;
        this.button = null;

        this.isTouch =
            window.matchMedia("(pointer: coarse)").matches;

        this.reducedMotion =
            window.matchMedia(
                "(prefers-reduced-motion: reduce)"
            ).matches;

        this.mouse = {
            x: 0,
            y: 0
        };

        this.current = {
            x: 0,
            y: 0
        };

        this.rafId = null;

        /* Bound handlers
           Keeps add/removeEventListener consistent */
        this.handleMouseMove =
            this.handleMouseMove.bind(this);

        this.handleResize =
            this.handleResize.bind(this);

        this.animate =
            this.animate.bind(this);
    }


    /* ==========================
       INIT
    ========================== */

    init() {

        this.cacheDom();

        if (!this.hero) {
            return;
        }

        this.bindEvents();
        this.setupButton();
        this.reveal();

        /*
         * Don't run the 3D animation loop
         * when reduced motion is enabled.
         */
        if (!this.reducedMotion) {
            this.start();
        }
    }


    /* ==========================
       DOM CACHE
    ========================== */

    cacheDom() {

        this.hero =
            document.querySelector("#hero");

        this.content =
            document.querySelector(".hero-content");

        this.glow =
            document.querySelector(".hero-glow");

        this.button =
            document.querySelector("#beginJourneyBtn");
    }


    /* ==========================
       EVENTS
    ========================== */

    bindEvents() {

        if (!this.isTouch && !this.reducedMotion) {

            window.addEventListener(
                "mousemove",
                this.handleMouseMove,
                {
                    passive: true
                }
            );
        }

        window.addEventListener(
            "resize",
            this.handleResize,
            {
                passive: true
            }
        );
    }


    /* ==========================
       START
    ========================== */

    start() {

        if (this.rafId) {
            return;
        }

        this.animate();
    }


    /* ==========================
       MOUSE MOVE
    ========================== */

    handleMouseMove(event) {

        if (this.isTouch || this.reducedMotion) {
            return;
        }

        this.mouse.x =
            (event.clientX / window.innerWidth - 0.5) * 2;

        this.mouse.y =
            (event.clientY / window.innerHeight - 0.5) * 2;
    }


    /* ==========================
       RESIZE
    ========================== */

    handleResize() {

        this.mouse.x = 0;
        this.mouse.y = 0;
    }


    /* ==========================
       ANIMATION LOOP
    ========================== */

    animate() {

        if (this.reducedMotion) {
            return;
        }

        this.current.x +=
            (this.mouse.x - this.current.x) * 0.08;

        this.current.y +=
            (this.mouse.y - this.current.y) * 0.08;

        this.updateContent();
        this.updateGlow();

        this.rafId =
            requestAnimationFrame(this.animate);
    }


    /* ==========================
       HERO CONTENT
    ========================== */

    updateContent() {

        if (!this.content) {
            return;
        }

        const rotateY =
            this.current.x * 6;

        const rotateX =
            this.current.y * -4;

        this.content.style.transform =
            `perspective(1200px)
             rotateX(${rotateX}deg)
             rotateY(${rotateY}deg)`;
    }


    /* ==========================
       HERO GLOW
    ========================== */

    updateGlow() {

        if (!this.glow) {
            return;
        }

        const moveX =
            this.current.x * 35;

        const moveY =
            this.current.y * 35;

        this.glow.style.transform =
            `translate(
                calc(-50% + ${moveX}px),
                calc(-50% + ${moveY}px)
            )`;
    }


    /* ==========================
       BUTTON EFFECT
    ========================== */

    setupButton() {

        if (!this.button) {
            return;
        }

        this.button.addEventListener(
            "mouseenter",
            () => {

                if (this.isTouch) {
                    return;
                }

                this.button.style.transform =
                    "translateY(-5px) scale(1.03)";
            }
        );

        this.button.addEventListener(
            "mouseleave",
            () => {

                this.button.style.transform = "";
            }
        );
    }


    /* ==========================
       SCROLL REVEAL
    ========================== */

    reveal() {

        if (!this.content) {
            return;
        }

        requestAnimationFrame(() => {

            this.content.classList.add(
                "hero-visible"
            );

        });
    }


    /* ==========================
       DESTROY
    ========================== */

    destroy() {

        if (this.rafId) {

            cancelAnimationFrame(
                this.rafId
            );

            this.rafId = null;
        }

        window.removeEventListener(
            "mousemove",
            this.handleMouseMove
        );

        window.removeEventListener(
            "resize",
            this.handleResize
        );
    }
}


/* ==========================================================
   MODULE BOOTSTRAP
========================================================== */

document.addEventListener(
    "DOMContentLoaded",
    () => {

        window.heroModule =
            new HeroModule();

        window.heroModule.init();
    }
);


/* ==========================================================
   HERO MODULE PATCH
   Production Cleanup
========================================================== */

window.addEventListener(
    "beforeunload",
    () => {

        if (window.heroModule) {

            window.heroModule.destroy();
        }
    }
);

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