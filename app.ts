import { clear } from "console";

/**
 * This returns the string hello
 * @returns the String hello
 */
function hello() : String {
    return "Hello World";
};

let timerId: any = null;

/**
 * Calls changeColor function repeatedly
 */
 function turnGold() {
    if (timerId != null) {
        clearInterval(timerId);
        timerId = null;
    } else {
        timerId = setInterval(changeColor, 100);  
    }
}

/**
 * Changes color from red to gold, or vice versa
 */
function changeColor() {
    if (document != null) {
        let c = document.getElementById("title").style.color;
        if (c === 'gold') {
            document.getElementById("title").style.color = "red";
        } else{
            document.getElementById("title").style.color = "gold";
        }
    }  
}

export {hello, turnGold}
