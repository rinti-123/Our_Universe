/* ==========================================================
   OUR UNIVERSE
   FINAL QUESTION
   COMPLETE FINAL JAVASCRIPT
========================================================== */

document.addEventListener("DOMContentLoaded", () => {

    /* ======================================================
       ELEMENTS
    ====================================================== */

    const finalSection =
        document.querySelector(".final-question-section");

    const finalContent =
        document.querySelector(".final-question-content");

    const finalButton =
        document.querySelector("#final-question-button");


    /* ======================================================
       SAFETY CHECK
    ====================================================== */

    if (!finalSection || !finalContent || !finalButton) {

        console.warn(
            "Final Question elements not found."
        );

        return;
    }


    /* ======================================================
       STAR FIELD
    ====================================================== */

    const starField =
        document.createElement("div");

    starField.className =
        "final-question-stars";


    for (let i = 0; i < 45; i++) {

        const star =
            document.createElement("span");

        star.className =
            "final-star";

        star.style.left =
            Math.random() * 100 + "%";

        star.style.top =
            Math.random() * 100 + "%";

        const size =
            Math.random() * 2 + 1;

        star.style.width =
            size + "px";

        star.style.height =
            size + "px";

        star.style.animationDelay =
            Math.random() * 4 + "s";

        starField.appendChild(star);
    }


    finalSection.appendChild(starField);


    /* ======================================================
       OPEN MY HEART
    ====================================================== */

    finalButton.addEventListener("click", () => {

        if (finalButton.disabled) {
            return;
        }

        finalButton.disabled = true;


        /* ==================================================
           FADE ORIGINAL CONTENT
        ================================================== */

        finalContent.style.transition =
            "opacity 1.4s ease, transform 1.4s ease";

        finalContent.style.opacity =
            "0";

        finalContent.style.transform =
            "translateY(-20px) scale(.96)";


        /* ==================================================
           ATMOSPHERE
        ================================================== */

        const atmosphere =
            document.querySelector(
                ".final-question-atmosphere"
            );

        if (atmosphere) {

            atmosphere.style.transition =
                "transform 2.5s ease, opacity 2.5s ease";

            atmosphere.style.transform =
                "scale(1.35)";

            atmosphere.style.opacity =
                "1";
        }


        /* ==================================================
           CINEMATIC MESSAGE
        ================================================== */

        setTimeout(() => {

            const finalReveal =
                document.createElement("div");

            finalReveal.className =
                "final-question-reveal";

            finalReveal.innerHTML = `
                <p class="final-reveal-kicker">
                    IN THIS ENDLESS UNIVERSE...
                </p>

                <h2 class="final-reveal-heading">
                    I would still choose you.
                </h2>

                <p class="final-reveal-line">
                    In every timeline,<br>
                    in every version of our story,<br>
                    I would still find my way to you.
                </p>

                <div class="final-reveal-divider"></div>
            `;

            finalSection.appendChild(
                finalReveal
            );


            requestAnimationFrame(() => {

                finalReveal.classList.add(
                    "is-visible"
                );

            });

        }, 1600);


        /* ==================================================
           FUNNY QUESTION
        ================================================== */

        setTimeout(() => {

            const oldReveal =
                document.querySelector(
                    ".final-question-reveal"
                );

            if (oldReveal) {

                oldReveal.classList.add(
                    "is-finished"
                );
            }


            const funnyQuestion =
                document.createElement("div");

            funnyQuestion.className =
                "final-funny-question";


            funnyQuestion.innerHTML = `
                <p class="final-funny-small">
                    okay... enough dramatic universe stuff.
                </p>

                <h2 class="final-funny-heading">
                    Will You Be My Universe?
                </h2>

                <div class="final-funny-buttons">

                    <button
                        type="button"
                        class="final-yes-button">

                        YES ✨

                    </button>

                    <button
                        type="button"
                        class="final-think-button">

                        THINK AGAIN 🤨

                    </button>

                </div>
            `;


            finalSection.appendChild(
                funnyQuestion
            );


            requestAnimationFrame(() => {

                funnyQuestion.classList.add(
                    "is-visible"
                );

            });


            /* ==================================================
               MOBILE JOYSTICK
            ================================================== */

            createMobileJoystick(
                funnyQuestion
            );

        }, 5200);

    });


    /* ======================================================
       THINK AGAIN
       DESKTOP RUNAWAY SYSTEM
    ====================================================== */

    let thinkAttempts = 0;


    function moveThinkButton(
        thinkButton,
        funnyQuestion
    ) {

        if (!thinkButton || !funnyQuestion) {
            return;
        }


        thinkAttempts++;


        /* ===========================
           FUNNY TEXT
        =========================== */

        if (thinkAttempts === 1) {

            thinkButton.textContent =
                "ARE YOU SURE? 👀";

        }

        else if (thinkAttempts === 2) {

            thinkButton.textContent =
                "NICE TRY 😂";

        }

        else if (thinkAttempts === 3) {

            thinkButton.textContent =
                "NOPE 😭";

        }

        else {

            thinkButton.textContent =
                "YOU CAN'T ESCAPE ✋";
        }


        /* ===========================
           RANDOM ESCAPE
        =========================== */

        const rect =
            funnyQuestion.getBoundingClientRect();


        const maxX =
            Math.max(
                100,
                Math.min(
                    180,
                    rect.width / 2 - 60
                )
            );


        const maxY =
            Math.max(
                80,
                Math.min(
                    120,
                    rect.height / 2 - 40
                )
            );


        const randomX =
            (Math.random() * maxX * 2) -
            maxX;


        const randomY =
            (Math.random() * maxY * 2) -
            maxY;


        thinkButton.style.transform =
            `translate(${randomX}px, ${randomY}px)`;

    }


    /* ======================================================
       DESKTOP MOUSEOVER
    ====================================================== */

    document.addEventListener(
        "mouseover",
        (event) => {

            const thinkButton =
                event.target.closest(
                    ".final-think-button"
                );

            if (!thinkButton) {
                return;
            }


            /* ------------------------------------------
               PHONE-এ mouseover system চালাবো না
            ------------------------------------------ */

            if (
                window.matchMedia(
                    "(max-width: 768px)"
                ).matches
            ) {
                return;
            }


            const funnyQuestion =
                thinkButton.closest(
                    ".final-funny-question"
                );

            if (!funnyQuestion) {
                return;
            }


            moveThinkButton(
                thinkButton,
                funnyQuestion
            );

        }
    );


    /* ======================================================
       MOBILE JOYSTICK CREATOR
    ====================================================== */

    function createMobileJoystick(
        funnyQuestion
    ) {

        /* ------------------------------------------
           আগে থেকে থাকলে duplicate বানাবে না
        ------------------------------------------ */

        const existingJoystick =
            finalSection.querySelector(
                ".mobile-proposal-joystick"
            );

        if (existingJoystick) {

            existingJoystick.remove();

        }


        const joystick =
            document.createElement("div");

        joystick.className =
            "mobile-proposal-joystick";


        joystick.innerHTML = `

            <div class="joystick-label">
                MOVE IT 😈
            </div>

            <div class="joystick-pad">

                <button
                    type="button"
                    class="joystick-button joystick-up"
                    aria-label="Move up">
                    ↑
                </button>

                <button
                    type="button"
                    class="joystick-button joystick-left"
                    aria-label="Move left">
                    ←
                </button>

                <button
                    type="button"
                    class="joystick-button joystick-center"
                    aria-label="Reset">
                    ●
                </button>

                <button
                    type="button"
                    class="joystick-button joystick-right"
                    aria-label="Move right">
                    →
                </button>

                <button
                    type="button"
                    class="joystick-button joystick-down"
                    aria-label="Move down">
                    ↓
                </button>

            </div>

        `;


        finalSection.appendChild(
            joystick
        );


        /* ==================================================
           BUTTONS
        ================================================== */

        const up =
            joystick.querySelector(
                ".joystick-up"
            );

        const left =
            joystick.querySelector(
                ".joystick-left"
            );

        const center =
            joystick.querySelector(
                ".joystick-center"
            );

        const right =
            joystick.querySelector(
                ".joystick-right"
            );

        const down =
            joystick.querySelector(
                ".joystick-down"
            );


        /* ==================================================
           MOVE FUNCTION
        ================================================== */

        function moveDirection(
            direction
        ) {

            const thinkButton =
                funnyQuestion.querySelector(
                    ".final-think-button"
                );

            if (!thinkButton) {
                return;
            }


            let currentX =
                Number(
                    thinkButton.dataset.joystickX || 0
                );

            let currentY =
                Number(
                    thinkButton.dataset.joystickY || 0
                );


            const step = 45;


            if (direction === "up") {
                currentY -= step;
            }

            if (direction === "down") {
                currentY += step;
            }

            if (direction === "left") {
                currentX -= step;
            }

            if (direction === "right") {
                currentX += step;
            }


            /* ------------------------------------------
               সীমা
            ------------------------------------------ */

            currentX =
                Math.max(
                    -150,
                    Math.min(
                        150,
                        currentX
                    )
                );


            currentY =
                Math.max(
                    -100,
                    Math.min(
                        100,
                        currentY
                    )
                );


            thinkButton.dataset.joystickX =
                currentX;

            thinkButton.dataset.joystickY =
                currentY;


            thinkButton.style.transform =
                `translate(${currentX}px, ${currentY}px)`;


            /* ------------------------------------------
               Funny text
            ------------------------------------------ */

            thinkAttempts++;


            if (thinkAttempts === 1) {

                thinkButton.textContent =
                    "ARE YOU SURE? 👀";

            }

            else if (thinkAttempts === 2) {

                thinkButton.textContent =
                    "NICE TRY 😂";

            }

            else if (thinkAttempts === 3) {

                thinkButton.textContent =
                    "NOPE 😭";

            }

            else {

                thinkButton.textContent =
                    "YOU CAN'T ESCAPE ✋";
            }

        }


        /* ==================================================
           RESET
        ================================================== */

        function resetThinkButton() {

            const thinkButton =
                funnyQuestion.querySelector(
                    ".final-think-button"
                );

            if (!thinkButton) {
                return;
            }


            thinkButton.dataset.joystickX =
                "0";

            thinkButton.dataset.joystickY =
                "0";


            thinkButton.style.transform =
                "translate(0, 0)";

        }


        /* ==================================================
           TOUCH / POINTER EVENTS
        ================================================== */

        function bindJoystick(
            button,
            direction
        ) {

            if (!button) {
                return;
            }


            button.addEventListener(
                "pointerdown",
                (event) => {

                    event.preventDefault();

                    if (
                        direction ===
                        "center"
                    ) {

                        resetThinkButton();

                        return;
                    }


                    moveDirection(
                        direction
                    );

                }
            );

        }


        bindJoystick(
            up,
            "up"
        );

        bindJoystick(
            left,
            "left"
        );

        bindJoystick(
            center,
            "center"
        );

        bindJoystick(
            right,
            "right"
        );

        bindJoystick(
            down,
            "down"
        );


        /* ==================================================
           PHONE-এ SHOW
        ================================================== */

        if (
            window.matchMedia(
                "(max-width: 768px)"
            ).matches
        ) {

            requestAnimationFrame(() => {

                joystick.classList.add(
                    "is-visible"
                );

            });

        }

    }


    /* ======================================================
       YES BUTTON
       FINAL CELEBRATION
    ====================================================== */

    document.addEventListener(
        "click",
        (event) => {

            const yesButton =
                event.target.closest(
                    ".final-yes-button"
                );

            if (!yesButton) {
                return;
            }


            /* ===========================
               GET OLD ELEMENTS
            =========================== */

            const funnyQuestion =
                document.querySelector(
                    ".final-funny-question"
                );

            const oldReveal =
                document.querySelector(
                    ".final-question-reveal"
                );

            const joystick =
                document.querySelector(
                    ".mobile-proposal-joystick"
                );


            /* ===========================
               REMOVE OLD CONTENT
            =========================== */

            if (funnyQuestion) {

                funnyQuestion.classList.add(
                    "is-finished"
                );

            }


            if (oldReveal) {

                oldReveal.classList.add(
                    "is-finished"
                );

            }


            if (joystick) {

                joystick.classList.remove(
                    "is-visible"
                );

                setTimeout(() => {

                    joystick.remove();

                }, 600);

            }


            /* ===========================
               CREATE CELEBRATION
            =========================== */

            const celebration =
                document.createElement("div");

            celebration.className =
                "final-celebration";


            celebration.innerHTML = `

                <div class="celebration-content">

                    <p class="celebration-kicker">
                        THE UNIVERSE HAS DECIDED
                    </p>

                    <h2 class="celebration-heading">
                        THE UNIVERSE SAID YES. ✨
                    </h2>

                    <p class="celebration-line">
                        Well... that escalated beautifully.
                    </p>

                    <span class="celebration-heart">
                        ♡
                    </span>

                </div>

            `;


            finalSection.appendChild(
                celebration
            );


            /* ===========================
               SHOW CELEBRATION
            =========================== */

            requestAnimationFrame(() => {

                celebration.classList.add(
                    "is-visible"
                );

            });


            /* ==================================================
               FIREWORK FUNCTION
            ================================================== */

            function createFirework(
                x,
                y
            ) {

                const firework =
                    document.createElement("div");

                firework.className =
                    "firework";

                firework.style.left =
                    x + "%";

                firework.style.top =
                    y + "%";


                for (let i = 0; i < 32; i++) {

                    const particle =
                        document.createElement("span");

                    particle.className =
                        "firework-particle";


                    const angle =
                        (Math.PI * 2 / 32) * i;


                    const distance =
                        55 +
                        Math.random() * 75;


                    const moveX =
                        Math.cos(angle) *
                        distance;


                    const moveY =
                        Math.sin(angle) *
                        distance;


                    particle.style.setProperty(
                        "--particle-x",
                        moveX + "px"
                    );


                    particle.style.setProperty(
                        "--particle-y",
                        moveY + "px"
                    );


                    firework.appendChild(
                        particle
                    );

                }


                celebration.appendChild(
                    firework
                );

            }


            /* ==================================================
               FIREWORKS
            ================================================== */

            setTimeout(() => {
                createFirework(20, 28);
            }, 300);


            setTimeout(() => {
                createFirework(78, 25);
            }, 650);


            setTimeout(() => {
                createFirework(50, 18);
            }, 1000);


            setTimeout(() => {
                createFirework(30, 65);
            }, 1350);


            setTimeout(() => {
                createFirework(72, 65);
            }, 1700);


            setTimeout(() => {
                createFirework(50, 75);
            }, 2100);


            /* ==================================================
               UNIVERSE UNLOCKED
               + NASA INSIDE JOKE
            ================================================== */

            setTimeout(() => {

                const unlocked =
                    document.createElement("div");

                unlocked.className =
                    "universe-unlocked";


                unlocked.innerHTML = `

                    <div class="unlocked-content">

                        <p class="unlocked-kicker">
                            CONNECTION CONFIRMED
                        </p>

                        <h2 class="unlocked-heading">
                            Universe Unlocked ✨
                        </h2>

                        <p class="unlocked-line">
                            Congratulations.<br>
                            You have officially survived
                            the most dramatic question
                            in the entire universe.
                        </p>

                        <span class="unlocked-emoji">
                            🌌
                        </span>


                        <div class="universe-inside-joke">

                            <span class="inside-joke-icon">
                                🛰️
                            </span>

                            <p class="inside-joke-title">
                                NASA has been notified.
                            </p>

                            <p class="inside-joke-line">
                                Apparently this is now
                                an officially recognized universe.
                            </p>

                            <button
                                type="button"
                                class="inside-joke-button">

                                okay 😂

                            </button>

                        </div>

                    </div>

                `;


                celebration.appendChild(
                    unlocked
                );


                requestAnimationFrame(() => {

                    unlocked.classList.add(
                        "is-visible"
                    );

                });


                /* ===========================
                   NASA JOKE BUTTON
                =========================== */

                const jokeButton =
                    unlocked.querySelector(
                        ".inside-joke-button"
                    );


                if (jokeButton) {

                    jokeButton.addEventListener(
                        "click",
                        () => {

                            const joke =
                                unlocked.querySelector(
                                    ".universe-inside-joke"
                                );

                            if (!joke) {
                                return;
                            }


                            joke.style.transition =
                                "opacity .5s ease, transform .5s ease";

                            joke.style.opacity =
                                "0";

                            joke.style.transform =
                                "scale(.9)";

                            setTimeout(() => {

                                joke.style.display =
                                    "none";

                            }, 500);

                        }
                    );

                }

            }, 4200);


            /* ==================================================
               FINAL ENDING PAGE
            ================================================== */

            setTimeout(() => {

                const ending =
                    document.querySelector(
                        ".universe-ending-section"
                    );

                if (!ending) {

                    console.warn(
                        "Final ending section not found."
                    );

                    return;
                }


                ending.classList.add(
                    "is-visible"
                );


                console.log(
                    "FINAL ENDING REVEALED"
                );

            }, 9500);

        }

    );


    /* ======================================================
       REPLAY BUTTON
    ====================================================== */

    const replayButton =
        document.querySelector(
            "#ending-replay-button"
        );


    if (replayButton) {

        replayButton.addEventListener(
            "click",
            () => {

                window.location.reload();

            }
        );

    }

});


