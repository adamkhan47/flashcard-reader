let stored = {
    term: [],
    def: []
};
let number = 0;
let shown = 0;
let lengthOfArray = [];
lengthOfArray = 0;
let listOfFlashcards = [];
function flashcardLoad() {
    listOfFlashcards = JSON.parse(localStorage.getItem('listOfAllCurrentFlashCards'));
    //let answer = prompt("Type in the name of the flashcard you want to load. Here's the ones you have saved: " + listOfFlashcards);
    document.getElementById('popup').style.visibility = 'visible';
    const buttonContainer = document.getElementById('popup');
    buttonContainer.innerHTML = '<h3>&nbsp&nbspCurrent flashcards available:</h3> <br>';
    for (let i = 0; i<listOfFlashcards.length; i++) {
        let button = document.createElement('button');
        button.classList.add('flashcard-button');
        button.innerHTML = listOfFlashcards[i];
        button.id = 'button' + i;
        button.class = 'woah';
        button.addEventListener('click', () => buttonLoad(i));
        buttonContainer.appendChild(button);
    }
}
function buttonLoad(i) {
    console.log(listOfFlashcards);
    if (listOfFlashcards.includes(listOfFlashcards[i])) {
        stored.term = JSON.parse(localStorage.getItem(listOfFlashcards[i])).term;
        stored.def = JSON.parse(localStorage.getItem(listOfFlashcards[i])).def;
        lengthOfArray = stored.term;
        lengthOfArray = lengthOfArray.length;
        document.getElementById("flashinfo").style.visibility = "visible";
        document.getElementById('flipThing').innerHTML = stored.term[0];
    }
    else {
        console.log("fail");
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
    if (number === 0) {}
    else {
        number = number-1;
        if (number===0) {document.getElementById('left').disabled = true;}
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
        if (number===lengthOfArray-1) {document.getElementById('left').disabled = true;}
        if (shown === 0) {
            document.getElementById('flipThing').innerHTML = stored.term[number];
        }
        else {
            document.getElementById('flipThing').innerHTML = stored.def[number];
        }
    }
}