/* ==========================================================
   OUR UNIVERSE
   Music Player Module
   Production Version
   Part 1 : Foundation
========================================================== */

"use strict";

/* ==========================================================
   ELEMENT CACHE
========================================================== */

const musicSection = document.querySelector("#music-player");

if (!musicSection) {

    console.warn("Music Player section not found.");

} else {

    const audio = musicSection.querySelector("#love-song");

    const playerCard = musicSection.querySelector(".player-card");

    const playButton = musicSection.querySelector(".play-btn");

    const progressBar = musicSection.querySelector(".progress-bar");

    const progressFill = musicSection.querySelector(".progress-fill");

    const currentTime = musicSection.querySelector(".current-time");

    const duration = musicSection.querySelector(".duration");

    const volumeSlider = musicSection.querySelector(".volume-slider");

    const visualizerBars = [
        ...musicSection.querySelectorAll(".visualizer span")
    ];
        /* ==========================================================
       LYRICS ELEMENTS
    ========================================================== */

    const lyricsPanel =
        musicSection.querySelector(".lyrics-panel");

    const previousLyric =
        musicSection.querySelector(".lyrics-line.previous");

    const activeLyric =
        musicSection.querySelector(".lyrics-line.active");

    const nextLyric =
        musicSection.querySelector(".lyrics-line.next");

    /* ==========================================================
   SYNCED LYRICS
========================================================== */

const lyrics = [

    /* ===========================
       VERSE 1
    =========================== */

    {
        time: 1,
        text: "Back in twenty-twenty-one, we both were two silly girls..."
    },

    {
        time: 4,
        text: "First meeting was done, though I never knew you were the one...."
    },

    {
        time: 9,
        text: "But in twenty twenty-two, there's something really new."
    },

    {
        time: 15,
        text: "After school end, you were talking like a radio....."
    },

    {
        time: 18,
        text: "I was quiet as a rock, just walking by your side"
    },

    {
        time: 22,
        text: "Listening to your endless stories, taking in the ride."
    },

    {
        time: 25,
        text: "We were polar opposites, like fire and the snow"
    },

    {
        time: 28,
        text: "But somehow we clicked, and the feelings.... started to grow!"
    },


    /* ===========================
       PRE-CHORUS
    =========================== */

    {
        time: 35,
        text: "Oh, remember that time we felt like we wanted to... you know?"
    },

    {
        time: 40,
        text: "Just a little kiss, but we had to let it go!"
    },

    {
        time: 46,
        text: "We locked it in a box, tried to play it cool"
    },

    {
        time: 49,
        text: "But man, we were just two blushing kids or you can say a fool..."
    },


    /* ===========================
       CHORUS
    =========================== */

    {
        time: 53,
        text: "And then 2023, shikkim in the cold"
    },

    {
        time: 56,
        text: "I looked at your face, feeling super bold."
    },

    {
        time: 59,
        text: "Said “hey, I hate you”… yeah that was my line"
    },

    {
        time: 62,
        text: "In the snow that day, but you felt like mine and only mine..."
    },

    {
        time: 68,
        text: "Yeah, I moved to a new city, miles and miles away"
    },

    {
        time: 71,
        text: "But I still keep a chocolate in my pocket every day!"
    },

    {
        time: 77,
        text: "Chocolate in my pocket......"
    },


    /* ===========================
       VERSE 2
    =========================== */

    {
        time: 90,
        text: "Now we argue like crazy, we fight and we scream"
    },

    {
        time: 93,
        text: "But five minutes later, we're back in the dream."
    },

    {
        time: 96,
        text: "Remember that friendship day? That silly little hour?"
    },

    {
        time: 100,
        text: "When I handed you that basic white hibiscus flower?"
    },

    {
        time: 105,
        text: "Yeah, it wasn't a red rose, but it did the trick"
    },

    {
        time: 108,
        text: "Now we're the kind of weirdos that actually.... stick!"
    },


    /* ===========================
       CHORUS ×2
    =========================== */

    {
        time: 114,
        text: "Then 2023, shikkim in the cold"
    },

    {
        time: 118,
        text: "I looked at your face, feeling super bold."
    },

    {
        time: 121,
        text: "Said “hey, I hate you”… yeah that was my line"
    },

    {
        time: 124,
        text: "In the snow that day, but you felt like mine and only mine..."
    },

    {
        time: 130,
        text: "Yeah, I moved to a new city, miles and miles away"
    },

    {
        time: 132,
        text: "But I still keep a chocolate in my pocket every day!"
    },

    {
        time: 139,
        text: "Chocolate in my pocket..."
    },


    /* ===========================
       OUTRO
    =========================== */

    {
        time: 151,
        text: "No guitar, no piano, no fancy backup band"
    },

    {
        time: 155,
        text: "Just me and my goofy voice, trying to hold your hand."
    },

    {
        time: 158,
        text: "So yeah... I \"hate\" you, okay?"
    },

    {
        time: 164,
        text: "But honestly, I fall in love with you more and more.... every single day!"
    },


    /* ===========================
       FINAL CHORUS ×3
    =========================== */

    {
        time: 171,
        text: "Then 2023, shikkim in the cold"
    },

    {
        time: 174,
        text: "I looked at your face, feeling super bold."
    },

    {
        time: 176,
        text: "Said “hey, I hate you”… yeah that was my line"
    },

    {
        time: 180,
        text: "In the snow that day, but you felt like mine and only mine..."
    },

    {
        time: 185,
        text: "Yeah, I moved to a new city, miles and miles away"
    },

    {
        time: 188,
        text: "But I still keep a chocolate in my pocket every day!"
    },

    {
        time: 197,
        text: "Chocolate in my pocket....."
    }

];

let currentLyricIndex = 0;

function updateLyrics(index){

    if(
        !lyricsPanel ||
        !previousLyric ||
        !activeLyric ||
        !nextLyric
    ){
        return;
    }

    /* ------------------------------------------------------
       Start transition
    ------------------------------------------------------ */

    lyricsPanel.classList.add("lyrics-changing");


    /* ------------------------------------------------------
       Small delay
       Gives the old lyric time to fade out
    ------------------------------------------------------ */

    setTimeout(()=>{

        previousLyric.textContent =
            index > 0
            ? lyrics[index - 1].text
            : "";

        activeLyric.textContent =
            lyrics[index]
            ? lyrics[index].text
            : "";

        nextLyric.textContent =
            lyrics[index + 1]
            ? lyrics[index + 1].text
            : "";


        /* --------------------------------------------------
           Bring new lyric back
        -------------------------------------------------- */

        requestAnimationFrame(()=>{

            requestAnimationFrame(()=>{

                lyricsPanel.classList.remove(
                    "lyrics-changing"
                );

            });

        });

    }, 350);
}
        /* ==========================================================
       PLAYER STATE
    ========================================================== */

    let isPlaying = false;

    let visualizerInterval = null;

    /* ==========================================================
       FUNCTIONS
       (Next Part)
    ========================================================== */
    /* ==========================================================
   PLAYBACK CONTROL
   Part 2 : Play / Pause
========================================================== */


/* ===========================
   UPDATE PLAYER UI
=========================== */

function updatePlayerState(){

    playerCard.classList.toggle(
        "is-playing",
        isPlaying
    );


    playButton.textContent =
        isPlaying ? "❚❚" : "▶";


    playButton.setAttribute(
        "aria-label",
        isPlaying
        ? "Pause Music"
        : "Play Music"
    );

}


/* ===========================
   TOGGLE PLAY / PAUSE
=========================== */

function togglePlayPause(){

    if(audio.paused){

        audio.play();

    }
    else{

        audio.pause();

    }

}


/* ===========================
   AUDIO STATE EVENTS
=========================== */

audio.addEventListener(
    "play",
    ()=>{

        isPlaying = true;

        updatePlayerState();

    }
);


audio.addEventListener(
    "pause",
    ()=>{

        isPlaying = false;

        updatePlayerState();

    }
);


/* ===========================
   BUTTON EVENT
=========================== */

playButton.addEventListener(
    "click",
    togglePlayPause
);
/* ==========================================================
   TIME & PROGRESS SYSTEM
   Part 3 : Duration / Seek
========================================================== */


/* ===========================
   FORMAT TIME
=========================== */

function formatTime(seconds){

    if(!Number.isFinite(seconds)){

        return "0:00";

    }


    const minutes =
        Math.floor(seconds / 60);


    const secondsPart =
        Math.floor(seconds % 60);


    return `${minutes}:${String(secondsPart).padStart(2,"0")}`;

}



/* ===========================
   LOAD SONG DURATION
=========================== */

audio.addEventListener(
    "loadedmetadata",
    ()=>{

        duration.textContent =
            formatTime(audio.duration);

    }
);



/* ===========================
   UPDATE PROGRESS
=========================== */

audio.addEventListener(
    "timeupdate",
    ()=>{

        /* ===========================
           CURRENT TIME
        =========================== */

        currentTime.textContent =
            formatTime(audio.currentTime);


        /* ===========================
           PROGRESS
        =========================== */

        if(audio.duration){

            const progress =
                (audio.currentTime / audio.duration) * 100;


            progressFill.style.width =
                `${progress}%`;

        }


        /* ===========================
           SYNC LYRICS
        =========================== */

        for(
            let i = lyrics.length - 1;
            i >= 0;
            i--
        ){

            if(
                audio.currentTime >=
                lyrics[i].time
            ){

                if(
                    currentLyricIndex !== i
                ){

                    currentLyricIndex = i;

                    updateLyrics(
                        currentLyricIndex
                    );

                }

                break;
            }

        }

    }
);



/* ===========================
   SEEK CONTROL
=========================== */

progressBar.addEventListener(
    "click",
    (event)=>{


        if(!audio.duration){

            return;

        }


        const rect =
            progressBar.getBoundingClientRect();



        const clickPosition =
            event.clientX - rect.left;



        const percentage =
            clickPosition / rect.width;



        audio.currentTime =
            percentage * audio.duration;


    }
);/* ==========================================================
   ACCESSIBILITY CONTROLS
   Part 4 : Volume / Keyboard
========================================================== */


/* ===========================
   VOLUME CONTROL
=========================== */

volumeSlider.addEventListener(
    "input",
    ()=>{

        audio.volume =
            Number(volumeSlider.value);

    }
);



/* ===========================
   PLAY BUTTON KEYBOARD
=========================== */

playButton.addEventListener(
    "keydown",
    (event)=>{


        if(
            event.key === "Enter" ||
            event.key === " "
        ){

            event.preventDefault();

            togglePlayPause();

        }

    }
);



/* ===========================
   PROGRESS KEYBOARD SEEK
=========================== */

progressBar.addEventListener(
    "keydown",
    (event)=>{


        if(!audio.duration){

            return;

        }


        const step = 5;



        if(event.key === "ArrowRight"){

            event.preventDefault();


            audio.currentTime =
                Math.min(
                    audio.currentTime + step,
                    audio.duration
                );

        }



        if(event.key === "ArrowLeft"){

            event.preventDefault();


            audio.currentTime =
                Math.max(
                    audio.currentTime - step,
                    0
                );

        }


    }
);/* ==========================================================
   VISUALIZER SYSTEM
   Part 5 : Audio Visual Feedback
========================================================== */


/* ===========================
   START VISUALIZER
=========================== */

function startVisualizer(){

    stopVisualizer();


    visualizerInterval = setInterval(
        ()=>{


            visualizerBars.forEach(
                (bar)=>{


                    const scale =
                        0.5 + Math.random() * 1.8;


                    bar.style.transform =
                        `scaleY(${scale})`;


                }
            );


        },
        150
    );

}



/* ===========================
   STOP VISUALIZER
=========================== */

function stopVisualizer(){


    clearInterval(
        visualizerInterval
    );


    visualizerInterval = null;



    visualizerBars.forEach(
        (bar)=>{

            bar.style.transform =
                "scaleY(1)";

        }
    );

}



/* ===========================
   VISUALIZER EVENTS
=========================== */

audio.addEventListener(
    "play",
    startVisualizer
);


audio.addEventListener(
    "pause",
    stopVisualizer
);



/* ===========================
   SONG END
=========================== */

audio.addEventListener(
    "ended",
    ()=>{


        isPlaying = false;


        updatePlayerState();


        stopVisualizer();



        progressFill.style.width =
            "0%";


        currentTime.textContent =
            "0:00";
            currentLyricIndex = 0;

updateLyrics(
    currentLyricIndex
);


    }
);/* ==========================================================
   FINAL INITIALIZATION
   Part 6 : Module Complete
========================================================== */


/* ===========================
   INITIAL STATE
=========================== */

updatePlayerState();


progressFill.style.width = "0%";


currentTime.textContent = "0:00";
currentLyricIndex = 0;

updateLyrics(
    currentLyricIndex
);


if(audio.volume === 1){

    volumeSlider.value = 1;

}



/* ===========================
   CLEANUP
=========================== */

window.addEventListener(
    "beforeunload",
    ()=>{

        stopVisualizer();

    }
);

/* ==========================================================
   ALBUM COVER PARALLAX
   Part 1 : Mouse Tilt
========================================================== */


/* ===========================
   ELEMENT
=========================== */

const albumCover =
    musicSection.querySelector(".album-cover");



/* ===========================
   DESKTOP PARALLAX
=========================== */

if(albumCover){


    albumCover.addEventListener(
        "mousemove",
        (event)=>{


            const rect =
                albumCover.getBoundingClientRect();



            const x =
                event.clientX - rect.left;


            const y =
                event.clientY - rect.top;



            const centerX =
                rect.width / 2;


            const centerY =
                rect.height / 2;



            const rotateY =
                ((x - centerX) / centerX) * 8;


            const rotateX =
                ((centerY - y) / centerY) * 8;



            albumCover.style.transform =
                `
                rotateX(${rotateX}deg)
                rotateY(${rotateY}deg)
                `;


        }
    );



    albumCover.addEventListener(
        "mouseleave",
        ()=>{


            albumCover.style.transform =
                "rotateX(0deg) rotateY(0deg)";


        }
    );


}
} // End of Music Section Module
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