/**
 * This returns the string hello
 * @returns the String hello
 */
function hello() : String {
    return "Hello World";
};

/**
 * turns demo red
 */
 function turnBlue() {
    if (document != null) {
        let c = document.getElementById("title").style.color;
        if (c === 'blue') {
            document.getElementById("title").style.color = "red";
        } else{
            document.getElementById("title").style.color = "blue";
        }
    }    
}

export {hello, turnBlue}
