/* ==========================================================
   100 REASONS
   Part 11 — Why You're My Angry Bird
========================================================== */

(() => {

    "use strict";


    const section =
        document.getElementById("reasons");


    if (!section) {
        return;
    }


    const reasonText =
        document.getElementById("reason-text");

    const currentNumber =
        document.getElementById("reason-current");

    const labelNumber =
        document.getElementById("reason-label-number");

    const progressFill =
        document.getElementById("reasons-progress-fill");

    const card =
        document.getElementById("reason-card");

    const previousButton =
        document.getElementById("reason-prev");

    const nextButton =
        document.getElementById("reason-next");

    const milestone =
        document.getElementById("reason-milestone");

    const finalSection =
        document.getElementById("reasons-final");

    const continueButton =
        document.getElementById("reasons-continue");


    if (
        !reasonText ||
        !currentNumber ||
        !labelNumber ||
        !progressFill ||
        !card ||
        !previousButton ||
        !nextButton ||
        !milestone ||
        !finalSection ||
        !continueButton
    ) {
        return;
    }


    /* ======================================================
       100 PERSONAL REASONS
    ====================================================== */

    const reasons = [

        "Because somehow, you turned ordinary days into memories I never want to lose.",

        "Because your smile has a way of making even an ordinary moment feel special.",

        "Because you're the only person who can call me 'mine' and somehow get away with it. 🙄",

        "Because you somehow became my Sunshine while I kept pretending to be your Moonlight. 🌙",

        "Because you don't just exist in my memories — you are part of the reason they matter.",

        "Because you can make me laugh when I wasn't planning on laughing.",

        "Because your random thoughts somehow became some of my favorite conversations.",

        "Because with you, even doing absolutely nothing can become a memory.",

        "Because you somehow made friendship feel like something much bigger.",

        "Because you notice little things about me that I sometimes don't even notice myself.",

        "Because you remember things I casually said and somehow make me feel heard.",

        "Because your caring nature is impossible not to notice.",

        "Because you worry about the people you love, even when you don't always say it perfectly.",

        "Because you have this strange talent for making chaos feel like home.",

        "Because apparently, being my Angry Bird is a full-time responsibility you accepted willingly.",

        "Because your angry expressions are somehow ridiculously memorable.",

        "Because you can be dramatic and adorable at the exact same time.",

        "Because you are one of the few people whose presence can instantly change the mood of a room.",

        "Because you have a way of making people feel important.",

        "Because your heart is much softer than your Angry Bird reputation suggests.",

        "Because you somehow manage to be both my favorite person and my biggest source of chaos.",

        "Because your voice became one of those sounds I could recognize anywhere.",

        "Because your smile became one of those things I automatically look for.",

        "Because you appreciate the tiny details that most people would completely overlook.",

        "Because you see beauty in little moments.",

        "Because you remember the version of me that existed before all these memories.",

        "Because you have seen my weird side and somehow stayed.",

        "Because you have seen my unromantic side and still expected romance from me. 😂",

        "Because calling me an unromantic neem pataar rosh somehow became part of our own language.",

        "Because you can tease me without making it feel mean.",

        "Because somehow your teasing became one of the things I would miss the most.",

        "Because you make ordinary conversations feel worth remembering.",

        "Because you can turn a random conversation into something I think about later.",

        "Because you somehow became part of my everyday thoughts without asking permission.",

        "Because your happiness genuinely matters to me.",

        "Because your sadness makes me want to find a way to make things a little lighter.",

        "Because you remind me that caring about someone can happen in a thousand tiny ways.",

        "Because you appreciate my brain and my weird little talents too.",

        "Because you don't only notice how I look — you notice how I think.",

        "Because being understood by you feels different.",

        "Because you have called me beautiful in ways that made the compliment feel bigger than appearance.",

        "Because you have noticed my caring side even when I wasn't trying to show it.",

        "Because you somehow remember the little expressions I make.",

        "Because apparently, even my angry bird's face has its own fan club...just for me 🙄",

        "Because you like the sleepy version of me too.",

        "Because somehow even my messy, half-awake moments became memories worth keeping.",

        "Because you somehow became the person I can tell even the smallest, most random things to.",

        "Because you noticed the braids, the little details, the things I probably didn't think mattered.",

        "Because you make me feel seen rather than simply looked at.",

        "Because you have a way of making compliments feel personal instead of ordinary.",

        "Because you once described my smile in a way I still remember.",

        "Because your words have a habit of staying with me.",

        "Because you were there when I first started realizing how special you were to me.",

"Because somehow, the person I once wanted as my best friend became someone I couldn't imagine my life without.",

        "Because 27/06/2022 became more than just a date.",

        "Because that little moments became part of the history of us.",

        "Because sometimes the smallest gestures become the biggest memories.",

        "Because you didn't need a grand gesture to create a memory I'll always remember.",

        "Because you somehow made every little thing feel like a chapter.",

        "Because 24/10/2022 still has its own little place in our story.",

        "Because you have a way of making even the smallest moments between us feel unexpectedly special.",

"Because somehow, the little things that happen between us always end up becoming memories I want to keep forever.",

        "Because sometimes your imagination accidentally becomes part of real life.",

        "Because 09/05/2023 became another date our universe decided to keep.",

        "Because our first sleepover became one of those memories that can't really be explained to everyone else.",

        "Because some memories only make sense when we're the two people who lived them.",

        "Because we have memories that would probably sound completely normal to someone else but mean everything to us.",

        "Because our inside jokes don't need explanations.",

        "Because our random conversations somehow developed their own language.",

        "Because you know the references that make absolutely no sense to anyone else.",

        "Because being weird together became surprisingly easy.",

        "Because we somehow survived all the chaos and still ended up here.",

        "Because even after disagreements, there is still a part of me that looks for you.",

        "Because our story isn't perfect, and that's exactly what makes it ours.",

        "Because we have both changed while still carrying pieces of the beginning with us.",

        "Because you have become part of so many versions of me.",

        "Because you have seen different sides of me and still know how to make me smile.",

        "Because you make the word 'memory' feel more personal.",

        "Because there are songs I can associate with you without even trying.",

        "Because some places feel different simply because you are connected to them.",

        "Because Sikkim became more than just a place in our memories.",

        "Because even a little snow and chaos can become part of our story.",

        "Because apparently even saying 'I hate you' can become a memory worth keeping.",

        "Because our story somehow manages to be dramatic without even trying.",

        "Because you can be my Sunshine while still being the Angry Bird who scares me occasionally. 😭",

        "Because your softness and your chaos somehow coexist perfectly.",

        "Because you are both comforting and completely capable of driving me crazy.",

        "Because you make me want to preserve moments instead of letting them disappear.",

        "Because you are one of the reasons I wanted to build this entire little universe.",

        "Because this website exists mostly because one person became important enough to deserve an entire universe.",

        "Because every little section of this website somehow reminded me of another thing about you.",

        "Because even after writing ninety-nine reasons, I can still think of more.",

        "Because you are not one memory — you are a collection of hundreds of them.",

        "Because you are not just one reason — you're a hundred tiny reasons standing together.",

        "Because you somehow became one of the safest places inside my memories.",

        "Because your presence has become familiar in the best possible way.",

        "Because you make me want to remember the small things, not just the big ones.",

        "Because you are my Hutum pecha on some days and my favorite Princess on otherdays.",

        "Because I can never properly explain how many little things about you I have memorized.",

        "Because somehow, through all the jokes, chaos, flowers, dreams, conversations and memories, you became you — my LOVE.",

        "Because after everything, you're still someone I would choose to keep writing memories with.",

        "Because if I had to write another hundred reasons tomorrow, I probably wouldn't even have to think very hard.",

        "Because somehow, out of everything this universe could have given me, it gave me a reason to make this page for you.",
 
        "Because you're  you are my love,Fiha — and apparently, that's reason enough for an entire universe."
    ];


    /* ======================================================
       STATE
    ====================================================== */

    let currentIndex = 0;

    let isAnimating = false;


    /* ======================================================
       FORMAT NUMBER
    ====================================================== */

    function formatNumber(number){

        return String(number).padStart(2, "0");

    }


    /* ======================================================
       MILESTONES
    ====================================================== */

    function getMilestone(number){

        if(number === 25){
            return "25 reasons down. And we're barely getting started. ✦";
        }

        if(number === 50){
            return "Halfway there. Somehow, I still have more to say.";
        }

        if(number === 75){
            return "75 reasons. Apparently, you're quite difficult to summarize.";
        }

        if(number === 100){
            return "100 reasons. And somehow, this still isn't enough.";
        }

        return "";

    }


    /* ======================================================
       UPDATE MILESTONE
    ====================================================== */

    function updateMilestone(number){

        const message =
            getMilestone(number);


        milestone.classList.remove(
            "is-visible"
        );


        if(!message){
            return;
        }


        setTimeout(() => {

            milestone.textContent =
                message;

            milestone.classList.add(
                "is-visible"
            );

        }, 200);

    }


    /* ======================================================
       RENDER REASON
    ====================================================== */

    function renderReason(
        index,
        animate = true
    ){

        if(
            index < 0 ||
            index >= reasons.length
        ){
            return;
        }


        const number =
            index + 1;


        if(animate){

            isAnimating = true;

            card.classList.add(
                "is-changing"
            );

        }


        const update = () => {

            reasonText.textContent =
                reasons[index];

            currentNumber.textContent =
                formatNumber(number);

            labelNumber.textContent =
                formatNumber(number);


            progressFill.style.width =
                `${number}%`;


            previousButton.disabled =
                index === 0;


            nextButton.disabled =
                index === reasons.length - 1;


            updateMilestone(number);


            if(number === reasons.length){

                nextButton.textContent =
                    "100 Reasons ✓";

                finalSection.classList.add(
                    "is-visible"
                );

            }else{

                nextButton.innerHTML =
                    'Next Reason <span>→</span>';

            }


            if(animate){

                requestAnimationFrame(() => {

                    card.classList.remove(
                        "is-changing"
                    );

                    setTimeout(() => {

                        isAnimating = false;

                    }, 260);

                });

            }

        };


        if(animate){

            setTimeout(
                update,
                220
            );

        }else{

            update();

        }

    }


    /* ======================================================
       NEXT
    ====================================================== */

    function nextReason(){

        if(isAnimating){
            return;
        }


        if(
            currentIndex >=
            reasons.length - 1
        ){

            finalSection.scrollIntoView({
                behavior:"smooth",
                block:"center"
            });

            return;
        }


        currentIndex++;

        renderReason(
            currentIndex,
            true
        );

    }


    /* ======================================================
       PREVIOUS
    ====================================================== */

    function previousReason(){

        if(isAnimating){
            return;
        }


        if(currentIndex <= 0){
            return;
        }


        currentIndex--;

        renderReason(
            currentIndex,
            true
        );

    }


    /* ======================================================
       BUTTON EVENTS
    ====================================================== */

    nextButton.addEventListener(
        "click",
        nextReason
    );


    previousButton.addEventListener(
        "click",
        previousReason
    );


    /* ======================================================
       KEYBOARD SUPPORT
    ====================================================== */

    document.addEventListener(
        "keydown",
        event => {

            if(
                !section.matches(":hover") &&
                document.activeElement !== nextButton &&
                document.activeElement !== previousButton
            ){
                return;
            }


            if(event.key === "ArrowRight"){

                nextReason();

            }


            if(event.key === "ArrowLeft"){

                previousReason();

            }

        }
    );


    /* ======================================================
       CONTINUE TO NEXT SECTION
    ====================================================== */

    continueButton.addEventListener(
        "click",
        () => {

            const nextSection =
                section.nextElementSibling;


            if(!nextSection){
                return;
            }


            nextSection.scrollIntoView({
                behavior:"smooth",
                block:"start"
            });

        }
    );


    /* ======================================================
       INITIAL STATE
    ====================================================== */

    renderReason(
        0,
        false
    );


})();
/* =========================================
   REASONS I NEVER TOLD YOU
========================================= */

