var com = [];
var user = [];
var result = [];

function rock() {
    
    let com = Math.floor(Math.random() * 3) +1;
    console.log(com);

    if ( com == 1 ) {
        document.getElementById("gif1").style.opacity = 1;
        document.getElementById("gif2").style.opacity = 0;
        document.getElementById("gif3").style.opacity = 0; 
        result = 1;
        console.log(result);
    }
    else if (com == 2) {
        document.getElementById("gif1").style.opacity = 0;
        document.getElementById("gif2").style.opacity = 1;
        document.getElementById("gif3").style.opacity = 0; 
        result = 2;
        console.log(result);
    }
    else {
        document.getElementById("gif1").style.opacity = 0;
        document.getElementById("gif2").style.opacity = 0;
        document.getElementById("gif3").style.opacity = 1; 
        result = 3;
        console.log(result);
    }

}

function paper() {
    
    let com = Math.floor(Math.random() * 3) +1;
    console.log(com);

    if ( com == 1 ) {
        document.getElementById("gif1").style.opacity = 1;
        document.getElementById("gif2").style.opacity = 0;
        document.getElementById("gif3").style.opacity = 0; 
        result = 2;
        console.log(result);
    }
    else if (com == 2) {
        document.getElementById("gif1").style.opacity = 0;
        document.getElementById("gif2").style.opacity = 1;
        document.getElementById("gif3").style.opacity = 0; 
        result = 3;
        console.log(result);
    }
    else {
        document.getElementById("gif1").style.opacity = 0;
        document.getElementById("gif2").style.opacity = 0;
        document.getElementById("gif3").style.opacity = 1; 
        result = 1;
        console.log(result);
    }

}


function scissors() {
    
    let com = Math.floor(Math.random() * 3) +1;
    console.log(com);

    if ( com == 1 ) {
        document.getElementById("gif1").style.opacity = 1;
        document.getElementById("gif2").style.opacity = 0;
        document.getElementById("gif3").style.opacity = 0; 
        result = 3;
        console.log(result);
    }
    else if (com == 2) {
        document.getElementById("gif1").style.opacity = 0;
        document.getElementById("gif2").style.opacity = 1;
        document.getElementById("gif3").style.opacity = 0; 
        result = 1;
        console.log(result);
    }
    else {
        document.getElementById("gif1").style.opacity = 0;
        document.getElementById("gif2").style.opacity = 0;
        document.getElementById("gif3").style.opacity = 1; 
        result = 2;
        console.log(result);
    }

}


function results() {
    if (result == 1) {
        document.getElementById("win").style.opacity = 1;
        document.getElementById("lost").style.opacity = 0;
        document.getElementById("tie").style.opacity = 0;
    } else if (result == 2) {
        document.getElementById("win").style.opacity = 0;
        document.getElementById("lost").style.opacity = 1;
        document.getElementById("tie").style.opacity = 0;
    }
    else if (result == 3) {
        document.getElementById("win").style.opacity = 0;
        document.getElementById("lost").style.opacity = 0;
        document.getElementById("tie").style.opacity = 1;
    }
}
