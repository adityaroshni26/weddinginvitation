/* ==========================================
   ADITYA & ROSHNI | WEDDING MEMORIES
========================================== */

const intro = document.getElementById("intro");
const site = document.getElementById("site");
const music = document.getElementById("music");


function openInvite(){

    intro.style.opacity = "0";

    setTimeout(()=>{

        intro.style.display = "none";

        site.style.display = "block";

        window.scrollTo({
            top:0,
            behavior:"smooth"
        });

        playMusic();

        initialiseReveal();

    },500);

}


/* ==========================================
   MUSIC
========================================== */

function playMusic(){

    if(!music) return;

    music.volume = 0.35;

    const promise = music.play();

    if(promise){

        promise.catch(()=>{

            document.body.addEventListener(

                "click",

                function firstClick(){

                    music.play().catch(()=>{});

                },

                { once:true }

            );

        });

    }

}

/* ==========================================
   SCROLL REVEAL
========================================== */

function initialiseReveal(){

    const revealItems = document.querySelectorAll(".reveal");

    const observer = new IntersectionObserver(

        function(entries){

            entries.forEach(function(entry){

                if(entry.isIntersecting){

                    entry.target.classList.add("visible");

                    observer.unobserve(entry.target);

                }

            });

        },

        {
            threshold:0.18,
            rootMargin:"0px 0px -60px 0px"
        }

    );

    revealItems.forEach(function(item){

        observer.observe(item);

    });

}



/* ==========================================
   FILM CARD ANIMATIONS
========================================== */

document.addEventListener("DOMContentLoaded",function(){

    const cards = document.querySelectorAll(".film-card");

    cards.forEach(function(card){

        card.addEventListener("mouseenter",function(){

            card.style.transform="translateY(-10px)";

        });

        card.addEventListener("mouseleave",function(){

            card.style.transform="translateY(0px)";

        });

    });

});



/* ==========================================
   PARALLAX HERO (Desktop)
========================================== */

window.addEventListener("scroll",function(){

    const video = document.getElementById("bg-video");

    if(!video) return;

    const offset = window.pageYOffset;

    video.style.transform = "translateY(" + (offset * 0.18) + "px)";

});

/* ==========================================
   MUSIC TOGGLE
========================================== */

const musicButton = document.createElement("button");

musicButton.innerHTML = "♫";

musicButton.className = "music-toggle";

document.body.appendChild(musicButton);

let musicPlaying = true;

musicButton.addEventListener("click",function(){

    if(!music) return;

    if(music.paused){

        music.play();

        musicButton.innerHTML = "♫";

        musicPlaying = true;

    }

    else{

        music.pause();

        musicButton.innerHTML = "♪";

        musicPlaying = false;

    }

});



/* ==========================================
   KEYBOARD SHORTCUT
========================================== */

document.addEventListener("keydown",function(event){

    if(event.key.toLowerCase()==="m"){

        musicButton.click();

    }

});



/* ==========================================
   BACK TO TOP ON REFRESH
========================================== */

window.onbeforeunload=function(){

    window.scrollTo(0,0);

};



/* ==========================================
   IMAGE LOADING
========================================== */

window.addEventListener("load",function(){

    document.querySelectorAll(".film-card img").forEach(function(img){

        img.loading="lazy";

        img.decoding="async";

    });

});



/* ==========================================
   CONSOLE MESSAGE
========================================== */

console.log(

"%c❤️ Aditya & Roshni ❤️",

"font-size:20px;color:#7C0A2B;font-weight:bold;"

);

console.log(

"%cThank you for visiting our wedding memories.",

"font-size:14px;color:#555;"

);
