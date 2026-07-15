// =====================================
// 18 LITTLE LETTERS - JS
// =====================================

const loadingScreen = document.getElementById("loadingScreen"); //
const startButton = document.getElementById("startButton"); //
const main = document.getElementById("main"); //[cite: 2]

const gift = document.getElementById("gift"); //[cite: 2]

const popup = document.getElementById("popup"); //[cite: 2]
const paperContent = document.getElementById("paperContent"); //[cite: 2]
const closePopup = document.getElementById("closePopup"); //[cite: 2]

const progressNumber = document.getElementById("progressNumber"); //[cite: 2]
const moon = document.getElementById("moon"); //[cite: 2]
const musicButton = document.getElementById("musicButton"); //[cite: 2]
const bgMusic = document.getElementById("bgMusic"); // Reference to the audio element in index.html

const letters = document.querySelectorAll(".letter"); //[cite: 2]

let currentLetter = 0; //[cite: 2]
let giftOpened = false; //[cite: 2]
let darkMode = false; //[cite: 2]

// ---------- Birthday Letters Content ----------
const birthdayLetters = [
    `<h2>🌸 Day 1</h2>
    <p>Happy 18th Birthday Kim! 🎂<br><br>
    I made this lil' website because I didn't want ur birthday to pass without at least wishing you something nice.
    I hope today gives you plenty of reasons to smileee.</p>`, //[cite: 2]

    `<h2>🎀 Day 2!!</h2>
    <p>I hope that this year brings u good memories, exciting opportunities, and lots of moments that make you genuinely happyy.</p>`, //[cite: 2]

    `<h2>☁️ Day 3!!</h2>
    <p>Take today a lil' slow. Like laugh a little louder, eat with your friends, and enjoy your day.</p>`, //[cite: 2]

    `<h2>🌷 Day 4!!</h2>
    <p>We both know that u push yourself a lil' too hard sometimes, don't forget to take care of yourself. Rest is productive too.  </p>`, //[cite: 2]

    `<h2>✨ Day 5! Keep it movin'</h2>
    <p>No matter where life takes you, never lose faith in urself. Trust ur strenght. I hope you keep believing in yourself, and move forward with courage</p>`, //[cite: 2]

    `<h2>💖 Day 6!!</h2>
    <p>Some of the best memories happen unexpectedly. I hope this year gives you plenty of them.</p>`, //[cite: 2]

    `<h2>🌼 Day 7!! wishes</h2>
    <p>May today ( your day ) be filled with kindness, laughter, and peace. And i hope it brings u happiness that you deserve</p>`, //[cite: 2]

    `<h2>🍓 Day 8!!</h2>
    <p>Never lose your curiosity bro. Keep learning new things and discover the world around u. I know that you're the type of person who's naturally curious.</p>`, //[cite: 2]

    `<h2>🌸 Day 9!!</h2>
    <p>I hope brighter days always find their way to you.</p>`, //[cite: 2]

    `<h2>🎀 Day 10!</h2>
    <p>Take lots of pictures today. Cuz youu'll be glad you did years from now that u stil have these little moments to look back on.</p>`, //[cite: 2]

    `<h2>☁️ Day 11!</h2>
    <p>Whenever life gets busy, don't forget to breath every once in awhile. Take time to rest.</p>`, //[cite: 2]

    `<h2>🌷 Day 12!!</h2>
    <p>Your future has many chapters left to be written. And i hopr they're filled with growth happiness and everything you've been working hard for.</p>`, //[cite: 2]

    `<h2>💌 Day 13!</h2>
    <p>Don't forget to celebrate your small victories.They may seem littl, but they serve as a reminder of how far you've come from.</p>`, //[cite: 2]

    `<h2>🌸 Day 14!!!</h2>
    <p> Even though this letter isn't that much, I hope it's still gave you one more reason to smile today. </p>`, //[cite: 2]

    `<h2>🎈 Day 15!!</h2>
    <p> 3 More days, gll!!!!!!!</p>`, //[cite: 2]

    `<h2>⭐ Day 16!</h2>
    <p>Move one step at a time. Every small step counts!, as they take you where you want to be.</p>`, //[cite: 2]

    `<h2>🎀 Day 17!!!!</h2>
    <p>Thank you for taking your time reading allofthis and opening every little letter.
    
    Sorry if this is way too short, I never really had a chance to take my time and do this. I wanted to atleast wish you something nice on your 18th birthday,</p>`, //[cite: 2]

    `<h2>LAST!!</h2>
    <p><strong>Happy birthday ailish!, i genuinely wish you a wonderful 18th birthday.</strong><br><br>
    I wish you all the very best as u strive as an 18 year old na.
    I hope u continue to grow into the person u really want to become, chase things na u know na that will you happy, and never lose the qualities that makes u who u really are. I hope u are surrounded by people that will make every moment of you smile, meet people who bring out the best in u!, and create memories with them so that some day you'll look back on with happiness.
    Thankyou for being part of my life and for the memories we shared. I truly hope that wherever life takes you, u find success, peace and happiness u always deserve. Always keep moving forward lang, takecare of yourself, nd don't forget to pray as always ha, your journey is only the beginning. <br><br>
    Happy 18th birthday, Kimm. I genuinely wish you all the very best, today and always.🫡. 🎉🌸</p>` //[cite: 2]
];

