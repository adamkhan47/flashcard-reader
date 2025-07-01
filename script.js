const stored = JSON.parse(localStorage.getItem('localStorage1')); 
let number = 0;
let shown = 0;
let lengthOfArray = stored.term;
lengthOfArray = lengthOfArray.length;
function flashcardLoad() {
    document.getElementById("flashinfo").style.visibility = "visible";
    document.getElementById('flipThing').innerHTML = stored.term[0];
}
function buttonFlip() {
    if (shown === 0) {
        shown = 1;
        document.getElementById('flipThing').innerHTML = stored.def[number];
    }
    else {
        shown = 0;
        document.getElementById('flipThing').innerHTML = stored.term[number];
    }
}
function buttonLeft() {
    if (number === 0) {
    }
    else {
        number = number-1;
        if (shown === 0) {
            document.getElementById('flipThing').innerHTML = stored.def[number];
        }
        else {
            document.getElementById('flipThing').innerHTML = stored.term[number];
        }
    }
}
function buttonRight() {
    console.log(number);
    if (number === lengthOfArray-1) {
    }
    else {
        number = number+1;
        if (shown === 0) {
            document.getElementById('flipThing').innerHTML = stored.def[number];
        }
        else {
            document.getElementById('flipThing').innerHTML = stored.term[number];
        }
    }
}