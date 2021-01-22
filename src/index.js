import whitepaperEs from "../assets/docs/whitepaper_es.pdf";
import whitepaperEn from "../assets/docs/whitepaper_en.pdf";

const lang = window.navigator.language;
const docs = { whitepaper: null };

const loadSpanishDocs = () => {
    docs.whitepaper = whitepaperEs;
    console.log("loaded spanish docs", docs);
};

const loadEngDocs = () => {
    docs.whitepaper = whitepaperEn;
    console.log("loaded eng docs", docs);
};

const isSpanish = /[es]/.test(lang);

if (isSpanish) {
    loadSpanishDocs();
} else {
    loadEngDocs();
}
const onWhitepaperButtonClick = () => window.open(docs.whitepaper);

const whitepaperButtons = document.querySelectorAll(".whitepaper-btn");

whitepaperButtons.forEach((btn) =>
    btn.addEventListener("click", onWhitepaperButtonClick)
);

/** Menu stuff **/

const openMenuButton = document.querySelector(".menu-icon");
const closeMenuButton = document.querySelector(".close-btn");

const menu = document.querySelector(".menu");

const toggleMenu = () => menu.classList.toggle("open");
openMenuButton.addEventListener("click", toggleMenu);
closeMenuButton.addEventListener("click", toggleMenu);

/** Counter stuff **/

// Set the date we're counting down to
const countDownDate = new Date("Jan 27, 2021 00:00:00").getTime();

// Update the count down every 1 second
setInterval(() => {
    // Get today's date and time
    const now = new Date().getTime();

    // Find the distance between now and the count down date
    const distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the result in the element with id="demo"
    document.getElementById(
        "counter"
    ).innerHTML = ` <div class="flex flex-col" >
                            <span class="text-primary text-3xl">${
                                days > 10 ? days : `0${days}`
                            } :</span>
                            <span>Days</span>
                        </div>
                        <div class="flex flex-col">
                            <span class="text-primary text-3xl">${
                                hours > 10 ? hours : `0${hours}`
                            } :</span>
                            <span>Hours</span>
                        </div>
                        <div class="flex flex-col">
                            <span class="text-primary text-3xl">${
                                minutes > 10 ? minutes : `0${minutes}`
                            } :</span>
                            <span>Minutes</span>
                        </div>
                        <div class="flex flex-col">
                            <span class="text-primary text-3xl">${
                                seconds > 10 ? seconds : `0${seconds}`
                            }</span>
                            <span>Seconds</span>
                        </div>
 `;

    // If the count down is finished, write some text
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("counter").innerHTML = "EXPIRED";
    }
}, 1000);
