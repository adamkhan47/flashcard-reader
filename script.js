let stored = {
    term: [],
    def: []
};
let number = 0;
let shown = 0;
let lengthOfArray = [];
lengthOfArray = 0;
function flashcardLoad() {
    const listOfFlashCards = JSON.parse(localStorage.getItem('listOfAllCurrentFlashCards'));
    let answer = prompt("Type in the name of the flashcard you want to load. Here's the ones you have saved: " + listOfFlashCards);

    if (listOfFlashCards.includes(answer)) {
        stored.term = JSON.parse(localStorage.getItem(answer)).term;
        stored.def = JSON.parse(localStorage.getItem(answer)).def;
        lengthOfArray = stored.term;
        lengthOfArray = lengthOfArray.length;
        document.getElementById("flashinfo").style.visibility = "visible";
        document.getElementById('flipThing').innerHTML = stored.term[0];
    }
}
function buttonFlip() {
    console.log("should flip");
    console.log(shown);
    console.log(number);
    if (shown === 0) { // If term is shown
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
            document.getElementById('flipThing').innerHTML = stored.term[number];
        }
        else {
            document.getElementById('flipThing').innerHTML = stored.def[number];
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
            document.getElementById('flipThing').innerHTML = stored.term[number];
        }
        else {
            document.getElementById('flipThing').innerHTML = stored.def[number];
        }
    }
}