const faders = document.querySelectorAll(".fade");

const observer = new IntersectionObserver(entries => {

entries.forEach(entry => {

if(entry.isIntersecting){

entry.target.classList.add("visible");

}

});

});

faders.forEach(el => observer.observe(el));


const weddingDate = new Date("April 19, 2026 11:30:00").getTime();

const timer = setInterval(function() {

const now = new Date().getTime();

const distance = weddingDate - now;

const days = Math.floor(distance / (1000 * 60 * 60 * 24));

document.getElementById("countdown").innerHTML =
days + " days to go";

}, 1000);


const music = document.getElementById("music");

function toggleMusic(){

if(music.paused){
music.play();
}
else{
music.pause();
}

}
