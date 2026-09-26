/* ==========================================
   OUR UNIVERSE
   Main JavaScript
========================================== */

"use strict";
/* ==========================================
   DOM ELEMENTS
========================================== */

const loadingScreen = document.getElementById("loading-screen");
const loadingText = document.getElementById("loadingText");
const loadingBar = document.querySelector(".loading-progress");
const beginJourneyBtn = document.getElementById("beginJourneyBtn");

/* ==========================================
   LOADING TEXTS
========================================== */

const loadingMessages = [
    "Loading Memories...",
    "Finding My Angry Bird...",
    "Collecting Smiles...",
    "Looking for Sunshine...",
    "Calling Moonlight...",
    "Preparing Our Universe...",
    "Our little universe is almost ready..."
];

/* ==========================================
   UPDATE LOADING TEXT
========================================== */

let messageIndex = 1;

function updateLoadingText() {

    if (messageIndex < loadingMessages.length) {

        loadingText.style.opacity = 0;

        setTimeout(() => {

            loadingText.textContent = loadingMessages[messageIndex];

            loadingText.style.opacity = 1;

            messageIndex++;

        }, 250);

    }

}

/* ==========================================
   LOADING BAR
========================================== */

let progress = 0;

const loadingInterval = setInterval(() => {

    progress++;

    loadingBar.style.width = progress + "%";

   if (progress % 15 === 0 && progress < 100) {
    updateLoadingText();
}

    if (progress >= 100) {
    clearInterval(loadingInterval);

    loadingText.style.opacity = "0";

    setTimeout(() => {
        loadingText.textContent = "Welcome ❤️";
        loadingText.style.opacity = "1";
    }, 250);

    setTimeout(() => {
        loadingScreen.classList.add("hidden");
    }, 1400);
}

}, 45);


/* ==========================================
   BUTTON EFFECT
========================================== */

beginJourneyBtn.addEventListener("click", () => {

    beginJourneyBtn.style.transform = "scale(.95)";

    setTimeout(() => {
        beginJourneyBtn.style.transform = "";
    }, 150);

    const nextSection =
        beginJourneyBtn.closest("section")?.nextElementSibling;

    if(!nextSection){
        return;
    }

    nextSection.scrollIntoView({
        behavior:"smooth",
        block:"start"
    });

});

/* ==========================================
   END
========================================== */
/* ==========================================================
   COSMIC INVESTIGATION
   Part 1 — Fun / Personal Layer
========================================================== */

