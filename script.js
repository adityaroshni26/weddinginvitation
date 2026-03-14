function openInvite(){

document.getElementById("intro").style.display="none";
document.getElementById("site").style.display="block";

document.getElementById("music").play();

}

const weddingDate = new Date("April 19, 2026");

function updateCountdown(){

const today = new Date();

today.setHours(0,0,0,0);

const difference = weddingDate - today;

const days = Math.ceil(difference / (1000 * 60 * 60 * 24));

const countdownElement = document.getElementById("countdown");

if(days > 1){

countdownElement.innerHTML = days + " days to go";

}

else if(days === 1){

countdownElement.innerHTML = "1 day to go";

}

else if(days === 0){

countdownElement.innerHTML = "The celebrations begin today ✨";

}

else{

countdownElement.innerHTML = "Thank you for celebrating with us ❤️";

}

}

updateCountdown();

setInterval(updateCountdown, 1000 * 60 * 60);
