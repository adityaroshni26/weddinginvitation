function openInvite(){

document.getElementById("intro").style.display="none";
document.getElementById("site").style.display="block";

document.getElementById("music").play();

}

const weddingDate = new Date("April 19, 2026 11:30:00").getTime();

setInterval(function(){

const now = new Date().getTime();

const distance = weddingDate - now;

const days = Math.floor(distance/(1000*60*60*24));

document.getElementById("countdown").innerHTML =
days + " days to go";

},1000);
