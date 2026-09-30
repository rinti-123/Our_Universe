/* ==========================================================
   OUR UNIVERSE
   Love Letter
   Final Version
========================================================== */

'use strict';


/* ==========================================================
   ELEMENTS
========================================================== */

const envelope =
    document.querySelector('#love-envelope');

const letterPaper =
    document.querySelector('#letter-paper');

const letterText =
    document.querySelector('#letter-text');


/* ==========================================================
   LETTER CONTENT
========================================================== */

const loveLetter =
 `My Dear Angry Bird ❤️

If someone had told me that somewhere in this enormous universe,
among billions of stars and countless little moments,
I would somehow find someone who could make my world feel different...

I probably wouldn't have believed them.

Because out of all the places we could have been,
all the moments that could have happened,
and all the people we could have met—

somehow,,, we found each other.

And maybe that's what makes us so special to me.

It wasn't one huge moment that made you important to me.
It was all the little things.

The conversations I didn't want to end.
The random moments that stayed in my mind for no reason.
The smiles you gave me without even realizing how much they meant.

Little by little,
you became a part of my days...

and then, somehow,
a part of my HEART.

I don't know what the future has written for us.
I don't know where this universe will take us next.

But I know one thing—

if I had the chance to find you all over again,
in another lifetime,
in another universe,
among another billion stars...

I would still choose to find you.

Because in a universe this impossibly big,

you became my favorite little part of it.

So this isn't just a letter.

It's a tiny piece of everything I couldn't say out loud.

And if you ever wonder what you mean to me...

just remember—

out of everything the universe could have given me,
I'm grateful that it gave me you.`;


/* ==========================================================
   STATE
========================================================== */

let letterOpened = false;
let typingRun = 0;


/* ==========================================================
   SAFETY CHECK
========================================================== */

if (!envelope || !letterPaper || !letterText) {

    console.warn(
        '[Our Universe] Love Letter elements not found.'
    );

}


/* ==========================================================
   TYPEWRITER
========================================================== */

async function typeLetter(text, speed = 45) {

    const currentRun = ++typingRun;

    letterText.textContent = '';

    for (let i = 0; i < text.length; i++) {

        if (currentRun !== typingRun) {
            return;
        }

        letterText.textContent =
            text.substring(0, i + 1);

        await new Promise(resolve => {
            setTimeout(resolve, speed);
        });

    }

}


/* ==========================================================
   OPEN LETTER
========================================================== */

async function openLetter() {

    if (letterOpened) return;

    letterOpened = true;

    envelope.classList.add('is-open');


    /* Wait for envelope animation */

    await new Promise(resolve => {
        setTimeout(resolve, 900);
    });


    /* Start letter typewriter */

    await typeLetter(loveLetter, 45 );

}


/* ==========================================================
   EVENTS
========================================================== */

if (envelope) {

    envelope.addEventListener(
        'click',
        openLetter
    );


    envelope.addEventListener(
        'keydown',
        event => {

            if (
                event.key === 'Enter' ||
                event.key === ' '
            ) {

                event.preventDefault();

                openLetter();

            }

        }
    );

}