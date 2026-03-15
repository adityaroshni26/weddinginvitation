function openInvite(){

  document.getElementById("intro").style.display = "none";
  document.getElementById("site").style.display = "block";

  const music = document.getElementById("music");

  if(music){
    music.volume = 0.6;
    music.play().catch(()=>{});
  }

}


/* COUNTDOWN */

const weddingDate = new Date("April 19, 2026");

function updateCountdown(){

  const today = new Date();
  today.setHours(0,0,0,0);

  const diff = weddingDate - today;

  const days = Math.ceil(diff/(1000*60*60*24));

  const el = document.getElementById("countdown");

  if(days > 1){
    el.innerHTML = days + " days to go";
  }

  else if(days === 1){
    el.innerHTML = "1 day to go";
  }

  else if(days === 0){
    el.innerHTML = "The celebrations begin today ✨";
  }

  else{
    el.innerHTML = "Thank you for celebrating with us ❤️";
  }

}

updateCountdown();
setInterval(updateCountdown,3600000);



/* INVITE FILTERING */

const params = new URLSearchParams(window.location.search);
const code = params.get("c");


function hideSection(section){

  const el = document.querySelector("." + section);

  if(el){
    el.remove();
  }

}


/*
Invite Codes

7kF2  → Family (all events)
p9L4  → Friends (cover + haldi + wedding)
X3t8  → Wedding only (cover + wedding)
*/


if(code === "p9L4"){

  hideSection("sangeet");

}


if(code === "X3t8"){

  hideSection("haldi");
  hideSection("sangeet");

}
