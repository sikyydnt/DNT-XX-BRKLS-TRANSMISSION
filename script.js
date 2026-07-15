const terminal = document.getElementById("terminal");
const timer = document.getElementById("timer");

const text = [
"> DNT NETWORK BOOTING...",
"> CONNECTING...",
"> LOADING $IKY...",
"> SYSTEM ONLINE.",
"> NEXT DROP READY."
];

let i = 0;

function start(){

    if(i < text.length){

        terminal.innerHTML += text[i] + "<br>";

        i++;

        setTimeout(start,1000);

    } else {

        timer.style.display = "block";

    }

}

start();
