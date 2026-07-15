const boot = document.getElementById("boot");
const terminal = document.querySelector(".terminal");
const output = document.getElementById("output");


setTimeout(()=>{


boot.style.display="none";

terminal.style.display="block";


startTerminal();


},3000);



const messages=[

"CONNECTING TO DNT NETWORK...",
"SEARCHING FREQUENCY...",
"97.3 FM FOUND",
"SIGNAL LOCKED",
"ENCRYPTING AUDIO FILES...",
"TRANSMISSION READY"

];



let index=0;


function startTerminal(){

if(index < messages.length){


typeText(messages[index]);


index++;


setTimeout(startTerminal,1200);


}


}



function typeText(text){


let line=document.createElement("div");

output.appendChild(line);


let i=0;


let timer=setInterval(()=>{


line.innerHTML+=text[i];


i++;


if(i>=text.length){

clearInterval(timer);

}

// Časovač po úvodní animaci

setTimeout(()=>{

document.getElementById("timer").classList.remove("hidden");

let end = new Date();

end.setDate(end.getDate()+7); // za 7 dní


function updateTimer(){

let now = new Date();

let distance = end - now;


let days = Math.floor(distance/(1000*60*60*24));
let hours = Math.floor((distance%(1000*60*60*24))/(1000*60*60));
let minutes = Math.floor((distance%(1000*60*60))/(1000*60));
let seconds = Math.floor((distance%(1000*60))/1000);


document.getElementById("countdown").innerHTML =
days+"d "+
hours+"h "+
minutes+"m "+
seconds+"s";

}


updateTimer();

setInterval(updateTimer,1000);


},6000);


},50);


}