const lines = [
"> DNT NETWORK BOOTING...",
"> CONNECTING TO UNDERGROUND SERVER...",
"> LOADING $IKY PROFILE...",
"> CHECKING RELEASE DATABASE...",
"> ACCESS GRANTED.",
"> NEXT DROP READY."
];


let line = 0;
let char = 0;

const terminal = document.getElementById("terminal");


function writeText(){

    if(line < lines.length){

        if(char < lines[line].length){

            terminal.innerHTML += lines[line].charAt(char);

            char++;

            setTimeout(writeText,60);

        } else {

            terminal.innerHTML += "<br>";

            line++;
            char = 0;

            setTimeout(writeText,700);

        }


    } else {

        showTimer();

    }

}



function showTimer(){

    let timer = document.getElementById("timer");

    if(timer){
        timer.style.display = "block";
    }

    startCountdown();

}



function startCountdown(){

    let releaseDate = new Date();

    releaseDate.setDate(releaseDate.getDate()+7);


    function update(){

        let now = new Date();

        let distance = releaseDate - now;


        let days = Math.floor(distance/(1000*60*60*24));

        let hours = Math.floor(
        (distance%(1000*60*60*24))/(1000*60*60)
        );

        let minutes = Math.floor(
        (distance%(1000*60*60))/(1000*60)
        );

        let seconds = Math.floor(
        (distance%(1000*60))/1000
        );


        document.getElementById("countdown").innerHTML =
        days+"d "+
        hours+"h "+
        minutes+"m "+
        seconds+"s";


    }


    update();

    setInterval(update,1000);

}



writeText();