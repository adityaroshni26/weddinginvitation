/* ==========================================
   ADITYA & ROSHNI | WEDDING MEMORIES
========================================== */

const intro = document.getElementById("intro");
const site = document.getElementById("site");
const music = document.getElementById("music");


function openInvite(){

    const button = document.querySelector(".open-btn");

if(button){

    button.style.transform = "scale(.96)";

    setTimeout(function(){

        button.style.transform = "";

    },150);

} 
   
    intro.style.transition = "opacity .8s ease";

    intro.style.opacity = "0";

    setTimeout(function(){

        intro.style.display = "none";

        site.style.display = "block";

        site.style.opacity = "0";

        site.style.transition = "opacity .9s ease";

        requestAnimationFrame(function(){

            site.style.opacity = "1";

        });

        window.scrollTo({

            top:0,

            behavior:"smooth"

        });

        playMusic();

        initialiseReveal();

    },800);

}

/* ==========================================
   MUSIC
========================================== */

function playMusic(){

    if(!music) return;

    music.volume = 0;

    const promise = music.play();

    fadeInMusic();

   musicButton.innerHTML = "🔊";

musicPlaying = true;

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
   MUSIC FADE IN
========================================== */

function fadeInMusic(){

    let volume = 0;

    music.volume = 0;

    const fade = setInterval(function(){

        volume += 0.02;

        if(volume >= 0.22){

            volume = 0.22;

            clearInterval(fade);

        }

        music.volume = volume;

    },180);

}

/* ==========================================
   SCROLL REVEAL
========================================== */

function initialiseReveal(){

    const revealItems = document.querySelectorAll(".reveal");

    const observer = new IntersectionObserver(

        function(entries){

            entries.forEach(function(entry,index){

                if(entry.isIntersecting){

                    setTimeout(function(){

    entry.target.classList.add("visible");

},index*120);

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
   CARD TILT
========================================== */

document.querySelectorAll(".film-card").forEach(function(card){

    card.addEventListener("mousemove",function(e){

        const rect = card.getBoundingClientRect();

        const x = e.clientX - rect.left;

        const y = e.clientY - rect.top;

        const rotateY = (x / rect.width - 0.5) * 10;

        const rotateX = (0.5 - y / rect.height) * 10;

        card.style.transform =

        `perspective(900px)

        rotateX(${rotateX}deg)

        rotateY(${rotateY}deg)

        translateY(-8px)`;

    });

    card.addEventListener("mouseleave",function(){

        card.style.transform="";

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

musicButton.innerHTML = "🔊";

musicButton.className = "music-toggle";

document.body.appendChild(musicButton);

let musicPlaying = false;

musicButton.addEventListener("click",function(){

    if(!music) return;

    if(music.paused){

        music.play();

        musicButton.innerHTML = "🔊";

        musicPlaying = true;

    }

    else{

        music.pause();

        musicButton.innerHTML = "🔇";

        musicPlaying = false;

    }

});

/* ==========================================
   BACK TO TOP
========================================== */

const topButton = document.createElement("button");

topButton.innerHTML = "↑";

topButton.className = "music-toggle";

topButton.style.bottom = "95px";

topButton.style.opacity = "0";

topButton.style.pointerEvents = "none";

document.body.appendChild(topButton);

window.addEventListener("scroll",function(){

    if(window.scrollY > 600){

        topButton.style.opacity = "1";

        topButton.style.pointerEvents = "auto";

    }

    else{

        topButton.style.opacity = "0";

        topButton.style.pointerEvents = "none";

    }

});

topButton.addEventListener("click",function(){

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});

/* ==========================================
   KEYBOARD SHORTCUT
========================================== */

document.addEventListener("keydown",function(event){

    if(event.key.toLowerCase()==="m" && !event.repeat){

        musicButton.click();

    }

});



/* ==========================================
   BACK TO TOP ON REFRESH
========================================== */

window.onbeforeunload=function(){

    window.scrollTo({

        top:0,

        left:0,

        behavior:"instant"

    });

};



/* ==========================================
   IMAGE LOADING
========================================== */

window.addEventListener("load",function(){

    document.querySelectorAll(".film-card img").forEach(function(img){

        img.loading="lazy";

        img.decoding="async";

        img.style.opacity="0";

        img.onload=function(){

            img.style.transition="opacity .6s ease";

            img.style.opacity="1";

        };

        if(img.complete){

            img.style.opacity="1";

        }

    });

});



/* ==========================================
   CONSOLE MESSAGE
========================================== */
/* ==========================================
   PAGE VISIBILITY
========================================== */

document.addEventListener("visibilitychange",function(){

    if(!music) return;

    if(document.hidden){

        music.pause();

    }

    else if(musicPlaying){

        music.play().catch(()=>{});

    }

});

console.clear();

console.log(

"%cAditya ❤ Roshni",

"font-size:26px;font-weight:bold;color:#7C0A2B;"

);

console.log(

"%cThank you for visiting our Wedding Memories.",

"font-size:15px;color:#c9a34e;"

);

console.log(

"%cMay every visitor leave with a smile. ❤️",

"font-size:13px;color:#666;"

);

document.documentElement.style.scrollBehavior = "smooth";

/* ==========================================
   MOBILE PERFORMANCE
========================================== */

if(window.innerWidth<768){

    document.querySelectorAll(".film-card").forEach(function(card){

        card.style.transform="none";

    });

}
