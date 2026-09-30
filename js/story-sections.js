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
/* =========================================================
   STORY BOOK — CHAPTER READER
========================================================= */





/* =========================================================
   STORY BOOK — CHAPTER DATA
========================================================= */

const chapterData = {

    /* =====================================================
       CHAPTER 01
    ===================================================== */

    1: {

        number: "CHAPTER 01",
        symbol: "✦",

        title: "The Beginning",

        subtitle:
            "Before we became anything, we were simply two people.",

        moments: [

            {
                title: "We Didn't Really Talk",

                text:
                    "In the beginning, there wasn't really an us. " +
                    "We didn't spend our days talking or looking for reasons " +
                    "to be around each other. We were simply two people " +
                    "existing somewhere in the same little world."
            },

            {
                title: "You Kept Talking",

                text:
                    "But you always had something to say. " +
                    "You would talk, and talk, and somehow keep finding " +
                    "another little thing to tell me. " +
                    "And eventually, I started replying."
            },

            {
                title: "And Then It Became Easy",

                text:
                    "At first, it was only a few replies. " +
                    "Then a few more conversations. " +
                    "And before either of us really noticed, " +
                    "talking to each other had stopped feeling unusual."
            },

            {
                title: "The Friendship",

                text:
                    "It happened surprisingly fast. " +
                    "Somewhere between those ordinary conversations, " +
                    "we became friends — the kind of friends who slowly " +
                    "start becoming a familiar part of each other's days."
            }

        ],

        ending:
            "There was no grand beginning. Just a few conversations that quietly changed everything."

    },


    /* =====================================================
       CHAPTER 02
    ===================================================== */

    2: {

        number: "CHAPTER 02",
        symbol: "☾",

        title: "The Conversations",

        subtitle:
            "Some nights were never really meant to end.",

        moments: [

            {
                title: "After Everyone Was Asleep",

                text:
                    "Somewhere along the way, our conversations started " +
                    "finding their way into the late hours of the night. " +
                    "The world would get quiet, everyone else would disappear " +
                    "into sleep, and somehow we'd still be there."
            },

            {
                title: "One More Thing",

                text:
                    "There was always one more thing to say. " +
                    "One more random thought. One more story. " +
                    "One more joke that absolutely did not need to be told " +
                    "at two in the morning — but somehow was."
            },

            {
                title: "The Things We Shared",

                text:
                    "Little by little, the conversations became more personal. " +
                    "We started sharing the things we usually kept to ourselves. " +
                    "The good days, the bad ones, the thoughts that stayed " +
                    "in our heads a little too long."
            },

            {
                title: "A New Kind Of Comfort",

                text:
                    "Eventually, talking to you wasn't something I had to think about. " +
                    "It became something I simply wanted. " +
                    "A small part of every day that somehow made the day feel better."
            }

        ],

        ending:
            "Maybe closeness doesn't arrive all at once. Maybe it grows quietly, one conversation at a time."

    },


    /* =====================================================
       CHAPTER 03
    ===================================================== */

    3: {

        number: "CHAPTER 03",
        symbol: "♡",

        title: "The Little Things",

        subtitle:
            "The moments that looked small, but stayed forever.",

        moments: [

            {
                title: "Little Gifts",

                text:
                    "There were little gifts, tiny surprises, and small things " +
                    "that probably looked ordinary from the outside. " +
                    "But they carried something much bigger — the simple feeling " +
                    "of knowing that someone had thought about you."
            },

            {
                title: "Being There",

                text:
                    "Then there was the kind of care that couldn't be wrapped " +
                    "in paper. The quiet emotional support. The conversations " +
                    "when one of us wasn't having the best day. " +
                    "The simple reminder that neither of us had to handle everything alone."
            },

            {
                title: "Our Little Language",

                text:
                    "Inside jokes started appearing everywhere. " +
                    "Some were so ridiculous that they probably wouldn't make sense " +
                    "to anyone else. And maybe that's what made them special. " +
                    "They belonged to us."
            },

            {
                title: "Things I Started Noticing",

                text:
                    "Your little habits. Your reactions. The things that made you happy. " +
                    "The things that bothered you. " +
                    "I never decided to memorize them. " +
                    "They simply stayed."
            }

        ],

        ending:
            "The little things were never really little. They were the pieces that slowly became us."

    },


    /* =====================================================
       CHAPTER 04
    ===================================================== */

    4: {

        number: "CHAPTER 04",
        symbol: "✉",

        title: "Things We Kept",

        subtitle:
            "Some memories found their way into our hands.",

        moments: [

            {
                title: "Things You Could Hold",

                text:
                    "Chocolates. Little gifts. Letters. Tiny surprises. " +
                    "Things that could fit inside a hand but somehow carried " +
                    "an entire moment with them."
            },

            {
                title: "It Was Never About The Gift",

                text:
                    "It was never really about how big or expensive something was. " +
                    "It was the thought behind it. " +
                    "The quiet little message hidden inside every gesture: " +
                    "I remembered you."
            },

            {
                title: "Then Came The Distance",

                text:
                    "And eventually, I left for Rajshahi. " +
                    "You stayed in Dhaka, and suddenly seeing each other " +
                    "wasn't something that could happen whenever we wanted."
            },

            {
                title: "Still Us",

                text:
                    "The distance changed how often we met. " +
                    "It didn't change how familiar you felt. " +
                    "Even when days passed without seeing each other, " +
                    "there were still messages, memories and little reminders " +
                    "that somehow kept the same connection alive."
            }

        ],

        ending:
            "Some distances are measured in kilometres. Others are measured by how much someone is missed."

    },


    /* =====================================================
       CHAPTER 05
    ===================================================== */

    5: {

        number: "CHAPTER 05",
        symbol: "📷",

        title: "The Pictures",

        subtitle:
            "Because sometimes one second is enough to remember an entire day.",

        moments: [

            {
                title: "The Rare Days",

                text:
                    "After Rajshahi became home, our meetings became less frequent. " +
                    "There were days between days, and sometimes a long wait " +
                    "before we saw each other again."
            },

            {
                title: "So We Remembered",

                text:
                    "Whenever we did meet, those moments somehow felt different. " +
                    "Maybe because we knew another goodbye would eventually come. " +
                    "So we kept little pieces of those days — including the pictures."
            },

            {
                title: "A Picture Is Never Just A Picture",

                text:
                    "A photograph can freeze a second. " +
                    "But when that second belongs to us, it somehow brings back more. " +
                    "The place. The mood. The conversation. " +
                    "The feeling of being there again."
            },

            {
                title: "Our Little Time Machines",

                text:
                    "Maybe that's why pictures matter so much. " +
                    "They let us visit moments that have already passed. " +
                    "A tiny window into a day that once belonged completely to us."
            }

        ],

        ending:
            "Some moments leave quietly. Pictures make sure they know the way back."

    },


    /* =====================================================
       CHAPTER 06
    ===================================================== */

    6: {

        number: "CHAPTER 06",
        symbol: "✧",

        title: "The Memories",

        subtitle:
            "Ordinary days. Unordinary memories.",

        moments: [

            {
                title: "The Things Nobody Else Would Notice",

                text:
                    "Some of our favorite memories probably wouldn't look important " +
                    "to anyone else. A random conversation. A silly joke. " +
                    "A little gift. A moment that lasted only a few minutes."
            },

            {
                title: "The Fake Wedding",

                text:
                    "And then, one day, a joke became an entire little universe of its own. " +
                    "A playful proposal turned into a completely fake marriage setup — " +
                    "the kind of ridiculous thing that somehow became one of those memories " +
                    "we could keep bringing up again and again."
            },

            {
                title: "Still My Cute Baccha Wifey",

                text:
                    "The funny part is that the joke never completely disappeared. " +
                    "Even now, somewhere inside all the teasing and flirting, " +
                    "there is still that little title waiting for you — " +
                    "my cute baccha wifey."
            },

            {
                title: "The Memories That Stay",

                text:
                    "Maybe that's what makes our story feel like ours. " +
                    "Not just the big moments, but all the strange, funny, " +
                    "completely unserious little things that somehow became important."
            }

        ],

        ending:
            "Some memories are meaningful because they were serious. Ours are also meaningful because they were ours."

    },


    /* =====================================================
       CHAPTER 07
    ===================================================== */

    7: {

        number: "CHAPTER 07",
        symbol: "∞",

        title: "Somewhere Along the Way",

        subtitle:
            "We never really noticed when friendship started becoming something more.",

        moments: [

            {
                title: "The Late Nights Changed",

                text:
                    "The late-night conversations were still there. " +
                    "The jokes were still there. The friendship was still there. " +
                    "But somewhere in between, something about the way we talked " +
                    "to each other started feeling a little different."
            },

            {
                title: "Then Came The Flirting",

                text:
                    "A little teasing became flirting. " +
                    "Flirting became another reason to stay awake. " +
                    "And somehow, nights that were supposed to end early " +
                    "kept stretching further because neither of us really wanted them to."
            },

            {
                title: "Things We Didn't Name",

                text:
                    "There were feelings we didn't always put into words. " +
                    "Some things were easier to leave inside a joke, " +
                    "hidden between an inside reference and a smile."
            },

            {
                title: "One Moment",

                text:
                    "And then there was one particular moment — " +
                    "the kind that doesn't need a detailed explanation. " +
                    "A moment that quietly changed the way we looked at each other " +
                    "afterwards."
            },

            {
                title: "Somewhere Along The Way",

                text:
                    "There was no exact date. No dramatic announcement. " +
                    "Just a slow realization that somewhere between friendship, " +
                    "care, laughter and all those late nights, " +
                    "we had become something neither of us could quite call ordinary anymore."
            }

        ],

        ending:
            "Maybe some stories don't have a moment when they change. Maybe they simply become different, one little moment at a time."

    },


    /* =====================================================
       CHAPTER 08
    ===================================================== */

    8: {

        number: "CHAPTER 08",
        symbol: "☀",

        title: "Sunshine & Moonlight",

        subtitle:
            "Different cities. Same little universe.",

        moments: [

            {
                title: "Dhaka & Rajshahi",

                text:
                    "You stayed in Dhaka. I stayed in Rajshahi. " +
                    "There are days when the distance feels very real, " +
                    "especially when seeing each other isn't as easy as it used to be."
            },

            {
                title: "But The Day Still Ends With You",

                text:
                    "And somehow, no matter how busy the day gets, " +
                    "we still find our way back to each other. " +
                    "A message. A call. A video call that was supposed to be short " +
                    "and somehow isn't."
            },

            {
                title: "The Nights Are Still Ours",

                text:
                    "We still stay awake talking. " +
                    "Sometimes it's something meaningful. Sometimes it's complete nonsense. " +
                    "Sometimes it's flirting that goes a little too far. " +
                    "And sometimes it's just the comfort of knowing the other person is there."
            },

            {
                title: "The Care Between The Words",

                text:
                    "You still care about me in all those little ways. " +
                    "Checking in. Listening. Remembering things. " +
                    "Being there when I need someone. " +
                    "The distance never managed to make that disappear."
            },

            {
                title: "Sunshine & Moonlight",

                text:
                    "You are still my Sunshine — warm, bright, impossible to ignore. " +
                    "And somehow, I'm still your Moonlight — quieter, softer, " +
                    "but always somewhere under the same sky."
            }

        ],

        ending:
            "The distance changed where we were. It never changed the little universe we kept choosing every night."

    },


    /* =====================================================
       CHAPTER ∞
    ===================================================== */

    9: {

        number: "CHAPTER ∞",
        symbol: "✦",

        title: "Still Being Written...",

        subtitle:
            "Because somehow, our story never learned how to end.",

        moments: [

            {
                title: "Pages We Haven't Lived Yet",

                text:
                    "There are still conversations we haven't had. " +
                    "Places we haven't gone. Pictures we haven't taken. " +
                    "Random days that haven't become memories yet."
            },

            {
                title: "More Little Things",

                text:
                    "There will probably be more inside jokes. " +
                    "More late nights. More teasing. More little gifts. " +
                    "More moments that seem completely ordinary " +
                    "until we look back and realize how much they meant."
            },

            {
                title: "More Versions Of Us",

                text:
                    "The people we are today won't be the exact same people " +
                    "we'll be years from now. But that's the beautiful part. " +
                    "Our story gets to grow with us."
            },

            {
                title: "The Next Page",

                text:
                    "Maybe we don't know exactly what comes next. " +
                    "Maybe we aren't supposed to. " +
                    "A story would be much less exciting if every page was already written."
            }

        ],

        ending:
            "So this isn't the end. It's just the latest page of a story that's still being written."

    }

};