(() => {

    "use strict";

    const section =
        document.getElementById(
            "cosmic-investigation"
        );

    const status =
        document.getElementById(
            "investigation-status"
        );

    const output =
        document.getElementById(
            "investigation-output"
        );

    const button =
        document.getElementById(
            "investigation-button"
        );


    if (
        !section ||
        !status ||
        !output ||
        !button
    ){
        return;
    }


    let started = false;


    const lines = [

        "Scanning memory patterns...",

        "Scanning emotional activity...",

        "Scanning romantic activity...",

        "Unexpected behaviour detected.",

        "Cross-checking universe records..."

    ];


    function addLine(text){

        const line =
            document.createElement("div");

        line.className =
            "investigation-output-line";

        line.textContent = text;

        output.appendChild(line);
    }


    function runScan(){

        if(started){
            return;
        }

        started = true;

        button.style.display = "none";

        output.innerHTML = "";

        let index = 0;


        function next(){

            if(index >= lines.length){

                setTimeout(() => {

                    addLine(
                        "Something doesn't add up."
                    );

                    status.textContent =
                        "ANALYSIS INCONCLUSIVE.";

                    setTimeout(() => {

                        button.textContent =
                            "Continue →";

                        button.style.display =
                            "inline-flex";

                    }, 900);

                }, 500);

                return;
            }


            status.textContent =
                index === 0
                    ? "Initializing scan..."
                    : "Analyzing universe data...";


            addLine(
                lines[index]
            );


            index++;


            setTimeout(
                next,
                1050
            );

        }


        next();

    }


    button.addEventListener(
    "click",
    () => {

        if(!started){

            runScan();
            return;
        }

        document
            .getElementById(
                "evidence-archive"
            )
            ?.scrollIntoView({
                behavior:"smooth"
            });

    }
);
/* ==========================================================
   ROMANCE LEVEL DETECTOR
   Part 3 — Fun / Personal Interaction
========================================================== */

(() => {

    "use strict";


    const section =
        document.getElementById(
            "romance-detector"
        );

    const meterA =
        document.getElementById(
            "romance-meter-a"
        );

    const meterB =
        document.getElementById(
            "romance-meter-b"
        );

    const percentA =
        document.getElementById(
            "romance-percent-a"
        );

    const percentB =
        document.getElementById(
            "romance-percent-b"
        );

    const resultA =
        document.getElementById(
            "romance-result-a"
        );

    const resultB =
        document.getElementById(
            "romance-result-b"
        );

    const finalMessage =
        document.getElementById(
            "romance-detector-final"
        );


    if (
        !section ||
        !meterA ||
        !meterB ||
        !percentA ||
        !percentB ||
        !resultA ||
        !resultB ||
        !finalMessage
    ){

        return;

    }


    let started = false;


    function animateMeter(
        meter,
        percentage,
        display,
        callback
    ){

        let current = 0;


        const interval =
            setInterval(() => {

                current++;

                meter.style.width =
                    `${current}%`;

                display.textContent =
                    `${current}%`;


                if(current >= percentage){

                    clearInterval(interval);

                    if(callback){
                        callback();
                    }

                }

            }, 18);

    }


    function runAnalysis(){

        if(started){
            return;
        }

        started = true;


        /* ===========================
           SUBJECT A
        =========================== */

        animateMeter(
            meterA,
            100,
            percentA,
            () => {

                resultA.textContent =
                    "Status: Hopelessly Romantic.";

            }
        );


        /* ===========================
           SUBJECT B
        =========================== */

        setTimeout(() => {

            animateMeter(
                meterB,
                27,
                percentB,
                () => {

                    resultB.textContent =
                        "Recalculating...";

                    setTimeout(() => {

                        animateMeter(
                            meterB,
                            43,
                            percentB,
                            () => {

                                resultB.textContent =
                                    "This is getting suspicious.";

                                setTimeout(() => {

                                    animateMeter(
                                        meterB,
                                        68,
                                        percentB,
                                        () => {

                                            resultB.textContent =
                                                "Unexpected progress detected.";

                                            setTimeout(() => {

                                                animateMeter(
                                                    meterB,
                                                    91,
                                                    percentB,
                                                    () => {

                                                        resultB.textContent =
                                                            "Highly suspicious.";

                                                        setTimeout(() => {

                                                            animateMeter(
                                                                meterB,
                                                                100,
                                                                percentB,
                                                                () => {

                                                                    resultB.textContent =
                                                                        "Analysis complete.";

                                                                    setTimeout(() => {

                                                                        finalMessage.classList.add(
                                                                            "is-visible"
                                                                        );

                                                                    }, 700);

                                                                }
                                                            );

                                                        }, 900);

                                                    }
                                                );

                                            }, 900);

                                        }
                                    );

                                }, 900);

                            }
                        );

                    }, 900);

                }
            );

        }, 1800);

    }


    /* ===========================
       START WHEN VISIBLE
    =========================== */

    if(
        "IntersectionObserver"
        in window
    ){

        const observer =
            new IntersectionObserver(
                entries => {

                    entries.forEach(
                        entry => {

                            if(
                                entry.isIntersecting
                            ){

                                runAnalysis();

                                observer.disconnect();

                            }

                        }
                    );

                },
                {
                    threshold:.35
                }
            );


        observer.observe(section);

    }else{

        runAnalysis();

    }


})();
/* ==========================================================
   WHO IS MORE ROMANTIC?
   Part 4 — Fun / Personal Interaction
========================================================== */

(() => {

    "use strict";


    const meButton =
        document.getElementById(
            "choice-me"
        );

    const youButton =
        document.getElementById(
            "choice-you"
        );

    const response =
        document.getElementById(
            "romantic-choice-response"
        );

    const continueButton =
        document.getElementById(
            "romantic-choice-continue"
        );

    const section =
        document.getElementById(
            "romantic-choice"
        );


    if (
        !meButton ||
        !youButton ||
        !response ||
        !continueButton ||
        !section
    ){

        return;

    }


    let answered = false;


    function showResponse(
        title,
        message
    ){

        response.innerHTML = `
            <strong>${title}</strong>
            <span>${message}</span>
        `;


        response.classList.add(
            "is-visible"
        );


        continueButton.style.display =
            "inline-flex";

    }


    meButton.addEventListener(
        "click",
        () => {

            answered = true;


            showResponse(
                "Lies detected. 😌",
                "The universe has reviewed your answer."
            );

        }
    );


    youButton.addEventListener(
        "click",
        () => {

            answered = true;


            showResponse(
                "Finally. Some honesty. 🙄",
                "The universe approves."
            );

        }
    );


    continueButton.addEventListener(
    "click",
    () => {

        if(!answered){
            return;
        }

        const nextSection =
            document.getElementById(
                "universe-verdict"
            );

        if(!nextSection){
            return;
        }

        nextSection.scrollIntoView({
            behavior:"smooth",
            block:"start"
        });

    }
);

})();
/* ==========================================================
   UNIVERSE VERDICT
   Part 5 — Fun / Personal Interaction
========================================================== */

(() => {

    "use strict";


    const section =
        document.getElementById(
            "universe-verdict"
        );

    const diagnosis =
        document.getElementById(
            "verdict-diagnosis"
        );

    const finalVerdict =
        document.getElementById(
            "verdict-final"
        );

    const continueButton =
        document.getElementById(
            "verdict-continue"
        );

    const fills =
        section
            ? section.querySelectorAll(
                ".verdict-fill"
            )
            : [];


    if (
        !section ||
        !diagnosis ||
        !finalVerdict ||
        !continueButton
    ){

        return;

    }


    let started = false;


    function revealVerdict(){

        if(started){
            return;
        }

        started = true;


        /* ===========================
           REVEAL BARS
        =========================== */

        setTimeout(() => {

            fills.forEach(fill => {

                const width =
                    getComputedStyle(fill)
                        .getPropertyValue(
                            "--verdict-width"
                        );

                fill.style.width =
                    width;

            });

        }, 400);


        /* ===========================
           DIAGNOSIS
        =========================== */

        setTimeout(() => {

            diagnosis.classList.add(
                "is-visible"
            );

        }, 1800);


        /* ===========================
           FINAL VERDICT
        =========================== */

        setTimeout(() => {

            finalVerdict.classList.add(
                "is-visible"
            );

        }, 3100);

    }


    if(
        "IntersectionObserver"
        in window
    ){

        const observer =
            new IntersectionObserver(
                entries => {

                    entries.forEach(
                        entry => {

                            if(
                                entry.isIntersecting
                            ){

                                revealVerdict();

                                observer.disconnect();

                            }

                        }
                    );

                },
                {
                    threshold:.3
                }
            );


        observer.observe(section);

    }else{

        revealVerdict();

    }


    /* ===========================
       CONTINUE
    =========================== */

    continueButton.addEventListener(
    "click",
    () => {

        const nextSection =
            document.getElementById(
                "personal-diagnosis"
            );

        if(!nextSection){
            return;
        }

        nextSection.scrollIntoView({
            behavior:"smooth",
            block:"start"
        });

    }
);


})();
/* ==========================================================
   BUT THE UNIVERSE KNOWS
   Part 6 — Emotional Transition
========================================================== */

(() => {

    "use strict";


    const section =
        document.getElementById(
            "universe-knows"
        );

    const line1 =
        section?.querySelector(
            ".knows-line-1"
        );

    const line2 =
        section?.querySelector(
            ".knows-line-2"
        );

    const line3 =
        section?.querySelector(
            ".knows-line-3"
        );

    const line4 =
        section?.querySelector(
            ".knows-line-4"
        );

    const finalLine =
        section?.querySelector(
            ".knows-final"
        );

    const continueButton =
        document.getElementById(
            "knows-continue"
        );


    if(
        !section ||
        !line1 ||
        !line2 ||
        !line3 ||
        !line4 ||
        !finalLine ||
        !continueButton
    ){

        return;

    }


    let started = false;


    function reveal(element){

        if(element){

            element.classList.add(
                "is-visible"
            );

        }

    }


    function startEmotionalSequence(){

        if(started){

            return;

        }

        started = true;


        /* ===========================
           LINE 1
        =========================== */

        setTimeout(() => {

            reveal(line1);

        }, 500);


        /* ===========================
           LINE 2
        =========================== */

        setTimeout(() => {

            reveal(line2);

        }, 2300);


        /* ===========================
           LINE 3
        =========================== */

        setTimeout(() => {

            reveal(line3);

        }, 5200);


        /* ===========================
           LINE 4
        =========================== */

        setTimeout(() => {

            reveal(line4);

        }, 8500);


        /* ===========================
           FINAL
        =========================== */

        setTimeout(() => {

            reveal(finalLine);

        }, 10500);


        /* ===========================
           CONTINUE
        =========================== */

        setTimeout(() => {

            continueButton.classList.add(
                "is-visible"
            );

        }, 12500);

    }


    if(
        "IntersectionObserver"
        in window
    ){

        const observer =
            new IntersectionObserver(
                entries => {

                    entries.forEach(
                        entry => {

                            if(
                                entry.isIntersecting
                            ){

                                startEmotionalSequence();

                                observer.disconnect();

                            }

                        }
                    );

                },
                {
                    threshold:.35
                }
            );


        observer.observe(section);

    }else{

        startEmotionalSequence();

    }


    /* ===========================
       CONTINUE
    =========================== */

    continueButton.addEventListener(
    "click",
    () => {

        const nextSection =
            document.getElementById(
                "memory-constellation"
            );

        if(!nextSection){
            return;
        }

        nextSection.scrollIntoView({
            behavior:"smooth",
            block:"start"
        });

    }
);

})();
/* ==========================================================
   PERSONAL DIAGNOSIS
   Part 5.5 — Neem Pataar Rosh Reveal
========================================================== */

(() => {

    "use strict";


    const section =
        document.getElementById(
            "personal-diagnosis"
        );

    const intro =
        document.getElementById(
            "diagnosis-intro"
        );

    const source =
        document.getElementById(
            "diagnosis-source"
        );

    const build =
        document.getElementById(
            "diagnosis-build"
        );

    const reveal =
        document.getElementById(
            "diagnosis-reveal"
        );

    const after =
        document.getElementById(
            "diagnosis-after"
        );

    const accepted =
        document.getElementById(
            "diagnosis-accepted"
        );


    if(
        !section ||
        !intro ||
        !source ||
        !build ||
        !reveal ||
        !after ||
        !accepted
    ){

        return;

    }


    let started = false;


    function show(element){

        element.classList.add(
            "is-visible"
        );

    }


    function startDiagnosis(){

        if(started){

            return;

        }

        started = true;


        /* ===========================
           INTRO
        =========================== */

        setTimeout(() => {

            show(intro);

        }, 500);


        /* ===========================
           SOURCE
        =========================== */

        setTimeout(() => {

            show(source);

        }, 2800);


        /* ===========================
           BUILD UP
        =========================== */

        setTimeout(() => {

            show(build);

        }, 5400);


        /* ===========================
           REVEAL
        =========================== */

        setTimeout(() => {

            show(reveal);

        }, 7100);


        /* ===========================
           AFTER REVEAL
        =========================== */

        setTimeout(() => {

            show(after);

        }, 8700);


        /* ===========================
           ACCEPTED
        =========================== */

        setTimeout(() => {

            show(accepted);

        }, 10100);

    }


    if(
        "IntersectionObserver"
        in window
    ){

        const observer =
            new IntersectionObserver(
                entries => {

                    entries.forEach(
                        entry => {

                            if(
                                entry.isIntersecting
                            ){

                                startDiagnosis();

                                observer.disconnect();

                            }

                        }
                    );

                },
                {
                    threshold:.35
                }
            );


        observer.observe(section);

    }else{

        startDiagnosis();

    }


})();
/* ==========================================================
   MEMORY CONSTELLATION
   Part 7 — Personal Photo Interaction
========================================================== */

(() => {

    "use strict";


    const section =
        document.getElementById(
            "memory-constellation"
        );

    const cards =
        section
            ? section.querySelectorAll(
                ".memory-card"
            )
            : [];

    const message =
        document.getElementById(
            "memory-message"
        );

    const continueButton =
        document.getElementById(
            "memory-continue"
        );


    if(
        !section ||
        !message ||
        !continueButton ||
        !cards.length
    ){

        return;

    }


    const memories = {

        1: {
            title: "THE CHAOS",
            text:
                "Some memories are beautiful. " +
                "Some are completely ridiculous. " +
                "Thankfully, ours have a little bit of both."
        },

        2: {
            title: "THE MOMENT",
            text:
                "Some moments don't look important " +
                "while they are happening. " +
                "Then somehow, they become the ones you keep."
        },

        3: {
            title: "THE LITTLE THINGS",
            text:
                "Maybe it was never the grand moments. " +
                "Maybe it was all the tiny things " +
                "that quietly became ours."
        },

        4: {
            title: "JUST US",
            text:
                "No perfect moment. " +
                "No perfect universe. " +
                "Just two people somehow making " +
                "their own little world."
        }

    };


    let selectedCount = 0;


    cards.forEach(card => {

        card.addEventListener(
            "click",
            () => {

                const id =
                    card.dataset.memory;

                const memory =
                    memories[id];

                if(!memory){
                    return;
                }


                cards.forEach(
                    otherCard => {

                        otherCard.classList.remove(
                            "is-selected"
                        );

                    }
                );


                card.classList.add(
                    "is-selected"
                );


                message.innerHTML = `
                    <strong>
                        ${memory.title}
                    </strong>
                    <span>
                        ${memory.text}
                    </span>
                `;


                message.classList.remove(
                    "is-visible"
                );


                requestAnimationFrame(() => {

                    message.classList.add(
                        "is-visible"
                    );

                });


                selectedCount++;


                /*
                 * After exploring a few memories,
                 * allow the story to continue.
                 */

                if(
                    selectedCount >= 2
                ){

                    continueButton.style.display =
                        "inline-flex";

                }

            }
        );

    });


    continueButton.addEventListener(
        "click",
        () => {

            /*
             * Intentionally left open.
             * The next cinematic section will
             * connect here.
             */

        }
    );


})();
/* ==========================================================
   THE ONE THING THE UNIVERSE GOT RIGHT
   Part 8 — Cosmic Emotional Transition
========================================================== */

(() => {

    "use strict";


    const section =
        document.getElementById(
            "universe-got-right"
        );

    const line1 =
        document.getElementById(
            "got-right-line-1"
        );

    const line2 =
        document.getElementById(
            "got-right-line-2"
        );

    const line3 =
        document.getElementById(
            "got-right-line-3"
        );

    const line4 =
        document.getElementById(
            "got-right-line-4"
        );

    const line5 =
        document.getElementById(
            "got-right-line-5"
        );

    const finalLine =
        document.getElementById(
            "got-right-final"
        );

    const continueButton =
        document.getElementById(
            "got-right-continue"
        );


    if(
        !section ||
        !line1 ||
        !line2 ||
        !line3 ||
        !line4 ||
        !line5 ||
        !finalLine ||
        !continueButton
    ){

        return;

    }


    let started = false;


    function show(element){

        element.classList.add(
            "is-visible"
        );

    }


    function startSequence(){

        if(started){

            return;

        }

        started = true;


        /* ===========================
           BILLIONS
        =========================== */

        setTimeout(() => {

            show(line1);

        }, 500);


        /* ===========================
           MILLIONS
        =========================== */

        setTimeout(() => {

            show(line2);

        }, 2700);


        /* ===========================
           POSSIBILITIES
        =========================== */

        setTimeout(() => {

            show(line3);

        }, 4900);


        /* ===========================
           AND SOMEHOW
        =========================== */

        setTimeout(() => {

            show(line4);

        }, 7600);


        /* ===========================
           EXACTLY RIGHT
        =========================== */

        setTimeout(() => {

            show(line5);

        }, 9300);


        /* ===========================
           YOU
        =========================== */

        setTimeout(() => {

            show(finalLine);

        }, 11300);


        /* ===========================
           CONTINUE
        =========================== */

        setTimeout(() => {

            continueButton.classList.add(
                "is-visible"
            );

        }, 13700);

    }


    if(
        "IntersectionObserver"
        in window
    ){

        const observer =
            new IntersectionObserver(
                entries => {

                    entries.forEach(
                        entry => {

                            if(
                                entry.isIntersecting
                            ){

                                startSequence();

                                observer.disconnect();

                            }

                        }
                    );

                },
                {
                    threshold:.35
                }
            );


        observer.observe(section);

    }else{

        startSequence();

    }


    continueButton.addEventListener(
        "click",
        () => {

            /*
             * Intentionally left open.
             *
             * The existing proposal section
             * will be connected after the
             * complete fun journey is polished.
             */

        }
    );


})();
/* ==========================================================
   UNIVERSE EASTER EGG
   Part 9 — Hidden Personal Joke
========================================================== */

(() => {

    "use strict";


    const star =
        document.getElementById(
            "universe-easter-egg"
        );

    const message =
        document.getElementById(
            "easter-egg-message"
        );

    const closeButton =
        document.getElementById(
            "easter-egg-close"
        );


    if(
        !star ||
        !message ||
        !closeButton
    ){

        return;

    }


    function openEgg(){

        message.classList.add(
            "is-open"
        );

        message.setAttribute(
            "aria-hidden",
            "false"
        );

        closeButton.focus();

    }


    function closeEgg(){

        message.classList.remove(
            "is-open"
        );

        message.setAttribute(
            "aria-hidden",
            "true"
        );

        star.focus();

    }


    star.addEventListener(
        "click",
        openEgg
    );


    star.addEventListener(
        "keydown",
        event => {

            if(
                event.key === "Enter" ||
                event.key === " "
            ){

                event.preventDefault();

                openEgg();

            }

        }
    );


    closeButton.addEventListener(
        "click",
        closeEgg
    );


    message.addEventListener(
        "click",
        event => {

            if(
                event.target === message
            ){

                closeEgg();

            }

        }
    );


    document.addEventListener(
        "keydown",
        event => {

            if(
                event.key === "Escape" &&
                message.classList.contains(
                    "is-open"
                )
            ){

                closeEgg();

            }

        }
    );


})();
/* ==========================================================
   UNROMANTIC ROBOT — LOVE PROTOCOL
   Part 10 — Choose Your Weapon
========================================================== */

(() => {

    "use strict";


    const section =
        document.getElementById(
            "love-protocol"
        );

    const options =
        section
            ? section.querySelectorAll(
                ".love-option"
            )
            : [];

    const response =
        document.getElementById(
            "love-protocol-response"
        );

    const continueButton =
        document.getElementById(
            "love-protocol-continue"
        );


    if(
        !section ||
        !response ||
        !continueButton ||
        !options.length
    ){

        return;

    }


    const responses = {

        flowers: {
            main:
                "Nice choice. Very classic.",
            system:
                "ROBOT STATUS: Surprisingly acceptable."
        },

        poetry: {
            main:
                "Bold choice for a robot.",
            system:
                "ROMANCE SOFTWARE: Searching for vocabulary..."
        },

        gifts: {
            main:
                "Acceptable. System approves.",
            system:
                "GIFT PROTOCOL: Successfully initiated."
        },

        universe: {
            main:
                "Finally. A logical decision.",
            system:
                "UNIVERSE BUILD PROTOCOL: ALREADY IN PROGRESS."
        }

    };


    let selected = false;


    options.forEach(option => {

        option.addEventListener(
            "click",
            () => {

                const choice =
                    option.dataset.choice;

                const result =
                    responses[choice];


                if(!result){

                    return;

                }


                options.forEach(
                    other => {

                        other.classList.remove(
                            "is-selected"
                        );

                    }
                );


                option.classList.add(
                    "is-selected"
                );


                response.classList.remove(
                    "is-visible"
                );


                setTimeout(() => {

                    response.innerHTML = `
                        <span class="love-response-main">
                            ${result.main}
                        </span>

                        <span class="love-response-system">
                            ${result.system}
                        </span>
                    `;

                    response.classList.add(
                        "is-visible"
                    );

                }, 120);


                selected = true;


                continueButton.style.display =
                    "inline-flex";

            }
        );

    });


    continueButton.addEventListener(
    "click",
    () => {

        continueButton.addEventListener(
    "click",
    () => {

        const nextSection =
            section.nextElementSibling;

        if(!nextSection){

            return;

        }

        nextSection.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });

    }
);

    }
);


})();
/* ==========================================================
   OUR UNIVERSE
   GLOBAL NAVIGATION FIX
========================================================== */

