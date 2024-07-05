const core = require('@actions/core');
const github = require('@actions/github');

try {const display = document.getElementById("display")
const upperdisplay = document.getElementById("upperdisplay")

const inputDisplay = (num) => {
  display.innerHTML += num
  
  if(display.innerHTML[0] === '0') {
    display.innerHTML = num
  }
  upperdisplay.innerHTML = display.innerHTML
}



const calculate = () => {
  display.innerHTML = eval(upperdisplay.innerHTML)
}

const clearDisplay = () => {
  display.innerHTML = 0
  upperdisplay.innerHTML = ''
}

const payload = JSON.stringify(github.context.payload, undefined, 2)
console.log(`The event payload: ${payload}`);
}
 
catch (error) {
  core.setFailed(error.message);
}

