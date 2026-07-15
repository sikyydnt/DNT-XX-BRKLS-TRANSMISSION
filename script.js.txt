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


},50);


}