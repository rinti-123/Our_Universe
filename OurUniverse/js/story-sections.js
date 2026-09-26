/* =========================================================
   OUR UNIVERSE
   Story Sections Interaction
========================================================= */


/* =========================================================
   PARALLEL UNIVERSE
========================================================= */

const universePortals =
    document.querySelectorAll(".universe-portal");

const universeResultContent =
    document.getElementById("universeResultContent");

const memoryConstellation =
    document.getElementById("memoryConstellation");

const favoriteUniverse =
    document.getElementById("favoriteUniverse");


let universeChosen = false;


universePortals.forEach((portal) => {

    portal.addEventListener("click", () => {

        const universe =
            portal.dataset.universe;


        if (!universeResultContent) {
            return;
        }


        universeChosen = true;


        /* -----------------------------------------
           UNIVERSE A
        ----------------------------------------- */

        if (universe === "a") {

            universeResultContent.innerHTML = `

                <span class="result-line">
                    Different places.
                </span>

                <span class="result-line">
                    Different days.
                </span>

                <span class="result-line">
                    Different conversations.
                </span>

                <span class="result-line">
                    Different memories.
                </span>

                <span class="result-line">
                    And somewhere in that universe...
                    we never became us.
                </span>

            `;


            if (memoryConstellation) {

                memoryConstellation.classList.remove(
                    "visible"
                );

            }

        }


        /* -----------------------------------------
           UNIVERSE B
        ----------------------------------------- */

        if (universe === "b") {

            universeResultContent.innerHTML = `

                <span class="result-line">
                    We became friends.
                </span>

                <span class="result-line">
                    We stayed up talking about
                    things that probably could've waited until morning.
                </span>

                <span class="result-line">
                    There were chocolates,
                    letters, pictures and little surprises.
                </span>

                <span class="result-line">
                    There were ordinary moments
                    that quietly became unforgettable.
                </span>

                <span class="result-line">
                    And somehow...
                    all those little things became our story.
                </span>

            `;


            setTimeout(() => {

                if (memoryConstellation) {

                    memoryConstellation.classList.add(
                        "visible"
                    );

                }

            }, 900);

        }


        /* -----------------------------------------
           RESET ANIMATION
        ----------------------------------------- */

        universeResultContent.classList.remove(
            "visible"
        );


        void universeResultContent.offsetWidth;


        universeResultContent.classList.add(
            "visible"
        );


        /* -----------------------------------------
           SCROLL
        ----------------------------------------- */

        setTimeout(() => {

            universeResultContent.scrollIntoView({
                behavior: "smooth",
                block: "center"
            });

        }, 200);

    });

});


/* =========================================================
   MEMORY DATA
========================================================= */

const universeMemories = {

    friendship: {

        icon: "✦",

        label: "THE BEGINNING",

        title: "The Friendship",

        text:
            "Before anything else, there was friendship. " +
            "Two people slowly becoming comfortable enough " +
            "to share pieces of their everyday lives with each other."

    },


    "late-night": {

        icon: "☾",

        label: "AFTER MIDNIGHT",

        title: "Late Night Conversations",

        text:
            "Those conversations that somehow made the night " +
            "feel shorter. Random thoughts, serious talks, " +
            "nonsense, laughter — and sometimes simply staying there " +
            "because neither of us wanted the conversation to end."

    },


    chocolates: {

        icon: "♡",

        label: "SWEET LITTLE THINGS",

        title: "The Chocolates",

        text:
            "Tiny gifts have a strange way of becoming huge memories. " +
            "Sometimes it isn't about what you received. " +
            "It's about remembering that someone thought of you."

    },


    letter: {

        icon: "✉",

        label: "WORDS WE KEPT",

        title: "The Letters",

        text:
            "Some feelings are easier to keep on paper. " +
            "A letter can sit quietly for years and still bring " +
            "an entire moment back when you read it again."

    },


    pictures: {

        icon: "📷",

        label: "TIME MACHINES",

        title: "The Pictures",

        text:
            "A picture freezes a second. " +
            "But when it belongs to us, it somehow brings back " +
            "the whole day — the mood, the laughter, the little details."

    },


    moments: {

        icon: "✧",

        label: "THE LITTLE THINGS",

        title: "The Memory Moments",

        text:
            "Not every important memory has a date attached to it. " +
            "Some are just tiny moments that stayed with us " +
            "long after the moment itself was gone."

    }

};


/* =========================================================
   MEMORY STAR ELEMENTS
========================================================= */

const memoryStars =
    document.querySelectorAll(".memory-star");

const memoryDetail =
    document.getElementById("memoryStarDetail");

const memoryDetailIcon =
    document.getElementById("memoryDetailIcon");

const memoryDetailLabel =
    document.getElementById("memoryDetailLabel");

const memoryDetailTitle =
    document.getElementById("memoryDetailTitle");

const memoryDetailText =
    document.getElementById("memoryDetailText");

const closeMemoryDetail =
    document.getElementById("closeMemoryDetail");


/* =========================================================
   OPEN MEMORY
========================================================= */

memoryStars.forEach((star) => {

    star.addEventListener("click", () => {

        const memoryName =
            star.dataset.memory;

        const memory =
            universeMemories[memoryName];


        if (!memory || !memoryDetail) {
            return;
        }


        memoryDetailIcon.textContent =
            memory.icon;

        memoryDetailLabel.textContent =
            memory.label;

        memoryDetailTitle.textContent =
            memory.title;

        memoryDetailText.textContent =
            memory.text;


        memoryDetail.classList.add(
            "visible"
        );

        memoryDetail.setAttribute(
            "aria-hidden",
            "false"
        );


        document.body.style.overflow =
            "hidden";

    });

});


/* =========================================================
   CLOSE MEMORY
========================================================= */

function closeMemory() {

    if (!memoryDetail) {
        return;
    }


    memoryDetail.classList.remove(
        "visible"
    );


    memoryDetail.setAttribute(
        "aria-hidden",
        "true"
    );


    document.body.style.overflow =
        "";

}


if (closeMemoryDetail) {

    closeMemoryDetail.addEventListener(
        "click",
        closeMemory
    );

}


/* =========================================================
   CLOSE ON BACKDROP
========================================================= */

if (memoryDetail) {

    memoryDetail.addEventListener(
        "click",
        (event) => {

            if (
                event.target === memoryDetail
            ) {

                closeMemory();

            }

        }
    );

}


/* =========================================================
   ESC KEY
========================================================= */

document.addEventListener(
    "keydown",
    (event) => {

        if (
            event.key === "Escape"
        ) {

            closeMemory();

        }

    }
);