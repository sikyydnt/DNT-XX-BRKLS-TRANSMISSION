const terminal = document.getElementById("terminal");
const timer = document.getElementById("timer");

const text = [
    "> DNT NETWORK BOOTING...",
    "> CONNECTING...",
    "> LOADING $IKY...",
    "> ACCESS GRANTED.",
    "> SYSTEM ONLINE.",
    "> NEXT DROP READY."
];

let i = 0;

function start() {

    if (i < text.length) {

        let line = document.createElement("div");
        line.textContent = text[i];

        terminal.appendChild(line);

        i++;

        setTimeout(start, 1200);

    } else {

        if(timer){
            timer.style.display = "block";
        }

    }
}

window.onload = start;
