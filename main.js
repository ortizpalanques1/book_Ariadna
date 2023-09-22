//References to DOM Elements//
const prevBtn = document.querySelector("#prev-btn");
const nextBtn = document.querySelector("#next-btn");
const book = document.querySelector("#book");

const paper1 = document.querySelector("#p1");
const paper2 = document.querySelector("#p2");
const paper3 = document.querySelector("#p3");
const paper4 = document.querySelector("#p4");
const paper5 = document.querySelector("#p5");

//Event Listener
prevBtn.addEventListener("click", goPrevPage)
nextBtn.addEventListener("click", goNextPage)

//Business Logic
let currentLocation = 1;
let num0Papers = 5;
let maxLocation = num0Papers + 1;

/*Added functions for opacity. Test*/
/*Trying to make this function work with div*/
function fadeBox(element) {
    var op = 1;  // initial opacity
    var timer = setInterval(function () {
        if (op <= 0.01){
            clearInterval(timer);
            element.style.backgroundColor.display = 'none';
        }
        element.style.backgroundColor = "#00FF00";
        element.style.backgroundColor.opacity = op;
        element.style.backgroundColor.filter = 'alpha(opacity=' + op * 100 + ")";
        op -= op * 0.01;
    }, 500);
}
var desaparece = document.getElementsById('b3');
/*End of test*/

function openBook() {
    book.style.transform = "translateX(50%)";
    prevBtn.style.transform = "translateX(-180px)";
    nextBtn.style.transform = "translateX(180px)";

}
function closeBook(isAtBeginning) {
    if(isAtBeginning) {
        book.style.transform = "translateX(0%)";
    } else {
        book.style.transform = "translateX(100%)";
    }
    prevBtn.style.transform = "translateX(0px)";
    nextBtn.style.transform = "translateX(0px)";
}
function goNextPage() {
    if(currentLocation < maxLocation) {
        switch (currentLocation) {
            case 1:
                openBook ();
                paper1.classList.add("flipped");
                paper1.style.zIndex = 1;
                break;
            case 2:
                paper2.classList.add ("flipped");
                paper2.style.zIndex = 2;
                break;
            case 3:
                paper3.classList.add("flipped");
                paper3.style.zIndex = 3;
                break;
            case 5:
                paper4.classList.add("flipped");
                paper4.style.zIndex = 4;
                break;
            case 6:
                paper5.classList.add("flipped");
                paper5.style.zIndex = 5;
                fadeBox(desaparece);
                break;
            default:
                throw new Error("unknow state")
        }
        currentLocation++;
    }
}
function goPrevPage() {
    if(currentLocation > 1) {
        switch(currentLocation) {
            case 2:
                closeBook(true);
                paper1.classList.remove("flipped");
                paper1.style.zIndex = 5;
                break;
            case 3:
                paper2.classList.remove("flipped");
                paper2.style.zIndex = 4;
                break;
            case 4:
                openBook();
                paper3.classList.remove("flipped");
                paper3.style.zIndex = 3;
                break;
            case 5:
                openBook();
                paper4.classList.remove("flipped");
                paper4.style.zIndex = 2;
                break;
            case 6:
                openBook();
                paper5.classList.remove("flipped");
                paper5.style.zIndex = 1;
                break;
            default:
                throw new Error("unknow state")

        }
        currentLocation--;
    }

}
/*function fadeOut() {
    if(zIndex >= 10);
}*/

/*This function works with text*/
function fade(element) {
    var op = 1;  // initial opacity
    var timer = setInterval(function () {
        if (op <= 0.1){
            clearInterval(timer);
            element.style.display = 'none';
        }
        element.style.opacity = op;
        element.style.filter = 'alpha(opacity=' + op * 100 + ")";
        op -= op * 0.1;
    }, 500); 
}

/*var desapareceLetra = document.getElementById('f4');*/


/*fade(desapareceLetra);*/