/* =========================================
   CHAPTER READER
========================================= */

const chapterReader =
    document.getElementById("chapterReader");

const chapterReaderClose =
    document.getElementById("chapterReaderClose");

const chapterReaderBackdrop =
    document.querySelector(".chapter-reader-backdrop");

const readerChapterNumber =
    document.getElementById("readerChapterNumber");

const readerChapterSymbol =
    document.getElementById("readerChapterSymbol");

const readerChapterTitle =
    document.getElementById("readerChapterTitle");

const readerChapterSubtitle =
    document.getElementById("readerChapterSubtitle");

const chapterMoments =
    document.getElementById("chapterMoments");

const readerChapterEnding =
    document.getElementById("readerChapterEnding");


/* =========================================
   OPEN CHAPTER
========================================= */

function openChapter(chapterId) {

    const chapter = chapterData[chapterId];

    if (!chapter) {
        return;
    }

    if (!chapterReader) {
        return;
    }

    /* -----------------------------------------
       SET CHAPTER INFORMATION
    ----------------------------------------- */

    if (readerChapterNumber) {
        readerChapterNumber.textContent =
            chapter.number;
    }

    if (readerChapterSymbol) {
        readerChapterSymbol.textContent =
            chapter.symbol;
    }

    if (readerChapterTitle) {
        readerChapterTitle.textContent =
            chapter.title;
    }

    if (readerChapterSubtitle) {
        readerChapterSubtitle.textContent =
            chapter.subtitle;
    }

    if (readerChapterEnding) {
        readerChapterEnding.textContent =
            chapter.ending;
    }


    /* -----------------------------------------
       CREATE STORY MOMENTS
    ----------------------------------------- */

    if (chapterMoments) {

        chapterMoments.innerHTML = "";

        chapter.moments.forEach(
            (moment, index) => {

                const momentElement =
                    document.createElement("article");

                momentElement.className =
                    "chapter-moment";

                momentElement.style.animationDelay =
                    `${index * 0.09}s`;

                const title =
                    document.createElement("h3");

                title.textContent =
                    moment.title;

                const text =
                    document.createElement("p");

                text.textContent =
                    moment.text;

                momentElement.appendChild(title);
                momentElement.appendChild(text);

                chapterMoments.appendChild(
                    momentElement
                );

            }
        );

    }


    /* -----------------------------------------
       OPEN READER
    ----------------------------------------- */

    chapterReader.classList.add(
        "is-open"
    );

    chapterReader.setAttribute(
        "aria-hidden",
        "false"
    );

    document.body.style.overflow =
        "hidden";


    /* -----------------------------------------
       RESET SCROLL
    ----------------------------------------- */

    chapterReader.scrollTop = 0;

    const chapterPage =
        chapterReader.querySelector(
            ".chapter-page"
        );

    if (chapterPage) {
        chapterPage.scrollTop = 0;
    }

}


