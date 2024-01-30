// retrieve button and displays form HTMl file 
const btnY = document.getElementById("yes-button") ;
const btnN = document.getElementById("no-button") ;
const yesCount = document.getElementById("count-yes") ;
const noCount = document.getElementById("count-no") ;

const btnUndo = document.getElementById("undo") ;

// counter variables for yes and no, and temp boolean to control undo button
let yes = 0;
let no = 0;
let last = null;

// use event listeners to increase appropriate counter based on the button clicked
btnY.addEventListener("click", function(){
    yes++;
    last = true;
    yesCount.innerHTML =yes;
})

btnN.addEventListener("click", function(){
    no++;
    last = false;
    noCount.innerHTML =no;
})

// if undo button is clicked, check if the last pressed button is yes (true) or no (false)
// ensure the counter is not set to 0, then decrement the appropriate counter 
// set the last trakcing variable to null, so only the most recent button press is undone 
btnUndo.addEventListener("click", function(){
    if (last){
        if (yes > 0){
            yes = yes - 1;
            last = null;
            yesCount.innerHTML = yes;
        }
    }
    else if (last === false){
        if (no > 0){
            no = no - 1;
            last = null;
            noCount.innerHTML = no;
        }
    }
})

const reportClick = document.getElementById("report");
reportClick.addEventListener("click", function(){
    alert("Is there a problem? Too bad.");
})