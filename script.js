function openInvite(){

document.getElementById("intro").style.display="none";
document.getElementById("site").style.display="block";

}


const weddingDate = new Date("April 19, 2026");

function updateCountdown(){

const today = new Date();
today.setHours(0,0,0,0);

const diff = weddingDate - today;

const days = Math.ceil(diff/(1000*60*60*24));

const el = document.getElementById("countdown");

if(days>1){
el.innerHTML = days + " days to go";
}

else if(days===1){
el.innerHTML = "1 day to go";
}

else if(days===0){
el.innerHTML = "The celebrations begin today ✨";
}

else{
el.innerHTML = "Thank you for celebrating with us ❤️";
}

}

updateCountdown();
setInterval(updateCountdown,3600000);


/* invite filtering */

const params = new URLSearchParams(window.location.search);
const code = params.get("g");

function hideSection(name){

const el = document.querySelector("." + name);

if(el){el.remove();}

}

if(code==="B2"){
hideSection("engagement");
hideSection("sangeet");
}

if(code==="C3"){
hideSection("engagement");
hideSection("haldi");
hideSection("sangeet");
}