const revealNeverTold = document.getElementById("revealNeverTold");
const neverToldReasons = document.getElementById("neverToldReasons");

if (revealNeverTold && neverToldReasons) {

    revealNeverTold.addEventListener("click", () => {

        neverToldReasons.classList.add("revealed");
        neverToldReasons.setAttribute("aria-hidden", "false");

        revealNeverTold.textContent = "The things I never said ↓";
        revealNeverTold.disabled = true;

        setTimeout(() => {
            neverToldReasons.scrollIntoView({
                behavior: "smooth",
                block: "center"
            });
        }, 150);

    });

}


/* =========================================
   THE REAL REASON
========================================= */

const revealRealReason = document.getElementById("revealRealReason");
const realReasonQuestion = document.getElementById("realReasonQuestion");
const realReasonAnswer = document.getElementById("realReasonAnswer");

if (
    revealRealReason &&
    realReasonQuestion &&
    realReasonAnswer
) {

    revealRealReason.addEventListener("click", () => {

        realReasonQuestion.classList.add("hidden");

        setTimeout(() => {

            realReasonAnswer.classList.add("revealed");
            realReasonAnswer.setAttribute("aria-hidden", "false");

            realReasonAnswer.scrollIntoView({
                behavior: "smooth",
                block: "center"
            });

        }, 500);

    });

}