/* ==========================================================
   MEMORY AUTO SCROLL
   Cinematic Journey
========================================================== */

document.addEventListener("DOMContentLoaded", () => {

    const memorySection =
        document.querySelector(
            ".universe-remembers"
        );

    const memoryScenes =
        document.querySelectorAll(
            ".universe-remembers .memory-scene"
        );


    if (
        !memorySection ||
        memoryScenes.length < 2
    ) {

        return;

    }


    let currentScene = 0;
    let timer = null;
    let sectionActive = false;
    let userScrolling = false;


    /* ======================================================
       GO TO NEXT MEMORY
    ====================================================== */

    function nextMemory() {

        if (
            !sectionActive ||
            userScrolling
        ) {

            return;

        }


        if (
            currentScene >=
            memoryScenes.length - 1
        ) {

            clearInterval(timer);

            return;

        }


        currentScene++;


        memoryScenes[
            currentScene
        ].scrollIntoView({

            behavior: "smooth",

            block: "start"

        });

    }


    /* ======================================================
       START JOURNEY
    ====================================================== */

    function startJourney() {

        clearInterval(timer);


        timer = setInterval(() => {

            nextMemory();

        }, 7000);

    }


    /* ======================================================
       DETECT MEMORY SECTION
    ====================================================== */

    const sectionObserver =
        new IntersectionObserver(

            (entries) => {

                entries.forEach(
                    (entry) => {

                        if (
                            entry.isIntersecting
                        ) {

                            sectionActive =
                                true;

                            startJourney();

                        }

                        else {

                            sectionActive =
                                false;

                            clearInterval(
                                timer
                            );

                        }

                    }
                );

            },

            {
                threshold: 0.15
            }

        );


    sectionObserver.observe(
        memorySection
    );


    /* ======================================================
       MANUAL SCROLL
    ====================================================== */

    window.addEventListener(
        "wheel",
        () => {

            userScrolling =
                true;


            clearTimeout(
                window.memoryManualScroll
            );


            window.memoryManualScroll =
                setTimeout(
                    () => {

                        userScrolling =
                            false;


                        if (
                            sectionActive
                        ) {

                            startJourney();

                        }

                    },
                    2500
                );

        },
        {
            passive: true
        }
    );

});