/* =========================================
   CLOSE CHAPTER
========================================= */

function closeChapter() {

    if (!chapterReader) {
        return;
    }

    chapterReader.classList.remove(
        "is-open"
    );

    chapterReader.setAttribute(
        "aria-hidden",
        "true"
    );

    document.body.style.overflow =
        "";

}


/* =========================================
   CHAPTER CARD CLICK
========================================= */

const bookChapters =
    document.querySelectorAll(
        ".book-chapter[data-chapter]"
    );

bookChapters.forEach((chapter) => {

    chapter.addEventListener(
        "click",
        () => {

            const chapterId =
                chapter.getAttribute(
                    "data-chapter"
                );

            openChapter(chapterId);

        }
    );

});


/* =========================================
   CLOSE BUTTON
========================================= */

if (chapterReaderClose) {

    chapterReaderClose.addEventListener(
        "click",
        closeChapter
    );

}


/* =========================================
   CLOSE BY BACKDROP
========================================= */

if (chapterReaderBackdrop) {

    chapterReaderBackdrop.addEventListener(
        "click",
        closeChapter
    );

}


/* =========================================
   ESC KEY
========================================= */

document.addEventListener(
    "keydown",
    (event) => {

        if (
            event.key === "Escape" &&
            chapterReader &&
            chapterReader.classList.contains(
                "is-open"
            )
        ) {

            closeChapter();

        }

    }
);