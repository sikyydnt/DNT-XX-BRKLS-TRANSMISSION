const lines = [
"> booting DNT system...",
"> connecting underground network...",
"> loading artist profile...",
"> artist detected: $IKY",
"> access granted.",
"> preparing next release..."
];


let line = 0;
let char = 0;

const terminal = document.getElementById("terminal");


function write(){

    if(line < lines.length){

        if(char < lines[line].length){

            terminal.innerHTML += lines[line][char];

            char++;

            setTimeout(write,50);

        } else {

            terminal.innerHTML += "<br>";

            line++;
            char=0;

            setTimeout(write,500);
        }

    } else {

        // po dokončení animace zobrazí časovač
        showTimer();

    }

}


write();



function showTimer(){

    const timer = document.getElementById("timer");

    if(timer){
        timer.style.display="block";
    }


    startCountdown();

}




function startCountdown(){

    // datum releasu
    let release = new Date();

    release.setDate(release.getDate()+7);


    function update(){

        let now = new Date();

        let distance = release - now;


        let days = Math.floor(
            distance / (1000*60*60*24)
        );


        let hours = Math.floor(
            (distance%(1000*60*60*24)) /
            (1000*60*60)
        );


        let minutes = Math.floor(
            (distance%(1000*60*60)) /
            (1000*60)
        );


        let seconds = Math.floor(
            (distance%(1000*60)) /
            1000
        );


        let output =
        days+"d "+
        hours+"h "+
        minutes+"m "+
        seconds+"s";


        const display =
        document.getElementById("countdown");


        if(display){
            display.innerHTML = output;
        }


    }


    update();

    setInterval(update,1000);

}