// ---------- App Flow Logic ----------

// Start Button Clicked
startButton.addEventListener("click", () => {
    loadingScreen.classList.add("hidden"); //[cite: 2]
    main.classList.remove("hidden");       //[cite: 2]
});

// Click Gift to unlock first letter
gift.addEventListener("click", () => {
    if (giftOpened) return; //[cite: 2]

    giftOpened = true; //[cite: 2]
    gift.innerHTML = `
        <div class="giftEmoji">🎉</div>
        <h2>Opened!</h2>
        <p>Your first letter has appeared.</p>
    `; //[cite: 2]
    unlockLetter(0); //[cite: 2]
});

// Unlock letter helper
function unlockLetter(index) {
    if (index >= letters.length) return; //[cite: 2]
    letters[index].classList.remove("locked"); //[cite: 2]
    letters[index].classList.add("unlocked"); //[cite: 2]
}

// Letter Grid Event Listeners
letters.forEach((letter, index) => {
    letter.addEventListener("click", () => {
        if (letter.classList.contains("locked")) return; //[cite: 2]
        openLetter(index); //[cite: 2]
    });
});

// Open Letter Modal Popup
function openLetter(index) {
    popup.classList.remove("hidden"); //[cite: 2]
    paperContent.innerHTML = birthdayLetters[index]; //[cite: 2]

    // Progress counter and unlock sequence
    if (index === currentLetter) {
        currentLetter++; //[cite: 2]
        progressNumber.textContent = currentLetter; //[cite: 2]
        unlockLetter(currentLetter); //[cite: 2]
    }
}

// Close Modal logic (X button and background click)
closePopup.addEventListener("click", () => {
    popup.classList.add("hidden"); //[cite: 2]
});

popup.addEventListener("click", (e) => {
    if (e.target === popup) {
        popup.classList.add("hidden"); //[cite: 2]
    }
});

// ---------- Music Toggle Logic ----------
musicButton.addEventListener("click", () => {
    if (bgMusic.paused) {
        bgMusic.play()
            .then(() => {
                musicButton.textContent = "⏸ Pause"; // Updates the button text
            })
            .catch(err => {
                console.error("Playback failed:", err);
                alert("Could not play music. Please ensure 'blue-sky.mp3' is in the same folder as this webpage.");
            });
    } else {
        bgMusic.pause();
        musicButton.textContent = "🎵 Music"; // Restores default text
    }
});