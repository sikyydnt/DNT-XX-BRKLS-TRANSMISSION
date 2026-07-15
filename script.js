const terminal = document.getElementById("terminal");
const countdown = document.getElementById("countdown");


const text = [

"> VERNISAUGE NETWORK BOOTING...",
"> CONNECTING...",
"> LOADING...",
"> SYSTEM ONLINE."

];


let i = 0;



function boot(){

if(i < text.length){


terminal.innerHTML += text[i] + "<br>";

i++;


setTimeout(boot,1000);


}

else{


setTimeout(()=>{


terminal.style.display="none";

countdown.style.display="block";


startCountdown();


},1000);


}

}



let time = 3600;



function startCountdown(){


setInterval(()=>{


let hours=Math.floor(time/3600);

let minutes=Math.floor((time%3600)/60);

let seconds=time%60;



countdown.innerHTML =

String(hours).padStart(2,"0")
+":"+
String(minutes).padStart(2,"0")
+":"+
String(seconds).padStart(2,"0");



if(time>0){

time--;

}


},1000);


}



boot();
