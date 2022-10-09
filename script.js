const colors = ["#d9534f", "#f9f9f9", "#5bc0de","#5cb85c","#428bca"];
const body = document.querySelector('body');
const contenedor = document.getElementsByClassName('container');

function displayTime(){
    var dateTime = new Date();
    var hrs = dateTime.getHours();
    var min = dateTime.getMinutes();
    var sec = dateTime.getSeconds();
    var session = document.getElementById('session');


    if(hrs >= 12){
        session.innerHTML = 'PM';
    }else{
        session.innerHTML = 'AM';
    }

    if(hrs > 12){
        hrs = hrs - 12;
    }

    document.getElementById('hours').innerHTML = hrs;
    document.getElementById('minutes').innerHTML = min;
    document.getElementById('seconds').innerHTML = sec;
}

function cambiar(){
    const index = Math.floor(Math.random() * colors.length);
    let hex_key=colors[index];
    body.style.background = hex_key;
    body.style.transition= '1s';
}

setInterval(displayTime, 10);
setInterval(cambiar, 50);
