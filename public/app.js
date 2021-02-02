var min = 0;
var sec = 0;
var milli = 0;

var minh = document.getElementById("min");
var sech = document.getElementById("sec");
var millih = document.getElementById("milli");
var interval;


function time(){
    milli++
    millih.innerHTML = milli;

    if(millih >= 100){
        sec++
        sech.innerHTML = sec;
        milli = 0
    }
    else if (sec >= 60){
        min++
        minh.innerHTML = min;
        sec = 0
    }

}

function unread(){
    document.getElementById("btnst").disabled = true;
}



function read(){
    document.getElementById("btnst").disabled = false;
}


function start(){
    interval = setInterval(time,10)
    unread()
}



function stop(){
    clearInterval(interval, 100)
    read()
}

function reset(){
     millih.innerHTML = 0;
     sech.innerHTML = 0;
     minh.innerHTML = 0;      
    stop();
    read();
}
