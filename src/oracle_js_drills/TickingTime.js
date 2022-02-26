/* In this challenge you'll create a ticking clock in the document body. In the html file, there is a div with the id of clock. 
Use callback functions and DOM manipulation, output a ticking digital clock which displays the current hours, minutes, and seconds. */


function clock() {
    const clockNode = document.querySelector("#clock");
    return setInterval(()   => {
        let date = new Date();
        let tick = date.toLocaleTimeString();
        clockNode.textContent = tick;
    }, 1000);
}

clock();