(() => {

    "use strict";

    /* ===========================
       LOVE PROTOCOL CONTINUE
    =========================== */

    const loveProtocol =
        document.getElementById("love-protocol");

    const loveProtocolContinue =
        document.getElementById("love-protocol-continue");

    if (loveProtocol && loveProtocolContinue) {

        loveProtocolContinue.addEventListener("click", () => {

            const sections =
                Array.from(
                    document.querySelectorAll("section")
                );

            const currentIndex =
                sections.indexOf(loveProtocol);

            if (currentIndex === -1) {
                return;
            }

            const nextSection =
                sections[currentIndex + 1];

            if (!nextSection) {
                return;
            }

            nextSection.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        });

    }


    /* ===========================
       REPLAY OUR UNIVERSE
    =========================== */

    const replayButton =
        document.getElementById(
            "ending-replay-button"
        );

    if (replayButton) {

    replayButton.addEventListener("click", () => {

        /* ===========================
           RESET PAGE POSITION
        =========================== */

        window.scrollTo({
            top: 0,
            behavior: "instant"
        });


        /* ===========================
           RESET LOADING SCREEN
        =========================== */

        if (loadingScreen) {

            loadingScreen.classList.remove("hidden");

        }


        /* ===========================
           RESET LOADING BAR
        =========================== */

        if (loadingBar) {

            loadingBar.style.width = "0%";

        }


        /* ===========================
           RESET LOADING TEXT
        =========================== */

        if (loadingText) {

            loadingText.style.opacity = "1";

            loadingText.textContent =
                loadingMessages[0];

        }


        /* ===========================
           RESTART LOADING
        =========================== */

        let replayProgress = 0;

        const replayInterval =
            setInterval(() => {

                replayProgress++;

                if (loadingBar) {

                    loadingBar.style.width =
                        replayProgress + "%";

                }


                if (
                    replayProgress % 15 === 0 &&
                    loadingText
                ) {

                    loadingText.style.opacity = 0;

                    setTimeout(() => {

                        const index =
                            Math.min(
                                Math.floor(
                                    replayProgress / 15
                                ),
                                loadingMessages.length - 1
                            );

                        loadingText.textContent =
                            loadingMessages[index];

                        loadingText.style.opacity = 1;

                    }, 250);

                }


                if (replayProgress >= 100) {

                    clearInterval(replayInterval);

                    setTimeout(() => {

                        if (loadingScreen) {

                            loadingScreen.classList.add(
                                "hidden"
                            );

                        }

                    }, 600);

                }

            }, 45);

    });

}

})();

})();
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